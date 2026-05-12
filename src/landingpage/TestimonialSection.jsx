import React from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import PersonImage from "../assets/testimonial-person.png";

const testimonial = {
  label: "Client Testimonial",
  text: "I was amazed by the level of assistance I received from the AI Chatbot provided by ROTAR AI. It quickly understood my questions and provided accurate and helpful responses.",
  currentSlide: 1,
  totalSlides: 4,
};

export default function TestimonialSection() {
  return (
    <section className="min-h-screen bg-[#f2f2f2] px-4 py-10 font-sans text-[#111]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 overflow-hidden rounded-[34px] lg:grid-cols-[1fr_auto]">
        <TestimonialHeader />
        <TestimonialIntro />
        <TestimonialContent />
      </div>
    </section>
  );
}

function TestimonialHeader() {
  return (
    <div className="bg-white px-10 py-12">
      <h2 className="text-[40px] font-medium leading-[1.35] tracking-[-1.4px] md:text-[48px]">
        What top-tier companies
        <br />
        tell about our product
      </h2>
    </div>
  );
}

function TestimonialIntro() {
  return (
    <div className="flex w-fit items-start bg-[#f2f2f2] px-8 py-14">
      <p className="w-[300px] text-[13px] leading-[1.55] text-[#333]">
        Join the growing number of businesses and companies that have
        experienced the transformative impact of our chatbot services.
      </p>
    </div>
  );
}

function TestimonialContent() {
  return (
    <div className="col-span-1 bg-white p-10 lg:col-span-2">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[470px_1fr]">
        <PersonImageCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

function PersonImageCard() {
  return (
    <div className="relative h-[460px] w-full max-w-[470px] overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 470 460"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="testimonialBlob" clipPathUnits="userSpaceOnUse">
            <path d="M70 0H400C438 0 470 32 470 70V320C470 350 446 374 416 374H400C370 374 346 398 346 428V460H60C27 460 0 433 0 400V88H18C47 88 70 65 70 36V0Z" />
          </clipPath>
        </defs>

        <image
          href={PersonImage}
          width="470"
          height="460"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#testimonialBlob)"
        />
      </svg>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="relative flex min-h-[460px] flex-col justify-between bg-white p-8">
      <TestimonialBubble />
      <TestimonialActions />
    </div>
  );
}

function TestimonialBubble() {
  return (
    <div className="relative mt-2 min-h-[284px] w-full">
      <BubbleShape />

      <div className="relative z-10 px-8 py-7">
        <TestimonialBadge />

        <p className="max-w-[610px] text-[24px] leading-[1.38] tracking-[-0.4px] text-black">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
}

function BubbleShape() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 680 284"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 0H250C266 0 276 10 276 26C276 42 290 56 306 56H646C665 56 680 71 680 90V194C680 213 665 228 646 228H590C574 228 560 242 560 258C560 272 548 284 534 284H28C12 284 0 272 0 256V28C0 12 12 0 28 0Z"
        fill="#00ec78"
      />
    </svg>
  );
}

function TestimonialBadge() {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black px-3 py-1 text-[12px] font-medium">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-white">
        <Quote size={10} fill="white" />
      </span>

      {testimonial.label}
    </div>
  );
}

function TestimonialActions() {
  return (
    <div>
      <div className="mb-6 h-px w-full bg-[#dedede]" />

      <div className="flex items-center justify-between">
        <button className="h-[38px] rounded-full border border-[#999] px-5 text-[13px] font-medium">
          {testimonial.currentSlide} / {testimonial.totalSlides}
        </button>

        <button className="flex h-[42px] items-center gap-3 rounded-full bg-black px-6 text-[12px] font-semibold text-white transition hover:scale-[1.03]">
          See more testimonials
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}