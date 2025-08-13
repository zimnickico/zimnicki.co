import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "@/lib/providers/posthog";

export const metadata: Metadata = {
  title: "Christoph Zimnicki",
  description: "Christoph Zimnicki is an entrepreneur and designer.",
  keywords: ["entrepreneur", "designer", "engineer", "product designer"],
  authors: [{ name: "Christoph Zimnicki", url: "https://zimnicki.co" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <body className="subpixel-antialiased">{children}</body>
      </PostHogProvider>
    </html>
  );
}
