"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-[#d9d9d9] flex w-full px-8 py-8 items-center gap-6 overflow-hidden flex-wrap md:px-8">
        <div className="flex items-center gap-6 my-auto w-10">
          <div className="flex items-center justify-center my-auto w-10">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={24}
              height={35}
              className="object-contain w-6"
            />
          </div>
        </div>

        <nav className="flex min-w-60 my-auto items-start gap-2 font-sans text-base text-[#1e1e1e] font-normal flex-wrap flex-1 flex-shrink justify-end">
          <div className="rounded-lg bg-[#f5f5f5] px-2 py-2">Products</div>
          <div className="rounded-lg px-2 py-2">Solutions</div>
          <div className="rounded-lg px-2 py-2">Community</div>
          <div className="rounded-lg px-2 py-2">Resources</div>
          <div className="rounded-lg px-2 py-2">Pricing</div>
          <div className="rounded-lg px-2 py-2">Contact</div>
          <div className="rounded-lg px-2 py-2">Link</div>
        </nav>

        <div className="flex my-auto items-center gap-3 font-sans text-base font-normal w-[178px]">
          <button className="rounded-lg bg-[#e3e3e3] border border-[#767676] my-auto px-2 py-2 overflow-hidden text-[#1e1e1e] flex-1 flex-shrink">
            Sign in
          </button>
          <button className="rounded-lg bg-[#2c2c2c] border border-[#2c2c2c] my-auto px-2 py-2 overflow-hidden text-[#f5f5f5] whitespace-nowrap flex-1 flex-shrink">
            Register
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f5f5f5] flex w-full px-6 py-40 flex-col items-center font-sans whitespace-nowrap md:px-6 md:py-40 max-md:py-24 max-md:whitespace-normal">
        <div className="w-[151px] max-w-full text-center leading-tight">
          <h1 className="text-[#1e1e1e] text-[72px] font-bold tracking-[-2.16px] max-md:text-[40px]">
            Title
          </h1>
          <h2 className="text-[#757575] text-[32px] font-normal mt-2">
            Subtitle
          </h2>
        </div>

        <div className="flex mt-8 w-60 max-w-full items-center gap-4 text-base font-normal max-md:whitespace-normal flex-col sm:flex-row">
          <button className="rounded-lg bg-[#e3e3e3] border border-[#767676] my-auto px-3 py-3 overflow-hidden text-[#1e1e1e] flex-1 flex-shrink">
            Button
          </button>
          <button className="rounded-lg bg-[#2c2c2c] border border-[#2c2c2c] my-auto px-3 py-3 overflow-hidden text-[#f5f5f5] flex-1 flex-shrink">
            Button
          </button>
        </div>
      </section>

      {/* Banner Image */}
      <Image
        src="/banner.jpg"
        alt="Banner"
        width={1200}
        height={400}
        className="object-contain w-full"
      />

      {/* Testimonials Section */}
      <section className="bg-white w-full px-16 py-16 font-sans whitespace-nowrap max-md:px-5 max-md:whitespace-normal">
        <div className="w-[113px] max-w-full leading-tight">
          <h3 className="text-[#1e1e1e] text-2xl font-semibold tracking-[-0.48px]">
            Heading
          </h3>
          <p className="text-[#757575] text-xl font-normal mt-2">Subheading</p>
        </div>

        <div className="flex mt-12 w-full items-start gap-12 flex-wrap max-md:mt-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-white border border-[#d9d9d9] min-w-[300px] p-6 flex-1 flex-shrink max-md:p-5"
            >
              <div className="flex-1 flex-shrink w-full text-2xl text-[#1e1e1e] font-semibold tracking-[-0.48px] leading-tight">
                "Quote"
              </div>
              <div className="flex mt-6 w-[139px] max-w-full items-start gap-3 text-base leading-normal">
                <Image
                  src={`/avatar${(index % 3) + 1}.jpg`}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1 flex-shrink">
                  <div className="text-[#757575] font-semibold">Title</div>
                  <div className="text-[#b3b3b3] font-normal">Description</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#d9d9d9] flex w-full px-8 py-8 pb-40 items-start gap-4 overflow-hidden flex-wrap max-md:px-5 max-md:pb-24">
        <div className="flex min-w-60 flex-col items-start w-[262px]">
          <div className="flex w-[23px] items-center justify-center">
            <Image
              src="/logo-small.svg"
              alt="Logo"
              width={23}
              height={35}
              className="object-contain w-[23px]"
            />
          </div>
          <div className="flex mt-6 items-center gap-4">
            <Image
              src="/social1.svg"
              alt="Social"
              width={24}
              height={24}
              className="object-contain w-6 h-6 flex-shrink-0"
            />
            <Image
              src="/social2.svg"
              alt="Social"
              width={24}
              height={24}
              className="object-contain w-6 h-6 flex-shrink-0"
            />
            <Image
              src="/social3.svg"
              alt="Social"
              width={24}
              height={24}
              className="object-contain w-6 h-6 flex-shrink-0"
            />
            <Image
              src="/social4.svg"
              alt="Social"
              width={24}
              height={24}
              className="object-contain w-6 h-6 flex-shrink-0"
            />
          </div>
        </div>

        {/* Footer Navigation */}
        {[
          {
            title: "Use cases",
            items: [
              "UI design",
              "UX design",
              "Wireframing",
              "Diagramming",
              "Brainstorming",
              "Online whiteboard",
              "Team collaboration",
            ],
          },
          {
            title: "Explore",
            items: [
              "Design",
              "Prototyping",
              "Development features",
              "Design systems",
              "Collaboration features",
              "Design process",
              "FigJam",
            ],
          },
          {
            title: "Resources",
            items: [
              "Blog",
              "Best practices",
              "Colors",
              "Color wheel",
              "Support",
              "Developers",
              "Resource library",
            ],
          },
        ].map((column, index) => (
          <div
            key={index}
            className="flex min-w-60 flex-col items-start font-sans text-base text-[#1e1e1e] font-normal leading-normal w-[262px]"
          >
            <div className="w-full pb-4 font-semibold">
              <div className="w-full">{column.title}</div>
            </div>
            {column.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mt-3 w-[89px]">
                {item}
              </div>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}
