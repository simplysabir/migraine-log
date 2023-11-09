import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { useState } from 'react'
import { darkTheme, lightTheme } from '../theme/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Migraine Log',
  description: 'Every ache, every triumph – commit to understanding your migraines with migraine log.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false);
  const switchTheme : any = () => {
    setIsDark(!isDark);
  }
  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <body className={inter.className}>{children}</body>
      </LocalizationProvider>
      </ThemeProvider>
    </html>
  )
}
