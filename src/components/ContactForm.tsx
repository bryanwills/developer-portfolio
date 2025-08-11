"use client"

import { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Option 1: EmailJS (fully configured)
      if (process.env.NODE_ENV === 'production') {

        const result = await emailjs.sendForm(
          'service_anhdofd', // Your actual service ID
          'template_fv3ilhz', // Your actual template ID
          formRef.current!,
          '5le_iJUCD61kkg8fg' // Your actual public key
        )

        if (result.status === 200) {
          setIsSubmitted(true)
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          throw new Error('Failed to send message')
        }
      } else {
        // Option 2: Fallback - open email client with pre-filled content
        const mailtoLink = `mailto:bryanwi09@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.open(mailtoLink)

        // Show success message
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (err) {
      console.error('Email error:', err)
      setError('Failed to send message. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name === 'user_name' ? 'name' :
                     e.target.name === 'user_email' ? 'email' :
                     e.target.name
    setFormData(prev => ({
      ...prev,
      [fieldName]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6 text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h3 className="text-xl font-semibold">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Send Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              name="user_name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <Input
              name="user_email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="text-base resize-none"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-base"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
