import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
const coolVeticaRegular = localFont({
  src: "./fonts/Coolvetica-Regular.ttf",
  display: "swap",
  variable: "--font-cool-reg",
});
const brochilloRegular = localFont({
  src: "./fonts/BrohilloRegular.ttf",
  display: "swap",
  variable: "--font-broch-reg",
});

export const metadata: Metadata = {
  title: "Launchit",
  description:
    "Launch your SaaS product with confidence. Our expert team provides end-to-end development, design, and marketing services to help you succeed in the competitive SaaS market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body
        className={`${coolVeticaRegular.variable} ${brochilloRegular.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
