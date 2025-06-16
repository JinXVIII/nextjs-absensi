import { sidebarThemes } from "./sidebar-themes"

export function applySidebarTheme(theme: keyof typeof sidebarThemes, mode: "light" | "dark" = "light") {
  if (typeof window === "undefined") return

  const root = document.documentElement
  const themeData = sidebarThemes[theme][mode]

  for (const [key, value] of Object.entries(themeData)) {
    root.style.setProperty(`--${key}`, value)
  }
}
