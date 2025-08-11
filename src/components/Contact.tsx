"use client"

import { portfolio } from '@/data/portfolio'
import { Button } from './ui/button'
import { Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const { contact } = portfolio

  if (!contact.email) return null

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Let's work together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contact.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{contact.location}</span>
                </div>
              )}

              {contact.availability && (
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{contact.availability}</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full max-w-xs">
                <a href={`mailto:${contact.email}`}>
                  <Mail className="h-5 w-5 mr-2" />
                  Send me an email
                </a>
              </Button>

              <p className="text-muted-foreground">
                {contact.email}
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>I typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
