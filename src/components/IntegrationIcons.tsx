/* SVG icons for Slack, Instagram, Notion, HubSpot, LinkedIn */
const icons = [
  {
    key: 'slack',
    label: 'Slack',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#ECE8F5" />
        <path
          d="M9.5 5.5a1.5 1.5 0 1 0 0 3h1.5V7A1.5 1.5 0 0 0 9.5 5.5zm0 4.5H5.5a1.5 1.5 0 0 0 0 3H9.5a1.5 1.5 0 0 0 0-3z"
          fill="#4A154B"
        />
        <path
          d="M14.5 18.5a1.5 1.5 0 0 0 0-3H13v1.5a1.5 1.5 0 0 0 1.5 1.5zm0-4.5h4a1.5 1.5 0 0 0 0-3h-4a1.5 1.5 0 0 0 0 3z"
          fill="#4A154B"
        />
        <path
          d="M5.5 14.5a1.5 1.5 0 0 0 1.5 1.5h1.5V14.5a1.5 1.5 0 0 0-3 0zm4.5 0v4a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-3 0z"
          fill="#E01E5A"
        />
        <path
          d="M18.5 9.5a1.5 1.5 0 0 0-1.5-1.5H15.5v1.5a1.5 1.5 0 0 0 3 0zm-4.5 0V5.5a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 3 0z"
          fill="#36C5F0"
        />
      </svg>
    ),
  },
  {
    key: 'instagram',
    label: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#fce4ec" />
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="#e91e63" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="#e91e63" strokeWidth="1.5" fill="none" />
        <circle cx="16.5" cy="7.5" r="1" fill="#e91e63" />
      </svg>
    ),
  },
  {
    key: 'notion',
    label: 'Notion',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#f5f5f5" />
        <path
          d="M6 5.5h7.5l4.5 4.5V19H6V5.5z"
          stroke="#1a1a1a"
          strokeWidth="1.3"
          fill="white"
        />
        <path d="M13.5 5.5V10H18" stroke="#1a1a1a" strokeWidth="1.3" fill="none" />
        <path d="M9 13h6M9 15.5h4" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'hubspot',
    label: 'HubSpot',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#fff3e0" />
        <circle cx="15.5" cy="8.5" r="2.5" fill="#ff7a59" />
        <path
          d="M13 8.5A3.5 3.5 0 1 0 9.5 12H13V8.5z"
          stroke="#ff7a59"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="9.5" cy="15.5" r="2.5" fill="#ff7a59" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#e3f2fd" />
        <path
          d="M7 10.5v7M7 7.5v.01M11 17.5v-4a2 2 0 0 1 4 0v4M11 10.5v7"
          stroke="#0077b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function IntegrationIcons() {
  return (
    <div className="flex items-center gap-2">
      {icons.map(({ key, label, svg }) => (
        <span key={key} title={label} className="flex-shrink-0">
          {svg}
        </span>
      ))}
    </div>
  )
}
