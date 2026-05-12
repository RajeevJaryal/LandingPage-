import React from "react";
import { ArrowUpRight } from "lucide-react";

const filterOptions = [
  "E-Commerce",
  "Education",
  "Health Care",
  "Financial",
  "HR",
  "Tourism",
];

const templateCards = [
  {
    title: "Chatbot for Marketing",
    description: "Provide recommendations and process transactions in a chat.",
    botMessage:
      "Great! Happy to help find the right plan for you 🎯.\n\nWhat are you looking to do with Rotar AI?",
    userMessage: "Get more customers on my website page",
  },
  {
    title: "Chatbot for HR",
    description: "Find talent and interact with candidates in an innovative way.",
    botMessage:
      "You have qualified for the next round of interview, Alvarez! Please let me know your availability ☀️",
    userMessage: "Any time between 2 to 5 PM tomorrow",
  },
  {
    title: "Chatbot for Sales",
    description: "Optimize customer conversations and generate quality leads.",
    botMessage: "Can I help you choose the best plan for your business?",
    userMessage: "Show me the best option",
  },
];

export default function TemplateSection() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#f3f3f3] px-8 py-16 font-sans text-[#111]">
      <div className="mx-auto flex max-w-[1280px] gap-16">
        <TemplateIntro />
        <TemplateCardList />
      </div>
    </section>
  );
}

function TemplateIntro() {
  return (
    <div className="w-[520px] shrink-0 pt-16">
      <h2 className="text-[58px] font-medium leading-[1.35] tracking-[-2px]">
        Use <HighlightText>templates</HighlightText>
        <br />
        to get started
        <br />
        your project
      </h2>

      <FilterButtons />
    </div>
  );
}

function HighlightText({ children }) {
  return (
    <span className="rounded-[16px] bg-[#b9f8d4] px-3">
      {children}
    </span>
  );
}

function FilterButtons() {
  return (
    <div className="mt-8 flex max-w-[520px] flex-wrap gap-3">
      {filterOptions.map((option) => (
        <button
          key={option}
          className="rounded-full border border-[#222] px-5 py-3 text-[15px] font-medium transition hover:bg-black hover:text-white"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function TemplateCardList() {
  return (
    <div className="flex gap-4">
      {templateCards.map((card) => (
        <TemplateCard key={card.title} card={card} />
      ))}
    </div>
  );
}

function TemplateCard({ card }) {
  return (
    <div className="w-[320px] shrink-0 rounded-[30px] bg-white p-6">
      <ChatPreview
        botMessage={card.botMessage}
        userMessage={card.userMessage}
      />

      <h3 className="mt-7 text-[24px] font-bold tracking-[-0.5px]">
        {card.title}
      </h3>

      <p className="mt-3 min-h-[52px] text-[17px] leading-[1.45] text-[#777]">
        {card.description}
      </p>

      <button className="mt-4 flex h-[48px] w-full items-center justify-center gap-3 rounded-full bg-black text-[14px] font-semibold text-white transition hover:scale-[1.02]">
        Try template for free
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
}

function ChatPreview({ botMessage, userMessage }) {
  return (
    <div className="relative h-[260px] overflow-hidden rounded-[24px] bg-white">
      <ChatBubbleShape />

      <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-6">
        <BotMessage>{botMessage}</BotMessage>
        <UserMessage>{userMessage}</UserMessage>
      </div>
    </div>
  );
}

function ChatBubbleShape() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 280 260"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42 0H250C267 0 280 13 280 30V218C280 235 267 248 250 248H205C190 248 180 258 180 260H28C12 260 0 248 0 232V48C0 32 12 20 28 20H30C37 20 42 14 42 7V0Z"
        fill="#d6d6d6"
      />
    </svg>
  );
}

function BotMessage({ children }) {
  return (
    <div className="whitespace-pre-line rounded-[4px] bg-white px-5 py-4 text-[11px] leading-[1.35] shadow-[0_2px_5px_rgba(0,0,0,0.12)]">
      {children}
    </div>
  );
}

function UserMessage({ children }) {
  return (
    <div className="rounded-[4px] bg-[#00ec78] px-5 py-4 text-center text-[11px] leading-[1.35] text-black">
      {children}
    </div>
  );
}