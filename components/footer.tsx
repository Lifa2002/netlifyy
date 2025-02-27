import Link from "next/link"
import { Code, Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-10 md:py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span className="font-bold">Lifa Hlatshwayo</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional web developer specializing in creating beautiful, functional websites and web applications.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>HLATSHWAYOLIFA02@ICLOUD.COM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>0729738738</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/lifa-hlatshwayo-aab8b5297" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lifa Hlatshwayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}