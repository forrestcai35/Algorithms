"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import MinimalAnimation from "@/components/animations/minimal-animation"

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z" fill="currentColor"/>
  </svg>
)

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const body = `${formData.get('message')}`.trim()

    window.location.href = `mailto:hello@sqwuid.com?subject=${encodeURIComponent(
      `${formData.get('subject')} - Contact Form`
    )}&body=${encodeURIComponent(body)}`

    // Reset the form
    e.currentTarget.reset()
  }

  return (
    <>
      {/* Hero Section - Minimal style */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <MinimalAnimation />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl">
            <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary text-sm font-medium mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let's build something exceptional together
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Have a question or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - Split layout with map */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Fill out the form below to generate an email to our team. You can also reach out to us directly at{" "}
                  <a href="mailto:hello@sqwuid.com" className="text-primary hover:underline">
                    hello@sqwuid.com
                  </a>
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="venture-building">Venture Building</option>
                      <option value="growth-acceleration">Growth Acceleration</option>
                      <option value="strategic-advisory">Strategic Advisory</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="h-32 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      placeholder="Your message"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button type="submit" className="w-full">
                      <Mail className="mr-2 h-4 w-4" /> Open Email Client
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      This will open your default email application with a pre-filled message
                    </p>
                  </div>
                </form>

                <div className="border-t border-border pt-6">
                  <h3 className="text-sm font-medium mb-3">Direct Contact Options</h3>
                  <div className="flex flex-col gap-3">
    
                    <a 
                      href="https://calendly.com/sqwuid" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Schedule a call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border border-border bg-background p-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="mt-1 text-muted-foreground">We aim to respond within 24 hours during business days.</p>
                      <a href="mailto:hello@sqwuid.com" className="mt-2 inline-block text-primary hover:underline">
                        hello@sqwuid.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Remote First</h3>
                      <p className="mt-1 text-muted-foreground">
                        We're a globally distributed team, working across multiple time zones to serve our clients better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-8">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex gap-4">
                 
                  <Button variant="outline" size="lg" className="flex-1 gap-2" asChild>
                    <Link href="https://linkedin.com/company/sqwuid" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {[
                {
                  question: "What is a venture foundry?",
                  answer:
                    "A venture foundry is a company that builds and scales startups by providing capital, resources, and operational support. Unlike traditional venture capital firms, we take a hands-on approach to building companies.",
                },
                {
                  question: "How do you select companies to work with?",
                  answer:
                    "We look for innovative ideas with strong market potential, exceptional founding teams, and alignment with our expertise and interests. We evaluate opportunities based on market size, competitive landscape, and potential for disruption.",
                },
                {
                  question: "What industries do you focus on?",
                  answer:
                    "We focus on technology-enabled businesses across various sectors, including fintech, healthtech, SaaS, AI/ML, and consumer internet. We're particularly interested in companies that leverage technology to solve meaningful problems.",
                },
                {
                  question: "How long does the venture building process take?",
                  answer:
                    "The timeline varies depending on the complexity of the business and market conditions. Typically, it takes 6-12 months to go from concept to market launch, and another 12-24 months to achieve significant scale.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border border-border bg-background p-6">
                  <button className="flex w-full items-start justify-between text-left">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <svg 
                      className="h-5 w-5 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        d="M12 2L22 12L12 22L2 12L12 2Z" 
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 text-muted-foreground">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

