"use client"

import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/ui/contact-form"

export function ContactSection() {
  return (
    <div className="container py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium">Email</h3>
                <p className="mt-1 text-muted-foreground">info@empirestategardens.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium">Phone</h3>
                <p className="mt-1 text-muted-foreground">212-736-3100</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium">Address</h3>
                <p className="mt-1 text-muted-foreground">350 Fifth Avenue, New York, NY 10118</p>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Hours</h3>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { day: "Monday", hours: "9:00 AM - 6:00 PM" },
                { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
                { day: "Friday", hours: "9:00 AM - 5:00 PM" },
                { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
                { day: "Sunday", hours: "Closed" }
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-card rounded-xl shadow-sm">
          <ContactForm />
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-16 rounded-xl overflow-hidden shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2376517942867!2d-73.98784492439748!3d40.748440471397695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1709323380417!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="w-full"
        />
      </div>
    </div>
  )
}
