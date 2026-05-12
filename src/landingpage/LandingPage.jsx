import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const navLinks = ["Product", "Solutions", "Resources", "Pricing"];

const services = ["Website Development", "UI/UX Design", "SEO"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] px-5 py-7 font-sans text-[#111]">
      <Header />

      <main className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 rounded-[28px] bg-white p-7 lg:grid-cols-2 lg:p-8">
        <HeroContent />
        <ContactSection />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="relative mx-auto mb-5 flex max-w-[1200px] items-center justify-center text-[13px] font-medium text-[#222]">
      <nav className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <a key={link} href="#" className="hover:text-black">
            {link}
          </a>
        ))}
      </nav>

      <button className="absolute right-0 top-0 flex items-center gap-2 rounded-full bg-[#00ec78] px-5 py-3 text-xs font-semibold text-black transition hover:scale-105 md:right-6">
        Book a demo
        <ArrowUpRight size={16} />
      </button>
    </header>
  );
}

function HeroContent() {
  return (
    <section className="flex min-w-0 flex-col justify-between gap-9 py-7">
      <div>
        <h1 className="max-w-[560px] text-[46px] font-medium leading-[1.15] tracking-[-1.5px] md:text-[58px] lg:text-[42px] xl:text-[56px]">
          Website Development
          <br />
          & Designing <Highlight>for</Highlight>
          <br />
          <Highlight>Business Growth</Highlight>
          <ToggleIcon />
        </h1>

        <p className="mt-10 max-w-[460px] text-sm leading-6 text-[#333]">
          Embrace AI chatbot technology in a GPT-4-supported communication tool
          to help your customers, empower your team, and reduce your workload.
        </p>
      </div>

      <GuideCard />
    </section>
  );
}

function Highlight({ children }) {
  return (
    <span className="rounded-xl bg-[#b9f8d4] px-2">
      {children}
    </span>
  );
}

function ToggleIcon() {
  return (
    <span className="ml-2 inline-flex h-[50px] w-[68px] translate-y-2 items-center rounded-full border border-black bg-white p-[3px]">
      <span className="h-[42px] w-[42px] rounded-full bg-black shadow-[13px_0_0_#fff,14px_0_0_#111]" />
    </span>
  );
}

function GuideCard() {
  return (
    <div className="relative mt-2 h-[226px] w-full max-w-[590px]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 590 226"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M38 0H420C420 20 438 38 462 38H552C574 38 590 54 590 76V150C590 172 574 188 552 188H462C438 188 420 206 420 226H38C17 226 0 209 0 188V38C0 17 17 0 38 0Z"
          fill="#ffedbf"
        />
      </svg>

      <div className="relative z-10 px-[46px] py-[48px]">
        <h3 className="max-w-[390px] text-[26px] font-semibold leading-[1.22] tracking-[-0.4px] text-black">
          Guide: The Rotar AI Tutorial
          <br />
          Hand Book
        </h3>

        <p className="mt-5 max-w-[360px] text-[18px] leading-[1.55] text-[#5f5a4f]">
          Everything you need to know
          <br />
          about the first steps in chatbots.
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="flex flex-col gap-4">
      <FormCard />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatsCard />
        <ServiceCard />
      </div>
    </section>
  );
}

function FormCard() {
  return (
    <div className="rounded-[30px] bg-[#ffdda1] p-3">
      <form className="rounded-[24px] border border-[#f3d396] bg-white p-7 md:p-8">
        <h2 className="mb-6 text-[15px] font-bold text-[#0b2a4a]">
          You can start with just one click.
        </h2>

        <InputField label="Name" placeholder="Name" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField label="Email" placeholder="Email" />
          <InputField label="Phone No" placeholder="Phone No" />
        </div>

        <ServiceSelect />

        <div className="mt-14 flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#00ec78] px-5 py-3 text-xs font-bold text-black transition hover:scale-105"
          >
            Submit
            <ArrowUpRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-xs font-semibold text-[#60738a]">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-[#ccd7e3] px-4 text-sm outline-none focus:border-[#00ec78]"
      />
    </div>
  );
}

function ServiceSelect() {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#60738a]">
        Service
      </label>

      <div className="relative">
        <select className="h-10 w-full appearance-none rounded-md border border-[#ccd7e3] px-4 text-sm text-[#60738a] outline-none focus:border-[#00ec78]">
          <option>Service</option>

          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0b2a4a]"
        />
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="rounded-[28px] bg-[#a7f8cd] p-6 shadow-inner [background-image:radial-gradient(circle,rgba(255,255,255,.55)_1px,transparent_1.5px)] [background-size:8px_8px]">
      <div className="text-[42px] font-bold leading-none">+ 500</div>

      <p className="mt-3 max-w-[210px] text-sm leading-5 text-[#17251d]">
        Big companies use Rotar AI for their services
      </p>
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-black p-6 text-white">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,#555_0,transparent_34%),radial-gradient(circle_at_50%_50%,#666_0,transparent_33%),radial-gradient(circle_at_85%_45%,#444_0,transparent_35%)]" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-2">
          {[1, 2, 3].map((item) => (
            <StarIcon key={item} />
          ))}
        </div>

        <h3 className="max-w-[220px] text-2xl font-light leading-7">
          AI-driven customer service
        </h3>
      </div>
    </div>
  );
}

function StarIcon({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M40 0C43 24 52 37 80 40C52 43 43 56 40 80C37 56 28 43 0 40C28 37 37 24 40 0Z"
        fill="white"
      />
    </svg>
  );
}