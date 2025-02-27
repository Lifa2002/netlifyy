import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transforming Ideas into Digital Reality
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm Lifa Hlatshwayo, a passionate web developer dedicated to creating beautiful, 
                functional websites that help businesses thrive in the digital world.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-muted border shadow-xl w-full max-w-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold">LH</div>
                  <div className="mt-2 text-sm text-muted-foreground">Web Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}