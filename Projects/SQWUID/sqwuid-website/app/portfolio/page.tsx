"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import PortfolioAnimation from "@/components/animations/portfolio-animation"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section - Gallery style */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent"></div>
       
        <div className="container relative z-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={fadeIn}>
              Our Portfolio
            </motion.h1>
            <motion.p className="mt-6 text-lg text-muted-foreground md:text-xl" variants={fadeIn}>
              We've helped build and scale innovative companies across various industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16">
        <div className="container">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Companies
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 gap-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="group relative grid md:grid-cols-2 gap-8 items-center"
              variants={itemFadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
                <Image
                  src={`/Prate.png`}
                  alt={`PRate`}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>

              <div>
                <motion.div className="flex gap-2 mb-4" variants={itemFadeIn}>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {"AI"}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {"Health"}
                  </span>
                </motion.div>

                <motion.h3 className="text-3xl font-bold" variants={itemFadeIn}>
                  PRate
                </motion.h3>
                <motion.p className="mt-4 text-lg text-muted-foreground" variants={itemFadeIn}>
                  An AI powered physiquer rater.
                </motion.p>

                <motion.div className="mt-6 flex flex-wrap gap-8" variants={itemFadeIn}>
                  <div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                    <div className="font-medium">2025</div>
                  </div>
                  {/* <div>
                    <div className="text-sm text-muted-foreground">Funding</div>
                    <div className="font-medium">$10M</div>
                  </div> */}
                  <div>
                    <div className="text-sm text-muted-foreground">Status</div>
                    <div className="font-medium">{"In Progress"}</div>
                  </div>
                </motion.div>
{/* 
                <motion.div variants={itemFadeIn} onHover={{ opacity: 1 }}>
                  <Button className="mt-8 gap-2" asChild>
                    <Link href={`LINK TO WEBSITE`}>
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div> */}

                <motion.div variants={itemFadeIn}>
                  <Button className="mt-8 gap-2" asChild>
                    <Link href={`LINK TO WEBSITE`}>
                      Coming Soon...
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-muted">
        <div className="container">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            All Companies
          </motion.h2>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemFadeIn}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
              }}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={`/Fina.png`}
                  alt={`Company`}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {["Fintech"]}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {["Education"]}
                  </span>
                </div>
                <h3 className="text-xl font-medium">Fina</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A financial education platform to learn crypto and stocks.
                </p>
                <Button variant="link" className="mt-4 px-0 text-primary" size="sm" asChild>
                  <Link href={`LINK TO WEBSITE`}>
                    Learn more <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* <div className="mt-12 text-center">
            <Button variant="outline">Load more</Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Portfolio</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Are you building something exceptional? We'd love to hear from you.
            </p>
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/contact">
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

