import React from "react";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Engage",
    description:
      "Reach out to visitors proactively using personalized chatbot greetings. Turn website visits into sales opportunities.",
    active: true,
  },
  {
    title: "Nurture",
    description:
      "Lead customers to a sale through recommended purchases and tailored offerings.",
  },
  {
    title: "Qualify",
    description:
      "Generate and qualify prospects automatically. Transfer high-intent leads to your sales reps in real time to shorten the sales cycle.",
  },
];

export default function ConversationsSection() {
  return (
    <section className="min-h-screen bg-[#f2f2f2] px-4 py-10 font-sans text-[#111]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 lg:grid-cols-[360px_1fr]">
        <IntroCard />
        <HeadingCard />
        <ContentCard />
      </div>
    </section>
  );
}

function IntroCard() {
  return (
    <div className="rounded-tl-[28px] bg-[#f2f2f2] p-10">
      <p className="max-w-[270px] text-[13px] leading-[1.55] text-[#333]">
        Throughout your customer&apos;s entire buying journey, Rotar AI allows
        you to delight them at every step of the way, from their first visit to
        the final purchase.
      </p>

      <button className="mt-8 flex h-[48px] w-[285px] max-w-full items-center justify-center gap-3 rounded-full bg-black text-[12px] font-semibold text-white transition hover:scale-105">
        Get Started
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
}

function HeadingCard() {
  return (
    <div className="rounded-t-[28px] bg-white px-10 py-12 lg:rounded-tr-[28px]">
      <h2 className="max-w-[760px] text-[42px] font-medium leading-[1.28] tracking-[-1.8px] text-black md:text-[56px]">
        <Highlight>Redefining</Highlight> Conversations
        <br />
        and <Highlight>Enhancing</Highlight> User
        <br />
        experience
        <PillIcon />
      </h2>
    </div>
  );
}

function ContentCard() {
  return (
    <div className="col-span-1 rounded-b-[28px] bg-white p-10 lg:col-span-2">
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-[420px_minmax(0,1fr)]">
        <FeatureList />
        <DeviceMockup />
      </div>
    </div>
  );
}

function Highlight({ children }) {
  return (
    <span className="rounded-[12px] bg-[#b9f8d4] px-2">{children}</span>
  );
}

function FeatureList() {
  return (
    <div className="space-y-7">
      {features.map((feature) => (
        <FeatureItem key={feature.title} {...feature} />
      ))}
    </div>
  );
}

function FeatureItem({ title, description, active }) {
  const wrapperClass = active
    ? "rounded-[14px] bg-[#ffebbd] p-6"
    : "px-6";

  const textClass = active ? "text-[#333]" : "text-[#777]";

  return (
    <div className={wrapperClass}>
      <h3 className="text-[22px] font-bold">{title}</h3>

      <p className={`mt-5 max-w-[360px] text-[14px] leading-[1.55] ${textClass}`}>
        {description}
      </p>
    </div>
  );
}

function PillIcon() {
  return (
    <span className="relative ml-4 inline-flex h-[54px] w-[150px] translate-y-2 items-center justify-center">
      <span className="absolute left-0 top-[3px] h-[48px] w-[134px] rounded-full border-[1.5px] border-black bg-white" />
      <span className="absolute left-[7px] top-[3px] h-[48px] w-[134px] rounded-full border-[1.5px] border-black bg-white" />
      <span className="absolute left-[14px] top-[3px] h-[48px] w-[134px] rounded-full border-[1.5px] border-black bg-white" />

      <span className="relative z-10 flex h-[44px] w-[122px] items-center justify-center rounded-full border-[1.5px] border-black bg-white">
        <EyeArrowIcon />
      </span>
    </span>
  );
}

function EyeArrowIcon() {
  return (
    <svg
      width="78"
      height="30"
      viewBox="0 0 156 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 30C14 13 30 4 48 4C66 4 82 13 90 30C82 47 66 56 48 56C30 56 14 47 6 30Z"
        stroke="black"
        strokeWidth="8"
        strokeLinejoin="round"
      />

      <circle cx="48" cy="30" r="14" stroke="black" strokeWidth="8" />

      <path
        d="M105 30H145"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="square"
      />

      <path
        d="M128 12L146 30L128 48"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function DeviceMockup() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-[#b9f8d4]">
      <LaptopMockup />
      <PhoneMockup />

      <div className="absolute bottom-0 left-0 right-0 h-[16%] bg-gradient-to-t from-white/25 to-transparent" />
    </div>
  );
}

function LaptopMockup() {
  return (
    <>
      <div className="absolute bottom-[20%] right-[2%] h-[74%] w-[78%] rounded-t-[30px] bg-[#1f1f1f] p-[3%] shadow-[0_10px_22px_rgba(0,0,0,0.35)]">
        <div className="h-full w-full bg-[#1d222b]" />
      </div>

      <div className="absolute bottom-[18%] right-[2%] h-[6%] w-[78%] bg-[#151515]" />

      <div className="absolute bottom-[15.5%] right-0 h-[3.8%] w-[82%] bg-gradient-to-b from-[#d0d0d0] via-[#777] to-[#3d3d3d]">
        <span className="absolute left-1/2 top-[10%] -translate-x-1/2 text-[7px] text-white/80">
          MacBook
        </span>

        <div className="absolute bottom-0 left-[22%] h-[28%] w-[18%] bg-[#bdbdbd]" />
        <div className="absolute bottom-0 left-[46%] h-[28%] w-[18%] bg-[#bdbdbd]" />
      </div>

      <div className="absolute bottom-[14.5%] right-[-6%] h-[2.5%] w-[92%] rounded-br-full bg-gradient-to-r from-[#bcbcbc] via-[#8b8b8b] to-[#242424] shadow-[0_8px_12px_rgba(0,0,0,0.45)]" />
    </>
  );
}

function PhoneMockup() {
  return (
    <>
      <div className="absolute bottom-[5%] left-[3%] aspect-[9/18.6] h-[78%] rounded-[32px] border-[2px] border-[#1a1a1a] bg-[#090909] p-[5px] shadow-[0_14px_26px_rgba(0,0,0,0.45)]">
        <div className="relative h-full w-full rounded-[27px] border border-[#5c5c5c] bg-black p-[4px]">
          <div className="relative h-full w-full rounded-[23px] bg-black">
            <div className="absolute left-1/2 top-[10px] h-[4px] w-[43px] -translate-x-1/2 rounded-full bg-[#101010]" />
            <div className="absolute left-[62%] top-[9px] h-[5px] w-[5px] rounded-full bg-[#0e1d35]" />

            <PhoneButton side="left" top="52px" height="30px" />
            <PhoneButton side="left" top="96px" height="44px" />
            <PhoneButton side="left" top="150px" height="44px" />
            <PhoneButton side="right" top="112px" height="58px" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[5.8%] left-[3.6%] aspect-[9/18.6] h-[76%] rounded-[30px] border border-white/25" />
    </>
  );
}

function PhoneButton({ side, top, height }) {
  const positionClass =
    side === "left"
      ? "left-[-12px] rounded-l"
      : "right-[-12px] rounded-r";

  return (
    <div
      className={`absolute ${positionClass} w-[3px] bg-[#555]`}
      style={{ top, height }}
    />
  );
}