import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Linkedin, Mail, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import NetworkAnimation from "@/components/animations/network-animation"

export default function TeamPage() {
  return (
    <>
      {/* Hero Section - Network style */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <NetworkAnimation />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Team</h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We're a team of entrepreneurs, operators, and investors with a passion for building great companies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Culture</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Sqwuid, we believe that our team is our greatest asset. We foster a culture of innovation,
              collaboration, and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Entrepreneurial Spirit</h3>
              <p className="text-muted-foreground">
                We think like founders and approach every challenge with creativity, resourcefulness, and a bias toward
                action.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Collaborative Approach</h3>
              <p className="text-muted-foreground">
                We believe that diverse perspectives lead to better outcomes, and we work together to achieve our shared
                goals.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 20V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 20V4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 20V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Continuous Growth</h3>
              <p className="text-muted-foreground">
                We're committed to learning, improving, and pushing boundaries to achieve excellence in everything we
                do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Card layout */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leadership Team</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Meet the experienced leaders driving our vision forward.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-background">
                  <Image
                    src={`/team/headshot/forrest.jpeg`}
                    alt={"Forrest"}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent rounded-lg"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-medium text-white text-shadow">{"Forrest"}</h3>
                    <p className="text-primary font-semibold ">{"CEO & Founder"}</p>
                    <p className="mt-2 text-sm  text-white">{"Hi, I'm Forrest! I enjoy building companies and helping others do the same. Outside of work I enjoy playing volleball and cooking."}</p>

                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <Link href="https://linkedin.com/in/forrestcai" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 text-white " />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-background">
                  <Image
                    src={`/team/headshot/kevin.jpeg`}
                    alt={"Kevin"}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent rounded-lg"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-medium text-white text-shadow">{"Kevin"}</h3>
                    <p className="text-primary font-semibold ">{"CTO & Co-Founder"}</p>
                    <p className="mt-2 text-sm  text-white">{"Enter Bio here."}</p>

                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <Link href="https://linkedin.com/in/kevingui" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 text-white " />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-background">
                  <Image
                    src={`/team/headshot/aakash.jpeg`}
                    alt={"Aakash"}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent rounded-lg"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-medium text-white text-shadow ">{"Aakash"}</h3>
                    <p className="text-primary font-semibold ">{"COO & Co-Founder"}</p>
                    <p className="mt-2 text-sm text-white ">{"Hi "}</p>

                    <div className="mt-4 flex gap-2 ">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <Link href="https://linkedin.com/in/aakashsriram" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 text-white " />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members - Grid layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              The talented individuals who make our vision a reality.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
              <div  className="group relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={`/team/headshot/niko.jpg`}
                    alt={`Team Member`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">Niko Chiotellis</h3>
                  <p className="text-sm text-primary">
                    Data Science Intern
                  </p>
                </div>
                
              </div>
              <div  className="group relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={`/team/headshot/niko.jpg`}
                    alt={`Team Member`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">Niko Chiotellis</h3>
                  <p className="text-sm text-primary">
                    Data Science Intern
                  </p>
                </div>
                
              </div>
        
          </div>
        </div>
      </section>

      {/* Join Our Team - Split layout */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Team</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We're always looking for talented individuals who are passionate about building exceptional companies.
                If you're interested in joining our team, check out our open positions or send us your resume.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/careers">
                    View open positions <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Join Our Team"
                alt="Join Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

