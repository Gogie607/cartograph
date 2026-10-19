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
            <Link href="/" className="brand">
              <svg className="brand-mark" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5v12M5 11h12V5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2.5 2.5h5v5h-5zM14.5 2.5h5v5h-5zM2.5 14.5h5v5h-5z" fill="var(--panel)" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Cartograph
            </Link>
            <div className="header-controls">
              <ThemeControl />
              <nav aria-label="Account" className="account-controls">
                <Suspense fallback={<span className="muted" role="status">Loading account…</span>}>
                  {/* Match the account controls' first browser render to this request's session. */}
                  <ClerkProvider dynamic>
                    <AccountControls />
                  </ClerkProvider>
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
