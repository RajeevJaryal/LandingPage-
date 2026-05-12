import React from "react";
import { Bot, MessageCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const companies = Array(6).fill("Company");

const socialIcons = [
  {
    className: "bg-[#27d366]",
    icon: <MessageCircle size={18} />,
  },
  {
    className: "col-start-2 row-span-2 h-16 w-16 bg-[#00ec78]",
    icon: <Bot size={30} />,
  },
  {
    className: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    icon: <FaInstagram size={18} />,
  },
  {
    className: "bg-[#168aff]",
    icon: <FaFacebook size={18} />,
  },
  {
    className: "bg-[#1da1f2]",
    icon: <FaTwitter size={18} />,
  },
];

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] px-4 py-6 font-sans text-[#111]">
      <CompanyLogos />

      <section className="mx-auto grid max-w-[1220px] grid-cols-1 gap-5 rounded-[28px] bg-white p-7 md:grid-cols-[1.75fr_1fr_1fr] md:p-9">
        <MainContent />
        <MiddleCards />
        <RightCards />
      </section>
    </div>
  );
}

function CompanyLogos() {
  return (
    <div className="mx-auto mb-12 flex max-w-[760px] flex-wrap items-center justify-center gap-x-14 gap-y-4 text-lg font-semibold text-[#878787]">
      {companies.map((company, index) => (
        <span key={index}>{company}</span>
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <div>
        <HeroTitle />

        <p className="mt-5 max-w-[440px] text-sm leading-6 text-[#414141]">
          Embrace AI chatbot technology in a GPT-4-supported communication tool
          to help your customers, empower your team, and reduce your workload.
        </p>
      </div>

      <IntegrationCard />
    </div>
  );
}

function HeroTitle() {
  return (
    <h1 className="max-w-[680px] text-[56px] font-medium leading-[1.12] tracking-[-2px] md:text-[64px]">
      Deliver a high-
      <br />

      <span className="inline-flex items-center">
        quality
        <HighlightBox className="ml-5 rounded-bl-none">customer</HighlightBox>
      </span>

      <br />

      <span className="inline-flex items-center">
        <HighlightBox className="rounded-tr-none">experience</HighlightBox>
        <StackedArrowButton />
      </span>
    </h1>
  );
}

function HighlightBox({ children, className = "" }) {
  return (
    <span
      className={`rounded-[18px] bg-[#ffebbd] px-5 pb-3 pt-2 ${className}`}
    >
      {children}
    </span>
  );
}

function StackedArrowButton() {
  return (
    <span className="relative ml-5 inline-flex h-[54px] w-[145px] items-center">
      {[0, 9, 18, 27].map((left) => (
        <span
          key={left}
          className="absolute top-[3px] h-[48px] w-[112px] rounded-full border border-black bg-white"
          style={{ left }}
        />
      ))}

      <span className="relative z-10 flex h-[48px] w-[112px] items-center justify-center rounded-full border border-black bg-white">
        <ArrowIcon />
      </span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-translate-x-2"
    >
      <path
        d="M14 16L32 34"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      <path
        d="M32 34H14"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      <path
        d="M32 34V16"
        stroke="black"
        strokeWidth="4.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function IntegrationCard() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-[#f6f6f6] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:90px_80px]" />

      <div className="relative z-10 flex min-h-[185px] items-center justify-center">
        <NotionIcon />
        <GoogleIcon />
        <EmojiIcon className="right-28 top-10">🐘</EmojiIcon>
        <TextIcon />
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold">
          Automate your workflow with our integrations
        </h3>

        <p className="mt-1 max-w-[520px] text-sm leading-5 text-[#666]">
          Connect Rotar AI with your customer service, sales, marketing, and
          recruitment tools using our user-friendly API, webhooks, or Zapier
          integration.
        </p>
      </div>
    </div>
  );
}

function NotionIcon() {
  return (
    <div className="absolute left-8 top-7 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-lg">
      <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-black font-bold">
        N
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full bg-white shadow-xl">
      <div className="grid h-12 w-12 grid-cols-2 overflow-hidden rounded-md">
        <div className="bg-[#4285f4]" />
        <div className="bg-[#34a853]" />
        <div className="bg-[#fbbc05]" />
        <div className="bg-[#ea4335]" />
      </div>
    </div>
  );
}

function EmojiIcon({ children, className = "" }) {
  return (
    <div
      className={`absolute flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-lg ${className}`}
    >
      <span className="text-2xl">{children}</span>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="absolute right-10 top-24 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white shadow-lg">
      <span className="text-2xl font-bold text-[#5b5fc7]">T</span>
    </div>
  );
}

function MiddleCards() {
  return (
    <div className="flex flex-col gap-4">
      <ChatBoostCard />
      <CommunicationCard />
    </div>
  );
}

function ChatBoostCard() {
  return (
    <div className="rounded-[26px] bg-[#f5f5f5] p-5">
      <div className="ml-auto flex w-[155px] items-center gap-2 rounded-full bg-[#ededed] px-3 py-2 text-[11px]">
        <span className="h-6 w-6 rounded-full bg-[#d5d5d5]" />
        James Kokolomel
      </div>

      <div className="ml-auto mt-2 max-w-[155px] rounded-sm bg-[#00ec78] px-4 py-3 text-[10px]">
        I've forgotten my password
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs font-semibold">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#00ec78]">
          <Bot size={15} />
        </span>
        Rotar Robot
      </div>

      <div className="mt-3 rounded-md bg-white p-4 text-[10px] leading-4 text-[#777]">
        No worries, we've all been in a situation like that. To reset your
        password, go to the login page and click on Forgot Password. Then, enter
        your email address and follow the instructions.
      </div>

      <h3 className="mt-6 text-xl font-bold leading-6">
        Boost conversations
        <br />
        96% with AI
      </h3>

      <p className="mt-2 text-sm leading-5 text-[#777]">
        Our AI-powered chatbots and automation tools are here to help.
      </p>
    </div>
  );
}

function CommunicationCard() {
  return (
    <div className="rounded-[26px] bg-[#111] p-5 text-white">
      <h3 className="text-xl font-bold leading-6">
        Centralize Your
        <br />
        Communication
      </h3>

      <p className="mt-2 text-sm leading-5 text-[#d7d7d7]">
        Easily respond to chats from all of your channels in one overview.
      </p>

      <div className="mt-7 grid grid-cols-3 gap-4">
        {socialIcons.map((item, index) => (
          <SocialIcon key={index} className={item.className}>
            {item.icon}
          </SocialIcon>
        ))}
      </div>
    </div>
  );
}

function RightCards() {
  return (
    <div className="flex flex-col gap-4">
      <LiveChatCard />
      <StatsCard />
    </div>
  );
}

function LiveChatCard() {
  return (
    <div className="rounded-[26px] bg-[#b5f7d1] p-5">
      <h3 className="text-xl font-bold leading-6 text-[#082e20]">
        Always accessible
        <br />
        with our live chat.
      </h3>

      <p className="mt-2 text-sm leading-5 text-[#224034]">
        Enhance communication with real-time live chat.
      </p>

      <div className="mt-5 space-y-3">
        <InfoBox dotColor="bg-[#d8d8d8]" />
        <InfoBox dotColor="bg-[#dbc99d]" glow />
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="rounded-[26px] bg-[#00ec78] p-5">
      <div className="mx-auto mb-6 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white">
        <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[12px] border-[#d7f8e5] border-t-black">
          <div className="text-center">
            <h2 className="text-3xl font-black leading-none">12.5%</h2>

            <p className="mt-1 text-[8px] font-black uppercase tracking-[1.5px]">
              Conversation
              <br />
              Employee
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold leading-6">
        Gain valuable insights
        <br />
        from your audience
      </h3>

      <p className="mt-2 text-sm leading-5">
        Statistics provide valuable insights into how customers interact with
        Rotar AI.
      </p>
    </div>
  );
}

function InfoBox({ dotColor, glow = false }) {
  return (
    <div className="rounded-md bg-white p-3">
      <div className="flex items-center gap-2">
        <span className={`h-6 w-6 rounded-full ${dotColor}`} />
        <span className="h-4 flex-1 rounded-full bg-[#eeeeee]" />
      </div>

      <div
        className={`mt-3 h-4 rounded-full bg-[#eeeeee] ${
          glow ? "shadow-[0_12px_25px_rgba(0,236,120,.35)]" : ""
        }`}
      />
    </div>
  );
}

function SocialIcon({ children, className = "" }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${className}`}
    >
      {children}
    </div>
  );
}