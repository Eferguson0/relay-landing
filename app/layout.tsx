import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Relay: The AI Notepad',
  description: 'Relay – the AI notepad for drafting and editing across chatbots in one place.',
  generator: 'Relay',
  icons: {
    icon: [
      { url: '/relay_broswer_tab.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [{ url: '/relay_broswer_tab.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/relay_broswer_tab.png', sizes: '32x32', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
