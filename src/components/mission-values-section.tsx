import { Target, Heart, Users, Lightbulb } from "lucide-react"

const values = [
  {
    title: "Mission",
    description: "To create beautiful, sustainable outdoor spaces that enhance the natural environment while meeting our clients' unique needs and preferences.",
    icon: Target,
    color: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every landscape project, using quality materials and expert craftsmanship to deliver results that exceed expectations.",
    icon: Heart,
    color: "bg-sky-50 dark:bg-sky-950/30"
  },
  {
    title: "Sustainability",
    description: "We are committed to environmentally responsible landscaping practices that conserve water, support local ecosystems, and promote biodiversity.",
    icon: Users,
    color: "bg-indigo-50 dark:bg-indigo-950/30"
  },
  {
    title: "Creativity",
    description: "We approach each landscape with fresh ideas and creative solutions, blending aesthetic beauty with practical functionality for outdoor spaces you'll love.",
    icon: Lightbulb,
    color: "bg-cyan-50 dark:bg-cyan-950/30"
  }
]

export function MissionValuesSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Mission & Values
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our mission and values guide everything we do, from how we design landscapes to how we care for the environment.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div 
                key={value.title} 
                className={`flex flex-col rounded-2xl p-6 shadow-sm border border-muted transition-all duration-300 hover:shadow-md ${value.color}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full p-2 bg-background shadow-sm border border-muted">
                    <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
