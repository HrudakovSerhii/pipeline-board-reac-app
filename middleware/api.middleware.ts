import fs from 'node:fs'
import path from 'node:path'
import type { Connect, Plugin } from 'vite'

/**
 * Mock API middleware — shared between dev and preview servers.
 * Reads and writes public/api/candidates.json so PATCH changes persist across refreshes.
 * Used for both `vite dev` and `vite preview` (prod build preview).
 */
function createMockApiMiddleware(vacancyPath: string, candidatesPath: string): Connect.NextHandleFunction {
  return (req, res, next) => {
    // GET /api/vacancy/:id
    const vacancyMatch = req.url?.match(/^\/api\/vacancy\/(.+)$/)
    if (req.method === 'GET' && vacancyMatch) {
      const db = JSON.parse(fs.readFileSync(vacancyPath, 'utf-8')) as { vacancy: Record<string, unknown> }
      if (db.vacancy['id'] !== vacancyMatch[1]) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.end(JSON.stringify({ error: 'Not found' }))
        return
      }
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify({ vacancy: db.vacancy }))
      return
    }

    const candidatesMatch = req.url?.match(/^\/api\/candidates\/(.+)$/)

    // GET /api/candidates/:vacancyId — list candidates for a vacancy
    if (req.method === 'GET' && candidatesMatch) {
      const vacancyId = candidatesMatch[1]
      const vacancy = JSON.parse(fs.readFileSync(vacancyPath, 'utf-8')) as { vacancy: Record<string, unknown> }
      if (vacancy.vacancy['id'] !== vacancyId) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.end(JSON.stringify({ error: 'Not found' }))
        return
      }
      const db = JSON.parse(fs.readFileSync(candidatesPath, 'utf-8')) as {
        candidates: Array<Record<string, unknown>>
      }
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify({ candidates: db.candidates, totalCount: db.candidates.length }))
      return
    }

    // PATCH /api/candidates/:id — update candidate in candidates.json, return updated record
    if (req.method === 'PATCH' && candidatesMatch) {
      const id = candidatesMatch[1]
      let body = ''
      req.on('data', (chunk: Buffer) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        const update = JSON.parse(body) as Record<string, unknown>
        const db = JSON.parse(fs.readFileSync(candidatesPath, 'utf-8')) as {
          candidates: Array<Record<string, unknown>>
        }
        const idx = db.candidates.findIndex((c) => c['id'] === id)
        if (idx !== -1) {
          db.candidates[idx] = { ...db.candidates[idx], ...update }
          fs.writeFileSync(candidatesPath, JSON.stringify(db, null, 2))
        }
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = idx !== -1 ? 200 : 404
        res.end(JSON.stringify(idx !== -1 ? db.candidates[idx] : { error: 'Not found' }))
      })
      return
    }

    next()
  }
}

export function mockApi(): Plugin {
  const vacancyPath = path.resolve(__dirname, 'public/api/vacancy.json')
  const candidatesPath = path.resolve(__dirname, 'public/api/candidates.json')
  const middleware = createMockApiMiddleware(vacancyPath, candidatesPath)

  return {
    name: 'mock-api',
    // Used by `vite dev`
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    // Used by `vite preview` (prod build preview with mock API)
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}
