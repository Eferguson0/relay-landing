"use client"

import { useTheme } from "next-themes"
import { Monitor, Sun, Moon } from "lucide-react"
import { useMounted } from "@/hooks/use-mounted"

const options = [
  { value: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  { value: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
  { value: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
]

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  if (!mounted) return null
  
  return (
    <div className="flex rounded-lg border border-border bg-background/80 p-0.5 gap-0.5 shadow-inner w-fit">
      {options.map((opt) => {
        const isActive = theme === opt.value
        return (
          <button
            key={opt.value}
            aria-label={opt.label}
            onClick={() => setTheme(opt.value)}
            className={`flex items-center justify-center w-7 h-7 rounded-md transition
              ${isActive
                ? "bg-muted border border-border shadow text-foreground"
                : "bg-transparent border border-transparent text-muted-foreground hover:bg-muted/60"
              }`}
            tabIndex={0}
            type="button"
          >
            {opt.icon}
          </button>
        )
      })}
    </div>
  )
}
