import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Formulario de registro',
  description: 'Registro de clientes que quieren ganar premios',
  keywords: 'palabra1, palabra2, palabra3'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>
      <body className={inter.className}>
        <div>
        {children}
        </div>
        </body>
    </html>
  )
}
