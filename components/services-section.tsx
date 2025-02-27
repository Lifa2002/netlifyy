import { Code, Layout, Smartphone, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "Website Design",
    description: "Custom website designs that are visually appealing, user-friendly, and aligned with your brand identity.",
    features: [
      "Responsive layouts",
      "User experience (UX) design",
      "Brand integration",
      "Accessibility compliance"
    ]
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Front-end Development",
    description: "Creating the visual and interactive elements of your website with clean, efficient code.",
    features: [
      "HTML/CSS coding",
      "JavaScript functionality",
      "React development",
      "Performance optimization"
    ]
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile-First Development",
    description: "Websites optimized for mobile devices to ensure a seamless experience across all screen sizes.",
    features: [
      "Progressive Web Apps (PWAs)",
      "Touch-friendly interfaces",
      "Performance optimization",
      "Cross-device testing"
    ]
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Performance Optimization",
    description: "Speed up your website to improve user experience and search engine rankings.",
    features: [
      "Page speed optimization",
      "Code minification",
      "Image optimization",
      "Caching strategies"
    ]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I offer a range of web development services to help you establish a strong online presence.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}