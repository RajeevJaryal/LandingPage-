import React from "react";
import { ArrowUpRight, Phone } from "lucide-react";

export default function ProductivityCTA() {
  return (
    <section className="bg-[#f2f2f2] px-4 py-10 font-sans text-[#07111f]">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative min-h-[420px] overflow-hidden">
          <GreenShape />
          <CircleBackground />
          <CTAContent />
        </div>
      </div>
    </section>
  );
}

function GreenShape() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1280 420"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 0H1120C1120 38 1150 68 1188 68H1252C1268 68 1280 80 1280 96V350C1280 366 1268 378 1252 378H1228C1208 378 1192 394 1192 414V420H168C152 420 140 408 140 392C140 380 130 370 118 370H28C12 370 0 358 0 342V28C0 12 12 0 28 0Z"
        fill="#00ec78"
      />
    </svg>
  );
}

function CircleBackground() {
  const circles = [
    {
      className:
        "left-[190px] top-[-260px] h-[760px] w-[760px] border-[70px]",
    },
    {
      className:
        "left-[300px] top-[-150px] h-[540px] w-[540px] border-[70px]",
    },
    {
      className:
        "left-[415px] top-[-35px] h-[310px] w-[310px] border-[65px]",
    },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute rounded-full border-white/5 ${circle.className}`}
        />
      ))}
    </>
  );
}

function CTAContent() {
  return (
    <div className="relative z-10 flex min-h-[420px] flex-col justify-around px-11 py-16 md:px-14 lg:px-16">
      <div>
        <h2 className="max-w-[940px] text-[34px] font-medium leading-[1.35] tracking-[-2px] text-[#081323] md:text-[50px] lg:text-[55px]">
          Take control of your productivity
          <br />
          with a GPT-4 chatbot now
        </h2>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[500px] text-[18px] leading-[1.55] text-[#0b3f31]/80">
          Transform your Customer Service with Rotar&apos;s AI and
          <br className="hidden md:block" />
          GPT-4 Powered Chatbot Solution. Try it free now.
        </p>

        <CTAButtons />
      </div>
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 lg:pr-12">
      <CTAButton variant="primary" icon={<ArrowUpRight size={21} />}>
        Book a Demo
      </CTAButton>

      <CTAButton variant="secondary" icon={<Phone size={19} />}>
        Contact Us
      </CTAButton>
    </div>
  );
}

function CTAButton({ children, icon, variant = "primary" }) {
  const isPrimary = variant === "primary";

  const buttonClass = isPrimary
    ? "bg-black text-white hover:scale-[1.03]"
    : "border border-black text-black hover:bg-black hover:text-white";

  return (
    <button
      className={`flex h-[54px] items-center justify-center gap-3 rounded-full px-8 text-[16px] font-medium transition ${buttonClass}`}
    >
      {children}
      {icon}
    </button>
  );
}