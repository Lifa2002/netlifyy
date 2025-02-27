import { Code2, Laptop, Lightbulb, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a skilled web developer with a passion for creating elegant, efficient, and user-friendly websites.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I've worked with a diverse range of clients from startups to established businesses. 
              My journey began with a fascination for how websites work, which led me to pursue a career in web development.
            </p>
            <p className="text-muted-foreground">
              I specialize in creating responsive, accessible, and performant websites that not only look great but also deliver exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <Code2 className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Clean Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Writing maintainable, efficient code that stands the test of time.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Creating websites that look great on any device, from mobile to desktop.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Creative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Finding innovative approaches to solve complex problems.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Rocket className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Optimizing websites for speed and efficiency.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}