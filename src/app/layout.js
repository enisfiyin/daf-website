import { Inter, Handlee } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


// Initialize the fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const handlee = Handlee({
  weight: '400', // Handlee typically only comes in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-handlee',
})

import "./globals.css";


export const metadata = {
  title: "Dare Adeboye Foundation",
  description: "Empowering Communities & Transforming Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${handlee.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>        
      </body>
    </html>
  );
}
