import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Teamigo",
  description: "Generated by Teamigo",
  metadataBase: new URL("https://teamigo-app.pages.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/"
    }
  },
  openGraph: {
    images: "/opengraph-image.png"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="/newrelic.js" />
    </html>
  )
}