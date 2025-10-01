"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowUpRight, Menu, Check, Minus, Plus } from 'lucide-react'
import { useEffect, useState } from "react"
import { Fragment } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMobileTab, setActiveMobileTab] = useState<'free' | 'pro' | 'enterprise'>('free')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const plans = {
    free: {
      name: "Basic",
      price: "$0",
      period: "/mo",
      description: "Easy drafting with AI",
      features: [
        "Intuitive AI drafting interface",
        "Draft emails, internal memos/messages, documents, and more",
        "15 drafts per month",
        "Personalized tone and style",
      ]
    },
    pro: {
      name: "Pro",
      price: "$7",
      period: "/mo",
      description: "Unlimited messages, documents, and drafts",
      features: [
        "Everything in Basic",
        "Unlimited document creation",
        "Priority support"
      ]
    },
    enterprise: {
      name: "Organization",
      price: "Custom",
      period: "",
      description: "Custom plans for comms-driven teams.",
      features: [
        "Everything in Pro",
        "Tailored onboarding",
        "Custom document types",
        "Custom integrations",
        "Discounted seat-based pricing"
      ]
    }
  }

  const comparisonFeatures = [
    {
      category: "Features",
      items: [
        { name: "AI-powered drafting interface", free: true, pro: true, enterprise: true },
        { name: "Support for emails, internal memos/messages, and documents", free: true, pro: true, enterprise: true },
        { name: "Personalized tone and style", free: true, pro: true, enterprise: true },
        { name: "Drafts per month", free: "15", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Custom integrations", free: false, pro: false, enterprise: true },
        { name: "Custom document types", free: false, pro: false, enterprise: true },
      ]
    },
    {
      category: "Services",
      items: [
        { name: "Priority support", free: false, pro: true, enterprise: true },
        { name: "Tailored onboarding", free: false, pro: false, enterprise: true }
        // { name: "Conversations dashboard", free: false, pro: true, enterprise: true },
        // { name: "Advanced analytics", free: false, pro: false, enterprise: true },
        // { name: "Centralized billing", free: false, pro: false, enterprise: true },
        // { name: "Custom integrations (coming soon)", free: false, pro: false, enterprise: true },
        // { name: "User provisioning & role-based access", free: false, pro: false, enterprise: true }
      ]
    },
    // {
    //   category: "Support",
    //   items: [
    //     { name: "Community support", free: true, pro: true, enterprise: true },
    //     { name: "Priority support", free: false, pro: true, enterprise: true },
    //     { name: "Customized onboarding", free: false, pro: false, enterprise: true }
    //   ]
    // }
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl py-32 sm:py-36">
        <div className="mx-auto max-w-lg px-6 lg:max-w-7xl lg:px-8 select-none">
          <h1 className="flex flex-col text-5xl font-medium tracking-tight text-balance text-foreground sm:text-6xl lg:text-pretty">
            Write faster. <span>Draft smarter.</span>
          </h1>
          <p className="flex flex-col mt-6 max-w-lg text-lg font-base text-pretty text-muted-foreground max-lg:mx-auto sm:text-xl/8">
          With Relay, both teams and individuals can streamline communication with AI.
            {/* <span>Please start with our Free plan.</span> */}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-6 lg:px-8">
          {/* Free Plan */}
          <div className="ring-border rounded-lg p-6 ring-1 bg-card">
            <h3 className="text-primary text-[40px]/8 font-[400] select-none">{plans.free.name}</h3>
            <p className="mt-4 flex items-baseline gap-x-1">
              <span className="text-muted-foreground text-4xl font-[400] tracking-tight select-none">{plans.free.price}</span>
              <span className="text-muted-foreground text-3xl/6 font-[400] select-none">{plans.free.period}</span>
            </p>
            <p className="text-muted-foreground mt-16 text-sm/4.5 select-none">{plans.free.description}</p>
            <div className="mt-10.5 relative flex flex-col items-center w-full">
            <Button className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 mt-6 w-full rounded-lg px-3 py-2 text-center text-sm/6 font-semibold select-none">
              Get Started
            </Button>
            </div>
            <ul className="text-muted-foreground mt-8 space-y-3 py-4 text-sm/6 xl:mt-10">
              {plans.free.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <Check className="text-emerald-600 h-6 w-4 flex-none" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="ring-border rounded-lg p-6 ring-1 bg-card">
            <h3 className="text-primary text-[40px]/8 font-[400] select-none">{plans.pro.name}</h3>
            <p className="mt-4 flex items-baseline gap-x-1">
              <span className="text-muted-foreground text-4xl font-[400] tracking-tight select-none">{plans.pro.price}</span>
              <span className="text-muted-foreground text-3xl/6 font-[400] select-none">{plans.pro.period}</span>
            </p>
            <p className="text-muted-foreground mt-16 text-sm/4.5 select-none">{plans.pro.description}</p>
            <Button className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 mt-6 w-full rounded-lg px-3 py-2 text-center text-sm/6 font-semibold select-none">
              Get Started
            </Button>
            <ul className="text-muted-foreground mt-8 space-y-3 py-4 text-sm/6 xl:mt-10">
              {plans.pro.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  {feature.startsWith("Everything in") ? (
                    <Plus className="text-primary h-6 w-4 flex-none" />
                  ) : (
                    <Check className="text-emerald-600 h-6 w-4 flex-none" />
                  )}
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="ring-border rounded-lg p-6 ring-1 bg-card">
            <h3 className="text-primary text-[40px]/8 font-[400] select-none">{plans.enterprise.name}</h3>
            <p className="mt-4 flex items-baseline gap-x-1">
              <span className="text-muted-foreground text-4xl font-[400] tracking-tight select-none">{plans.enterprise.price}</span>
            </p>
            <p className="text-muted-foreground mt-16 text-sm/4.5 select-none">{plans.enterprise.description}</p>
            <Button className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 mt-6 w-full rounded-lg px-3 py-2 text-center text-sm/6 font-semibold select-none">
              Talk to Sales
            </Button>
            <ul className="text-muted-foreground mt-8 space-y-3 py-4 text-sm/6 xl:mt-10">
              {plans.enterprise.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  {feature.startsWith("Everything in") ? (
                    <Plus className="text-primary h-6 w-4 flex-none" />
                  ) : (
                    <Check className="text-emerald-600 h-6 w-4 flex-none" />
                  )}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
          <table className="w-full text-left max-sm:hidden">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              <col className="w-2/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr>
                <td className="p-0"></td>
                <th scope="col" className="p-0">
                  <div className="text-md font-semibold text-primary select-none">
                    {plans.free.name} <span className="sr-only">plan</span>
                  </div>
                </th>
                <th scope="col" className="p-0">
                  <div className="text-md font-semibold text-primary select-none">
                    {plans.pro.name} <span className="sr-only">plan</span>
                  </div>
                </th>
                <th scope="col" className="p-0">
                  <div className="text-md font-semibold text-primary select-none">
                    {plans.enterprise.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="group">
              {comparisonFeatures.map((section, sectionIndex) => (
                <Fragment key={sectionIndex}>
                  <tr>
                    <th scope="colgroup" colSpan={4} className="px-0 pt-10 pb-0 group-first-of-type:pt-5">
                      <div className="-mx-4 rounded-lg bg-muted px-4 py-3 text-sm/6 font-semibold text-primary select-none">
                        {section.category}
                      </div>
                    </th>
                  </tr>
                  {section.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="border-b border-border last:border-none">
                      <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-primary">
                        {item.name}
                      </th>
                      <td className="p-4 max-sm:text-center">
                        {typeof item.free === 'boolean' ? (
                          item.free ? (
                            <Check className="inline-block size-4 text-green-400" />
                          ) : (
                            <Minus className="inline-block size-4 text-gray-500" />
                          )
                        ) : (
                          <span className="text-sm/6 text-primary">{item.free}</span>
                        )}
                      </td>
                      <td className="p-4 max-sm:text-center">
                        {typeof item.pro === 'boolean' ? (
                          item.pro ? (
                            <Check className="inline-block size-4 text-green-400" />
                          ) : (
                            <Minus className="inline-block size-4 text-gray-500" />
                          )
                        ) : (
                          <span className="text-sm/6 text-primary">{item.pro}</span>
                        )}
                      </td>
                      <td className="p-4 max-sm:text-center">
                        {typeof item.enterprise === 'boolean' ? (
                          item.enterprise ? (
                            <Check className="inline-block size-4 text-green-400" />
                          ) : (
                            <Minus className="inline-block size-4 text-gray-500" />
                          )
                        ) : (
                          <span className="text-sm/6 text-primary">{item.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>

          {/* Mobile Tabs */}
          <div className="sm:hidden">
            <div className="flex" role="tablist" aria-orientation="horizontal">
              {(['free', 'pro', 'enterprise'] as const).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setActiveMobileTab(plan)}
                  className={`w-1/3 border-b py-4 text-base/8 font-medium ${
                    activeMobileTab === plan
                      ? 'border-primary text-primary'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  {plans[plan].name}
                </button>
              ))}
            </div>
            <div className="mt-10">
              {comparisonFeatures.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="-mx-6 mt-10 rounded-lg bg-card px-6 py-3 text-sm/6 font-semibold text-muted-foreground group-first-of-type:mt-5">
                    {section.category}
                  </div>
                  <dl>
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="grid grid-cols-2 border-b border-border py-4 last:border-none">
                        <dt className="text-sm/6 font-normal text-muted-foreground">{item.name}</dt>
                        <dd className="text-center">
                          {typeof item[activeMobileTab] === 'boolean' ? (
                            item[activeMobileTab] ? (
                              <Check className="inline-block size-4 fill-green-400" />
                            ) : (
                              <Minus className="inline-block size-4 fill-gray-500" />
                            )
                          ) : (
                            <span className="text-sm/6 text-primary-foreground">{item[activeMobileTab]}</span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
