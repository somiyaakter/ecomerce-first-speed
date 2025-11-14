// app/about/page.tsx
import type { Metadata } from "next";

// Force static generation
export const dynamic = "force-static";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "About Us | YourBrand",
  description:
    "Learn about our story, mission, and commitment to providing quality products and exceptional service.",
  keywords: "about us, our story, company history, ecommerce, online shopping",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1>The Latest</h1>
    </div>
  );
}
