export default function LogoBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#d8d2c5] rounded-full px-4 py-2 shadow-sm">
      {/* Leaf/plant icon */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="11" fill="#e8f5e9" />
        <path
          d="M12 18c0 0-5-3.5-5-7.5A5 5 0 0 1 12 5a5 5 0 0 1 5 5.5C17 14.5 12 18 12 18z"
          fill="#4caf50"
          opacity="0.85"
        />
        <path
          d="M12 18V10"
          stroke="#388e3c"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M12 13c-1.5-1-3-1-3.5-0.5"
          stroke="#388e3c"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M12 11c1.5-1 2.5-1 3-0.5"
          stroke="#388e3c"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[0.7rem] font-semibold tracking-[0.12em] text-[#1a1a1a] uppercase">
        Lakemont Solutions
      </span>
    </div>
  )
}
