import type { ReactNode } from "react"

type IconProps = { className?: string }

function Icon({ className = "", children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export const TruckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 7h11v9H3z" />
    <path d="M14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </Icon>
)

export const HeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </Icon>
)

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l7 3v5c0 4.6-3 8.3-7 10-4-1.7-7-5.4-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
)

export const GiftIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
    <path d="M3 9h18M12 9v11" />
    <path d="M12 9c-1.5-3-5-3.5-5-1.2C7 9 12 9 12 9zM12 9c1.5-3 5-3.5 5-1.2C17 9 12 9 12 9z" />
  </Icon>
)

export const BagIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </Icon>
)

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
)

export const PlusIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
)

export const MinusIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14" />
  </Icon>
)

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)

export const MoonIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </Icon>
)

export const SunIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
  </Icon>
)

export const InstagramIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </Icon>
)

export const TikTokIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14.5 3.5v10.2a3.7 3.7 0 1 1-3.2-3.66" />
    <path d="M14.5 3.5c.6 2.6 2.6 4.4 5 4.6" />
  </Icon>
)
