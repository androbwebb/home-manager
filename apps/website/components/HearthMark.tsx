export function HearthMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M6 28V11.5L16 4l10 7.5V28h-7v-9.5h-6V28H6Z"
        fill="currentColor"
      />
      <path
        d="M13 28v-9.5h6V28"
        stroke="#F4EFE6"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
