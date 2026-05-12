import React from "react";

const footerColumns = [
  {
    title: "Company",
    links: ["About Rotar AI", "Pricing", "Demo"],
  },
  {
    title: "Resources",
    links: ["Blog", "Events", "Tool Library"],
  },
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy Policy"],
  },
];

const socialLinks = ["Instagram", "LinkedIn", "Twitter", "Github"];

export default function FooterSection() {
  return (
    <footer className="bg-[#f2f2f2] px-5 py-12 font-sans text-white">
      <div className="mx-auto max-w-[1280px] rounded-[36px] bg-[#111] px-10 py-16 md:px-14 lg:px-16">
        <FooterTop />
        <Divider />
        <FooterBottom />
      </div>
    </footer>
  );
}

function FooterTop() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
      <div className="grid max-w-[560px] grid-cols-1 gap-10 sm:grid-cols-3">
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} column={column} />
        ))}
      </div>

      <div className="lg:pl-12">
        <p className="max-w-[470px] text-[18px] leading-[1.55] text-white/85">
          We are at the forefront of AI chatbot development, revolutionizing the
          way businesses engage with their customers.
        </p>
      </div>
    </div>
  );
}

function FooterColumn({ column }) {
  return (
    <div>
      <h3 className="text-[24px] font-bold tracking-[-0.4px]">
        {column.title}
      </h3>

      <ul className="mt-7 space-y-5">
        {column.links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[18px] font-normal text-white/85 transition hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Divider() {
  return <div className="my-16 h-px w-full bg-white/20" />;
}

function FooterBottom() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
      <SocialLinks />
      <CopyrightPill />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => (
        <a
          key={social}
          href="#"
          className="flex h-[40px] items-center justify-center rounded-full border border-white/80 px-5 text-[15px] text-white transition hover:bg-white hover:text-black"
        >
          {social}
        </a>
      ))}
    </div>
  );
}

function CopyrightPill() {
  return (
    <div className="flex h-[42px] flex-1 items-center justify-center gap-3 rounded-full border border-white/80 px-5 text-[15px] text-white">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
        <span className="text-[16px] font-black leading-none">M</span>
      </span>

      <span>Rotar AI. All Rights Reserved</span>
    </div>
  );
}