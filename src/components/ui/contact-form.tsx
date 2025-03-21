"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreement: false
  })
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false
  })

  // Validate form data whenever it changes
  useEffect(() => {
    const validateForm = () => {
      const { firstName, lastName, email, phone, message, agreement } = formData
      
      // Validate individual fields
      const errors = {
        firstName: !(firstName.trim().length > 0 && firstName.trim().length <= 50),
        lastName: !(lastName.trim().length > 0 && lastName.trim().length <= 50),
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), // Basic email validation
        phone: !(phone.trim().length > 0 && phone.trim().length <= 20),
        message: !(message.trim().length >= 10 && message.trim().length <= 1000)
      }
      
      setFieldErrors(errors)
      
      // Check if all required fields are filled and valid
      const isValid = 
        !errors.firstName && 
        !errors.lastName && 
        !errors.email && 
        !errors.phone && 
        !errors.message && 
        agreement === true
      
      setIsFormValid(isValid)
    }
    
    validateForm()
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        [id]: target.checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    // Basic client-side validation
    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters long")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (data.success) {
        setSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agreement: false
        })
      } else {
        setError(data.error || "Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-muted-foreground">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={`w-full rounded-lg border-0 ${fieldErrors.firstName && formData.firstName !== "" ? "bg-red-50 border-red-300" : "bg-muted/50"} px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all`}
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-muted-foreground">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={`w-full rounded-lg border-0 ${fieldErrors.lastName && formData.lastName !== "" ? "bg-red-50 border-red-300" : "bg-muted/50"} px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all`}
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full rounded-lg border-0 ${fieldErrors.email && formData.email !== "" ? "bg-red-50 border-red-300" : "bg-muted/50"} px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-muted-foreground">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className={`w-full rounded-lg border-0 ${fieldErrors.phone && formData.phone !== "" ? "bg-red-50 border-red-300" : "bg-muted/50"} px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all`}
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full rounded-lg border-0 ${fieldErrors.message && formData.message !== "" ? "bg-red-50 border-red-300" : "bg-muted/50"} px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all`}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreement"
            className="mt-1 h-4 w-4 rounded border-0 text-primary focus:ring-primary/25"
            checked={formData.agreement}
            onChange={handleChange}
            required
          />
          <label htmlFor="agreement" className="text-sm text-muted-foreground">
            I agree to the terms and conditions and consent to having my submitted information used to contact me.
          </label>
        </div>
        
        <div>
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 rounded-lg bg-green-50 text-green-600 text-sm mb-4">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          <div className="text-sm text-muted-foreground mb-2">
            {!isFormValid && formData.firstName !== "" && "All fields are required to send a message."}
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            size="lg" 
            disabled={isLoading || !isFormValid}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
}
