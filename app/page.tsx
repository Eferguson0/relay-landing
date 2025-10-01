"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Logo from "@/components/ui/Logo"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  useEffect(() => {
    const observers = sectionRefs.map((ref, idx) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(idx);
        },
        { threshold: 0.5 }
      );
    });
    sectionRefs.forEach((ref, idx) => {
      if (ref.current) observers[idx].observe(ref.current);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Clean up on unmount
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      {/* Hero Section */}
      <div className="min-h-[550px] relative py-32 sm:py-48 lg:py-60 select-none bg-background">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 aspect-[1155/678] w-96 -translate-x-1/2 bg-gradient-to-tr from-gray-600 to-gray-800 opacity-20 sm:w-[36rem] md:w-[72rem]"
          ></div>
        </div>
        <div className="relative text-center z-[1] mx-auto max-w-5xl lg:pb-32">
          <h1 className="text-4xl font-medium tracking-tight text-balance text-foreground sm:text-6xl md:text-8xl">
            AI is the future. <br /> Let it write yours.
          </h1>
          <p className="mx-auto max-w-lg md:max-w-2xl mt-8 text-md sm:text-lg md:text-2xl font-normal text-balance text-foreground">
            Aspire engineers your resume to beat screening algorithms and land you interviews.
          </p>
          <div className="grid items-center justify-center gap-y-2.5 mt-10">
            <Button className="flex group items-center gap-x-2 rounded-lg bg-primary text-primary-foreground px-10 py-3 text-md font-medium shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-primary/90">
              <span className="transition">Get Started</span>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block absolute z-[11] -bottom-[13rem] left-1/2 transform -translate-x-1/2 w-[65vw] max-w-[1600px] pointer-events-none">
          <Image
            src="/Resume-placeholder.png"
            alt="Resume Placeholder"
            width={1600}
            height={1200}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="relative mx-auto max-w-7xl pt-20 lg:pt-72 max-lg:pb-10 select-none bg-card border-2 border-border rounded-sm overflow-hidden scroll-mt-24"
      >
        <div className="mx-auto max-w-2xl sm:text-center px-5 lg:px-0">
          <h2 className="text-lg/10 font-base text-muted-foreground uppercase">Intelligent job hunting</h2>
          <p className="mt-2 text-4xl font-medium tracking-tight text-pretty text-foreground sm:text-5xl sm:text-balance max-w-xl mx-auto">
            Aspire uses data to minimize chance.
            {/* Fueled by artificial intelligence. */}
            {/* Intelligent job hunting. */}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 mt-20 mb-24 lg:mb-0 pointer-events-none gap-y-20 lg:gap-y-0">
          <div className="relative">
            <Image
              src="/Placeholder_you.svg"
              alt="Understands you"
              width={800}
              height={600}
              className="w-full h-auto border border-primary border-3 rounded-xl"
            />
            <div className="lg:absolute px-8 -mt-16 lg:mt-0 lg:pl-0 bottom-16 left-10 w-full lg:w-auto">
              <h2 className="text-2xl font-medium break-words text-foreground">Understanding you</h2>
              <p className="w-full lg:w-112 mt-3 text-base leading-5 text-foreground break-words">
                Aspire learns your background, experiences, skills, and achievements to understand the millions of ways you can be positioned for a role.
              </p>
            </div>
            <div className="hidden lg:block absolute bg-background w-1 h-8.5 bottom-28.5 -left-[1px]"></div>
          </div>
          <div className="relative">
            <Image
              src="/Placeholder_role.png"
              alt="Hears what you hear"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="lg:absolute px-8 -mt-16 lg:mt-0 lg:pl-0 bottom-16 left-10 w-full lg:w-auto">
              <h2 className="text-2xl font-medium break-words text-foreground">Understanding the opportunity</h2>
              <p className="w-full lg:w-112 mt-3 text-base leading-5 text-foreground break-words">
              For each opportunity, Aspire conducts extensive research to analyze the hiring team, company priorities, and short & long-term needs to build a model of the perfect candidate.
              </p>
            </div>
            <div className="hidden lg:block absolute bg-background w-1 h-8.5 bottom-28.5 -left-[1px]"></div>
          </div>
        </div>
        <div className="relative z-[1] overflow-hidden pointer-events-none">
          <Image
            src="/Placeholder_baby.png"
            alt="Answers anything"
            width={1600}
            height={600}
            className="w-full h-auto"
          />
          <div className="lg:absolute pl-8 mt-8 lg:mt-0 lg:pl-0 bottom-16 left-10 pr-10 w-full lg:w-auto">
            <h2 className="text-2xl font-medium break-words text-foreground">Need-Based Positioning</h2>
            <p className="w-full lg:w-112 mt-3 text-base leading-5 text-foreground break-words">
              Aspire tailors your resume to focus on the experiences, skills, and metrics most valuable to each unique opportunity.
            </p>
          </div>
          <div className="hidden lg:block absolute bg-background w-1 h-8.5 bottom-34 -left-[1px]"></div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mx-auto max-w-7xl sm:text-center py-36 bg-background text-center">
        <p className="text-center mt-2 text-4xl font-medium tracking-tight text-pretty text-foreground sm:text-5xl sm:text-balance">
          "The industrial revolution for job search."
          {/* Reality meets future. */}
          {/* Get that bag. */}
        </p>
        <Link
          href="/manifesto"
          className="inline-flex items-center gap-x-2 rounded-lg bg-primary mt-8 text-primary-foreground px-10 py-3 text-md font-semibold shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-primary/90"
        >
          <span className="transition">Get Started</span>
        </Link>
      </div>

      {/* Undetectable Section */}
      <div className="bg-secondary max-w-7xl mx-auto rounded-sm">
        <div className="mx-auto max-w-6xl sm:text-center pt-20 pb-10 lg:pt-32 px-4 lg:px-8">
          <div className="max-w-full mx-auto lg:max-w-6xl px-4">
            <h2 className="mt-2 text-4xl font-medium tracking-tight text-foreground sm:text-5xl sm:text-balance">
              Harness AI.
              {/* Skip the broken system. */}
            </h2>
            <p className="mt-4 text-lg sm:text-2xl max-w-xl sm:mx-auto font-base tracking-tight text-muted-foreground leading-6">
              The old way of searching is over.
              <span className="block sm:hidden" />
              {/* {' '}Bring a rocket launcher. */}
              {/* Trained to maximize your perception by AI screening algorithms and the hiring team. */}
            </p>
          </div>
          {/* <Image
            src="/placeholder.svg?height=200&width=600"
            alt="Works on everything"
            width={600}
            height={200}
            className="h-46 lg:h-50 mt-8 mx-auto"
          /> */}
          <div className="mt-12 select-none pointer-events-none">
            <div className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
              <div className="lg:pr-8 pl-8 lg:pl-0 col-span-2">
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-4">Screening optimized</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    Aspire has a deep understanding of resume-screening algorithms and it trained to beat them at their own game.
                  </p>
                </div>
              </div>
              <div className="lg:order-2 col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0">
                <Image
                  alt="Doesn't join meetings-screenshot"
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  className="bg-gray-100 rounded-[18px] w-full max-w-none ring-1 ring-gray-300"
                />
              </div>
            </div>
            <div className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
              <div className="lg:ml-auto pl-8 lg:order-2 col-span-2">
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-4">Needs {'>'} Skills</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    Aspire researches the role and company to understand what the perfect candidate looks like — then molds your resume to fit.
                  </p>
                </div>
              </div>
              <div className="lg:order-1 col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0">
                <Image
                  alt="Invisible to screen-share-screenshot"
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  className="bg-gray-100 rounded-[18px] w-full max-w-none ring-1 ring-gray-300"
                />
              </div>
            </div>
            <div className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
              <div className="lg:pr-8 pl-8 lg:pl-0 col-span-2">
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-4">Instant tailoring</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    Aspire tailors your resume in seconds so polished applications are quick and painless.
                  </p>
                </div>
              </div>
              <div className="lg:order-2 col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0">
                <Image
                  alt="Follow your eyes-screenshot"
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  className="bg-gray-100 rounded-[18px] w-full max-w-none ring-1 ring-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div
        id="usage"
        className="mx-auto max-w-7xl pt-32 select-none pointer-events-none bg-background"
      >
        <h1 className="text-5xl font-medium max-w-xl m-8 text-foreground">
          Where Aspire simplifies your search
        </h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-3/5 md:sticky md:top-0 md:h-screen flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Desktop images */} 
              <div className="hidden md:flex relative w-full h-full">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeSection === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <Image
                    src="/placeholderusecase1.png"
                    alt="Core Resume"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-[18px]"
                  />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeSection === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <Image
                    src="/placeholderusecase2.png"
                    alt="Tailored Resumes"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-[18px]"
                  />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeSection === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <Image
                    src="/placeholderusecase3.png"
                    alt="Opportunity Insights"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile images */}
          <div className="w-full md:w-1/2 md:ml-auto">
            <div ref={sectionRefs[0]} className="md:min-h-screen min-h-[45rem] flex items-center overflow-hidden">
              <div className="max-w-xl">
                <div className="p-8 lg:pl-20">
                  <h2 className="text-4xl font-medium mb-4 text-foreground">Resume (Tailored)</h2>
                  <p className="text-xl text-foreground max-w-94">
                  For each opportunity, Aspire uses company and role research to develop a tailored resume with the most relevant skills, experience, and keywords.
                  </p>
                </div>
                <div className="md:hidden flex justify-center items-center mt-4">
                  <Image
                    src="/placeholderusecase1.png"
                    alt="Core Resume"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-[18px]"
                  />
                </div>
              </div>
            </div>
            <div ref={sectionRefs[1]} className="md:min-h-screen min-h-[45rem] flex items-center overflow-hidden">
              <div className="max-w-xl">
                <div className="p-8 lg:pl-20">
                  <h2 className="text-4xl font-medium mb-4 text-foreground">Opportunity Insights</h2>
                  <p className="text-xl text-foreground max-w-94">
                  As we research the opportunity and tailor your resume, you'll receive insights that can be used later on for outreach and interview prep.
                  </p>
                </div>
                <div className="md:hidden flex justify-center items-center mt-4">
                  <Image
                    src="/placeholderusecase2.png"
                    alt="Tailored Resumes"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-[18px]"
                  />
                </div>
              </div>
            </div>
            <div ref={sectionRefs[2]} className="md:min-h-screen min-h-[45rem] flex items-center overflow-hidden">
              <div className="max-w-xl">
                <div className="p-8 lg:pl-20">
                  <h2 className="text-4xl font-medium mb-4 text-foreground">Resume (Core)</h2>
                  <p className="text-xl text-foreground max-w-94">
                  Aspire gains a deep understanding of your professional background to help strengthen your core resume — which serve as the foundation for tailored resumes.
                  </p>
                </div>
                <div className="md:hidden flex justify-center items-center mt-4">
                  <Image
                    src="/placeholderusecase3.png"
                    alt="Opportunity Insights"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative mx-auto max-w-7xl py-60 mt-10 lg:mt-0 select-none bg-card rounded-sm border border-border">
        <div className="relative flex flex-col items-center lg:text-center z-[1]">
          <Logo className="w-24 h-24 text-primary mb-6" />
          <span className="uppercase text-foreground tracking-tight text-lg">Welcome to</span>
          <h1 className="mt-2 text-5xl font-medium tracking-tight text-balance text-foreground sm:text-6xl">
            Intelligent job search.
          </h1>
          <div className="grid items-center gap-y-2.5 mt-10 justify-center text-center">
            <Button className="flex group items-center gap-x-2 rounded-lg bg-primary text-primary-foreground px-10 py-3 text-md font-semibold shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-primary/90">
              <span className="transition">Get Started</span>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
