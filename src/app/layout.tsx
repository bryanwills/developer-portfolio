import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bryan Wills - Senior Software Engineer',
  description: 'Bryan Wills - Senior Software Engineer specializing in React, TypeScript, and full-stack development. View my portfolio of web applications and projects.',
  keywords: ['Software Engineer', 'React', 'TypeScript', 'Full Stack', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Bryan Wills' }],
  creator: 'Bryan Wills',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bryanwills.dev',
    title: 'Bryan Wills - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in React, TypeScript, and full-stack development.',
    siteName: 'Bryan Wills Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Wills - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in React, TypeScript, and full-stack development.',
    creator: '@bryanwills',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
