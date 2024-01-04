import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './styled-components-registry'

const font = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davi Costa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
