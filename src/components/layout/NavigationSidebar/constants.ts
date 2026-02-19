export interface NavItem {
  id: string
  label: string
  badge?: boolean
}

export interface NavSection {
  id: string
  title: string
  items: NavItem[]
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'vacancies',
    title: 'Vacancies',
    items: [
      { id: 'vac-grid', label: 'Vacancies' },
      { id: 'vac-applications', label: 'Applications' },
      { id: 'vac-messages', label: 'Messages', badge: true },
      { id: 'vac-documents', label: 'Documents' },
    ],
  },
  {
    id: 'professionals',
    title: 'Professionals',
    items: [
      { id: 'pro-candidates', label: 'Candidates' },
      { id: 'pro-profiles', label: 'Profiles', badge: true },
    ],
  },
  {
    id: 'administration',
    title: 'Administration',
    items: [
      { id: 'adm-dashboard', label: 'Dashboard' },
      { id: 'adm-reports', label: 'Reports' },
      { id: 'adm-tables', label: 'Tables' },
      { id: 'adm-finance', label: 'Finance' },
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    items: [
      { id: 'fin-bank', label: 'Bank' },
      { id: 'fin-settings', label: 'Settings' },
    ],
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    items: [
      { id: 'rec-jobs', label: 'Jobs' },
      { id: 'rec-team', label: 'Team' },
      { id: 'rec-legal', label: 'Legal' },
      { id: 'rec-salary', label: 'Salary' },
      { id: 'rec-templates', label: 'Templates' },
    ],
  },
]
