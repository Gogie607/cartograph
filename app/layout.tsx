import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { AccountControls } from "@/components/account-controls";
import { ThemeControl } from "@/components/theme-control";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartograph",
  description: "Explore a GitHub repository as a dependency map.",
};

const themeScript = `try{const theme=localStorage.getItem("cartograph-theme");document.documentElement.dataset.theme=theme==="light"||theme==="dark"?theme:"system"}catch{document.documentElement.dataset.theme="system"}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <ClerkProvider
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
          signInForceRedirectUrl="/"
          signUpForceRedirectUrl="/"
          afterSignOutUrl="/sign-in"
          taskUrls={{ "choose-organization": "/choose-organization" }}
          appearance={{
            variables: {
              colorPrimary: "var(--foreground)",
              colorPrimaryForeground: "var(--background)",
              colorBackground: "var(--panel)",
              colorForeground: "var(--foreground)",
              colorMutedForeground: "var(--muted)",
              colorInput: "var(--background)",
              colorInputForeground: "var(--foreground)",
              colorBorder: "var(--border)",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "13px",
              borderRadius: "4px",
            },
          }}
        >
          <header className="app-header">
            <Link href="/" className="brand">Cartograph</Link>
            <div className="header-controls">
              <ThemeControl />
              <nav aria-label="Account" className="account-controls">
                <Suspense fallback={<span className="muted" role="status">Loading account…</span>}>
                  <AccountControls />
                </Suspense>
              </nav>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
