"use client"

import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ServiceDetail } from "@/lib/service-area"

// Helper function to generate a question based on the answer content
const generateQuestionFromAnswer = (answer: string, serviceName: string): string => {
  // Extract the first few words to create a question
  const firstFewWords = answer.split(' ').slice(0, 3).join(' ').replace(/[.,;:]$/, '');
  
  // Check if the answer contains specific patterns to create more relevant questions
  if (answer.toLowerCase().includes('include') || answer.toLowerCase().includes('involves')) {
    return `What does ${serviceName} include?`;
  } else if (answer.toLowerCase().includes('benefit')) {
    return `What are the benefits of our ${serviceName}?`;
  } else if (answer.toLowerCase().includes('cost') || answer.toLowerCase().includes('price')) {
    return `How much does ${serviceName} cost?`;
  } else if (answer.toLowerCase().includes('time') || answer.toLowerCase().includes('long')) {
    return `How long does ${serviceName} take?`;
  } else if (answer.toLowerCase().includes('schedule') || answer.toLowerCase().includes('appointment')) {
    return `How can I schedule ${serviceName}?`;
  } else {
    // Default question format
    return `About ${firstFewWords}...`;
  }
};

interface ServiceDetailComponentProps {
  serviceDetail: ServiceDetail
}

export function ServiceDetailComponent({ serviceDetail }: ServiceDetailComponentProps) {
  return (
    <div className="space-y-10">
      {/* Key Benefits Section */}
      {serviceDetail.keyBenefits && serviceDetail.keyBenefits.length > 0 && (
        <section id="key-benefits">
          <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceDetail.keyBenefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Service Steps Section */}
      {serviceDetail.serviceSteps && serviceDetail.serviceSteps.length > 0 && (
        <section id="service-process">
          <h2 className="text-2xl font-bold mb-6">Our Service Process</h2>
          <div className="space-y-6">
            {serviceDetail.serviceSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Local Commitments Section */}
      {serviceDetail.localCommitments && serviceDetail.localCommitments.length > 0 && (
        <section id="local-commitments">
          <h2 className="text-2xl font-bold mb-6">Our Commitment to {serviceDetail.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceDetail.localCommitments.map((commitment, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem Section */}
      {serviceDetail.serviceProblem && (
        <section id="service-problem">
          <h2 className="text-2xl font-bold mb-6">Common Problems We Solve</h2>
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <p className="text-muted-foreground">{serviceDetail.serviceProblem}</p>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {serviceDetail.faqAnswers && serviceDetail.faqAnswers.length > 0 && (
        <section id="faqs">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="border rounded-lg overflow-hidden bg-card shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {serviceDetail.faqAnswers.map((answer, index) => {
                // Generate a question based on the answer content
                const question = generateQuestionFromAnswer(answer, serviceDetail.service);
                
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className={index !== serviceDetail.faqAnswers.length - 1 ? "border-b" : ""}
                  >
                    <AccordionTrigger className="text-left font-semibold py-4 px-6 hover:bg-muted/50">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </section>
      )}
    </div>
  )
}
