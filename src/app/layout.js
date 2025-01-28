import { Poppins, Epilogue } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/Theme-provider'
import TransitionEffect from '@/components/TransitionEffect'
import { Toaster } from '@/components/ui/toaster'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-epilogue',
})

export const metadata = {
  title: "Brian Antwi's Portfolio",
  description: 'This my portfolio to showcase some of my work',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning>
      <body className={`${poppins.variable} ${epilogue.variable} bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionEffect />
          <Header />
          {children}
        </ThemeProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
