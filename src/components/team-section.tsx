import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "John Doe",
    role: "OWNER & LEAD LANDSCAPE DESIGNER",
    shortBio: "John Doe is the visionary owner and lead landscape designer of our company, bringing over 15 years of landscaping experience to guide our creative direction and client projects. With a passion for sustainable design and horticultural excellence, John has established a reputation for creating beautiful, functional outdoor spaces.",
    fullBio: "John Doe began his career in landscaping after graduating with a degree in Landscape Architecture from a prestigious university. His journey started at an established landscaping firm where he quickly rose through the ranks, demonstrating exceptional design talent and plant knowledge.\n\nIn 2015, John founded our landscaping company with a mission to create sustainable, beautiful outdoor spaces that enhance both the natural environment and our clients' quality of life. Under his guidance, the company has experienced consistent growth and has been recognized with numerous industry awards for innovative landscape design and environmental stewardship.\n\nBeyond his professional achievements, John is an active member of the American Society of Landscape Architects and regularly speaks at garden shows and horticultural events on sustainable landscaping practices.",
    image: "/placeholder.jpg",
    social: {
      email: "john.doe@example.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Jane Smith",
    role: "HEAD HORTICULTURIST",
    shortBio: "Jane Smith serves as our Head Horticulturist, leveraging her extensive background in plant science and garden design to select the perfect plants for each landscape. Her deep knowledge of native species and sustainable growing practices has been instrumental in creating thriving, low-maintenance gardens.",
    fullBio: "Jane Smith joined our team in 2016 after an impressive career at several leading botanical gardens and nurseries. She holds a Master's degree in Horticulture and has specialized in native plant communities and sustainable landscape management throughout her career.\n\nAs Head Horticulturist, Jane oversees all plant selection, soil preparation, and long-term maintenance planning. Her expertise in selecting the right plants for specific site conditions has enabled us to create landscapes that thrive with minimal inputs while providing maximum beauty and ecological benefits.\n\nJane is particularly passionate about promoting biodiversity in residential landscapes and has established several initiatives within the company to educate clients about the importance of native plants for supporting local wildlife and pollinators.",
    image: "/placeholder.jpg",
    social: {
      email: "jane.smith@example.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Michael Johnson",
    role: "HARDSCAPE INSTALLATION MANAGER",
    shortBio: "Michael Johnson leads our hardscape installation team, combining artistic vision with technical expertise to create stunning patios, walkways, and outdoor living spaces. His attention to detail ensures our hardscape features not only look beautiful but also stand the test of time.",
    fullBio: "Michael Johnson brings over a decade of experience in masonry and hardscape construction to our team. After earning his certification in landscape construction from a renowned technical institute, Michael worked with several established landscaping companies, developing his skills in various hardscape installation techniques.\n\nSince joining our company in 2018, Michael has elevated our hardscape offerings, implementing rigorous quality standards that have significantly improved durability and client satisfaction. His team works closely with our designers to ensure seamless integration between hardscape elements and the surrounding landscape.\n\nMichael is an advocate for continuing education in the landscape industry and regularly attends workshops to stay current with the latest materials and installation techniques. In his free time, he enjoys building stone sculptures and has had his work featured in several local garden tours.",
    image: "/placeholder.jpg",
    social: {
      email: "michael.johnson@example.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Emily Chen",
    role: "CLIENT RELATIONS MANAGER",
    shortBio: "Emily Chen directs our client relations with a personalized approach that has significantly enhanced our customer experience and project satisfaction rates. Her ability to understand clients' visions and communicate them effectively to our design team ensures that every landscape exceeds expectations.",
    fullBio: "Emily Chen joined our team in 2019, bringing with her a wealth of experience in customer service and project management. With a background in environmental studies and a passion for outdoor spaces, Emily has a unique ability to help clients articulate their landscape goals and priorities.\n\nAs Client Relations Manager, Emily has implemented comprehensive communication systems that have resulted in a 95% client satisfaction rate and a significant increase in referral business. Her team manages all aspects of the client experience, from initial consultation to final walkthrough and maintenance planning.\n\nEmily is particularly interested in helping clients create outdoor spaces that enhance their quality of life and connection to nature. She regularly organizes client education workshops on topics such as sustainable garden maintenance and seasonal landscape care.",
    image: "/placeholder.jpg",
    social: {
      email: "emily.chen@example.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com"
    }
  }
]

export function TeamSection() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className={`mb-24 flex flex-col gap-8 items-center ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Hi, I am</h3>
                <h2 className="text-4xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-sm font-semibold tracking-wider text-blue-600">
                  {member.role}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {member.shortBio}
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed whitespace-pre-line">
                {member.fullBio}
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="text-sm font-medium text-gray-500">Contact</h4>
                <div className="flex gap-4">
                  <Link 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="sr-only">Email</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </Link>
                  <Link 
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                  <Link 
                    href={member.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </Link>
                  <Link 
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
