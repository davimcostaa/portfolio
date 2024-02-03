import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import {NextIntlClientProvider, useMessages} from 'next-intl';
import StyledComponentsRegistry from './styled-components-registry'

const font = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davi Costa',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={font.className}>
          <NextIntlClientProvider messages={messages}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </NextIntlClientProvider>
      </body>
    </html>
  )
}
