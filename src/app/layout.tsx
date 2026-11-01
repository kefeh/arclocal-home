import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArcLocal | Business SMS & Delivery Intelligence",
  description:
    "ArcLocal gives your team one place to reach customers, manage campaigns, track delivery and grow with confidence.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ArcLocal | Business SMS & Delivery Intelligence",
    description:
      "Reach customers, manage campaigns and track delivery with ArcLocal's reliable bulk SMS platform.",
    siteName: "ArcLocal",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-[#102b54]">{children}</body>
    </html>
  );
}
