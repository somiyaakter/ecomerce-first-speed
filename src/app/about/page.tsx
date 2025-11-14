// app/about/page.tsx
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us | YourBrand",
  description:
    "Learn about our story, mission, and commitment to providing quality products and exceptional service.",
  keywords: "about us, our story, company history, ecommerce, online shopping",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-amber-700">
            About <span className="text-amber-600">YourBrand</span>
          </h1>
          <p className="mt-4 text-lg text-amber-800/90">
            Learn more about who we are, what we do, and why we exist.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800">
          The Latest Tech Trends You Need to Know About
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Technology is transforming the world faster than ever. Staying updated
          is crucial for both personal and business growth. Here are the most
          important tech trends shaping the future:
        </p>

        <ul className="mt-6 space-y-3">
          <li className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 shadow-sm">
            ➤ Artificial Intelligence (AI)
          </li>
          <li className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 shadow-sm">
            ➤ Internet of Things (IoT)
          </li>
          <li className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 shadow-sm">
            ➤ Quantum Computing
          </li>
          <li className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 shadow-sm">
            ➤ Blockchain Technology
          </li>
          <li className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 shadow-sm">
            ➤ Augmented Reality (AR)
          </li>
        </ul>
      </section>

      {/* Mission Section */}
      <section className="bg-amber-50 py-16 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-amber-700">Our Mission</h3>
          <p className="text-amber-800/90 mt-4 leading-relaxed">
            At YourBrand, we are committed to delivering high-quality products,
            innovative solutions, and a seamless online shopping experience for
            everyone.
          </p>
        </div>
      </section>
    </div>
  );
}
