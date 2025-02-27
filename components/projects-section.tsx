"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Project data with real projects
const projects = [
  {
    id: 1,
    title: "Food Order Website",
    description: "A responsive food ordering platform with menu display and ordering functionality.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://foodorderwebsit.netlify.app/",
    githubUrl: "#",
    category: "web",
    longDescription: "This food ordering website allows customers to browse menus, select items, and place orders online. It features a responsive design that works well on both desktop and mobile devices, with an intuitive user interface for a seamless ordering experience."
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A full-featured online store with product catalog, cart functionality, and checkout process.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "CSS", "JavaScript", "E-commerce"],
    liveUrl: "https://friendly-bonbon-045ffa.netlify.app/",
    githubUrl: "#",
    category: "web",
    longDescription: "This e-commerce platform provides a complete online shopping experience with product browsing, filtering, cart management, and a streamlined checkout process. The responsive design ensures a consistent experience across all devices, making online shopping accessible to all users."
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "An elegant website for a restaurant showcasing their menu, ambiance, and reservation options.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://thetreehoustheo.netlify.app/",
    githubUrl: "#",
    category: "web",
    longDescription: "This restaurant website was designed to highlight the establishment's unique atmosphere and culinary offerings. It includes an interactive menu, photo gallery, about section, and contact information. The site is fully responsive and optimized for all devices, providing an excellent user experience regardless of screen size."
  },
  {
    id: 4,
    title: "Nail Tech Website",
    description: "A professional website for a nail technician showcasing services, gallery, and booking options.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://cknailtech.netlify.app/",
    githubUrl: "#",
    category: "web",
    longDescription: "This nail technician website was created to showcase the artist's work and services. It features a beautiful gallery of nail designs, detailed service descriptions with pricing, and an easy-to-use booking system. The site is designed to reflect the professional and artistic nature of the business while providing clients with all the information they need."
  }
]

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my recent projects. Each one represents a unique challenge and solution.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mt-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Websites</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} setActiveProject={setActiveProject} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {projects.filter(p => p.category === "web").map((project) => (
                <ProjectCard key={project.id} project={project} setActiveProject={setActiveProject} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {activeProject && (
          <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{activeProject.title}</DialogTitle>
                <DialogDescription>{activeProject.description}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image 
                  src={activeProject.image} 
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p>{activeProject.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, setActiveProject }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full bg-secondary px-2 py-1 text-xs">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={() => setActiveProject(project)}>
          View Details
        </Button>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Live Demo</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">Source Code</span>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}