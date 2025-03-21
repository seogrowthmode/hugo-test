import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import slugify from 'slugify'

// Types for our data structures
export interface City {
  city: string
  state: string
  content: string
  parent: string
  title: string
  metaDescription: string
  cityStateSlug: string
  services: Array<{
    name: string
    slug: string
  }>
}

export interface ServiceDetail {
  service: string
  city: string
  state: string
  keyBenefits: Array<{
    title: string
    description: string
  }>
  serviceSteps: Array<{
    title: string
    description: string
  }>
  localCommitments: Array<{
    title: string
    description: string
  }>
  serviceProblem: string
  contactPageUrl: string
  address: string
  phoneNumber: string
  email: string
  faqAnswers: string[]
  year: string
  businessName: string
  canonicalUrl: string
  title: string
  metaDescription: string
  slug: string
  testimonials: Array<{
    quote: string
  }>
  parent: string
}

// Function to parse the city-list CSV file
export function parseCityListCsv(): City[] {
  const filePath = path.join(process.cwd(), 'data', 'city-list.csv')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  })
  
  return records.map((record: any) => {
    // Extract services from the record
    const services = []
    for (let i = 1; i <= 11; i++) {
      if (record[`mpg_service_${i}`] && record[`mpg_service_${i}_slug`]) {
        services.push({
          name: record[`mpg_service_${i}`],
          slug: record[`mpg_service_${i}_slug`]
        })
      }
    }
    
    return {
      city: record.mpg_city,
      state: record.mpg_state,
      content: record.mpg_content,
      parent: record.mpg_parent,
      title: record.mpg_title,
      metaDescription: record.mpg_meta_description,
      cityStateSlug: record.mpg_city_state_slug,
      services
    }
  })
}

// Function to parse a service-specific CSV file
export function parseServiceCsv(serviceName: string): ServiceDetail[] {
  const filePath = path.join(process.cwd(), 'data', `${serviceName}.csv`)
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return []
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  })
  
  return records.map((record: any) => {
    // Extract key benefits
    const keyBenefits = []
    for (let i = 1; i <= 3; i++) {
      if (record[`mpg_key_benefit_${i}`] && record[`mpg_key_benefit_${i}_description`]) {
        keyBenefits.push({
          title: record[`mpg_key_benefit_${i}`],
          description: record[`mpg_key_benefit_${i}_description`]
        })
      }
    }
    
    // Extract service steps
    const serviceSteps = []
    for (let i = 1; i <= 3; i++) {
      if (record[`mpg_service_step_${i}_title`] && record[`mpg_service_step_${i}_description`]) {
        serviceSteps.push({
          title: record[`mpg_service_step_${i}_title`],
          description: record[`mpg_service_step_${i}_description`]
        })
      }
    }
    
    // Extract local commitments
    const localCommitments = []
    for (let i = 1; i <= 3; i++) {
      if (record[`mpg_local_commitment_${i}`] && record[`mpg_local_commitment_${i}_description`]) {
        localCommitments.push({
          title: record[`mpg_local_commitment_${i}`],
          description: record[`mpg_local_commitment_${i}_description`]
        })
      }
    }
    
    // Extract FAQ answers
    const faqAnswers = []
    for (let i = 1; i <= 5; i++) {
      if (record[`mpg_faq_answer_${i}`]) {
        faqAnswers.push(record[`mpg_faq_answer_${i}`])
      }
    }
    
    // Extract testimonials
    const testimonials = []
    if (record.testimonial_1) {
      testimonials.push({ quote: record.testimonial_1 })
    }
    if (record.mpg_testimonial_2) {
      testimonials.push({ quote: record.mpg_testimonial_2 })
    }
    
    return {
      service: record.mpg_service,
      city: record.mpg_city,
      state: record.mpg_state,
      keyBenefits,
      serviceSteps,
      localCommitments,
      serviceProblem: record.mpg_service_problem,
      contactPageUrl: record.mpg_contact_page_url,
      address: record.mpg_address,
      phoneNumber: record.mpg_phone_number,
      email: record.mpg_email,
      faqAnswers,
      year: record.mpg_year,
      businessName: record.mpg_business_name,
      canonicalUrl: record.mpg_canonical_url,
      title: record.mpg_title,
      metaDescription: record.mpg_meta_description,
      slug: record.mpg_slug,
      testimonials,
      parent: record.mpg_parent
    }
  })
}

// Function to group cities by state
export function getCitiesByState(): Record<string, City[]> {
  const cities = parseCityListCsv()
  const citiesByState: Record<string, City[]> = {}
  
  cities.forEach(city => {
    if (!citiesByState[city.state]) {
      citiesByState[city.state] = []
    }
    citiesByState[city.state].push(city)
  })
  
  return citiesByState
}

// Function to get all cities
export function getAllCities(): City[] {
  return parseCityListCsv()
}

// Function to get a city by slug
export function getCityBySlug(slug: string): City | undefined {
  const cities = parseCityListCsv()
  return cities.find(city => city.cityStateSlug === slug)
}

// Function to get service details for a specific city and service
export function getServiceDetails(cityStateSlug: string, serviceSlug: string): ServiceDetail | undefined {
  const city = getCityBySlug(cityStateSlug)
  if (!city) {
    console.log(`City not found for slug: ${cityStateSlug}`)
    return undefined
  }
  
  const service = city.services.find(s => s.slug === serviceSlug)
  if (!service) {
    console.log(`Service not found for slug: ${serviceSlug} in city: ${city.city}`)
    return undefined
  }
  
  // Try to get service details from the service-specific CSV file
  const serviceDetails = parseServiceCsv(serviceSlug)
  console.log(`Found ${serviceDetails.length} service details for ${serviceSlug}`)
  
  // If we have service details for this service, find the one for this city
  if (serviceDetails.length > 0) {
    const detail = serviceDetails.find(detail => 
      detail.city === city.city && 
      detail.state === city.state
    )
    
    if (detail) {
      return detail
    }
    
    console.log(`No matching service detail found for ${city.city}, ${city.state}, ${serviceSlug}`)
  }
  
  // If we don't have service details for this service, try to use ac-installation.csv as a fallback
  if (serviceSlug !== 'ac-installation') {
    const fallbackDetails = parseServiceCsv('ac-installation')
    console.log(`Using ac-installation.csv as fallback. Found ${fallbackDetails.length} details.`)
    
    const fallbackDetail = fallbackDetails.find(detail => 
      detail.city === city.city && 
      detail.state === city.state
    )
    
    if (fallbackDetail) {
      // Create a copy of the fallback detail with the correct service name and slug
      return {
        ...fallbackDetail,
        service: service.name,
        slug: serviceSlug
      }
    }
  }
  
  // If we still don't have a detail, create a generic one
  return {
    service: service.name,
    city: city.city,
    state: city.state,
    keyBenefits: [
      { title: 'Professional Service', description: 'Our team of experts provides top-quality service.' },
      { title: 'Fast Response', description: 'We respond quickly to your service requests.' },
      { title: 'Satisfaction Guaranteed', description: 'We ensure your complete satisfaction with our work.' }
    ],
    serviceSteps: [
      { title: 'Schedule a Service', description: 'Contact us to schedule your service appointment.' },
      { title: 'Expert Service', description: 'Our professionals will provide the service you need.' },
      { title: 'Follow-up', description: 'We follow up to ensure your satisfaction with our work.' }
    ],
    localCommitments: [
      { title: 'Local Expertise', description: `We understand the specific needs of ${city.city} residents.` },
      { title: 'Community Involvement', description: `We are proud to serve the ${city.city} community.` },
      { title: 'Rapid Response', description: `We provide fast service throughout ${city.city}.` }
    ],
    serviceProblem: `Are you experiencing issues with your HVAC system in ${city.city}? Our ${service.name} service can help.`,
    contactPageUrl: '/contact',
    address: `Service available in ${city.city}, ${city.state}`,
    phoneNumber: '(215) 607-6448',
    email: 'info@example.com',
    faqAnswers: [
      `Our ${service.name} service is designed to meet the specific needs of ${city.city} residents.`,
      `We provide fast and reliable ${service.name} service throughout ${city.city}.`,
      `Contact us today to schedule your ${service.name} service in ${city.city}.`
    ],
    year: new Date().getFullYear().toString(),
    businessName: 'Dowd HVAC',
    canonicalUrl: `https://www.example.com/service-area/${cityStateSlug}/${serviceSlug}`,
    title: `${service.name} in ${city.city}, ${city.state} | Dowd HVAC`,
    metaDescription: `Professional ${service.name} services in ${city.city}, ${city.state}. Fast, reliable, and efficient service by Dowd HVAC.`,
    slug: serviceSlug,
    testimonials: [
      { quote: `Great ${service.name} service in ${city.city}! Highly recommended.` },
      { quote: `The team provided excellent ${service.name} service for our home in ${city.city}.` }
    ],
    parent: city.cityStateSlug
  }
}

// Function to get all available service files
export function getAvailableServiceFiles(): string[] {
  const dataDir = path.join(process.cwd(), 'data')
  const files = fs.readdirSync(dataDir)
  
  return files
    .filter(file => file.endsWith('.csv') && file !== 'city-list.csv')
    .map(file => file.replace('.csv', ''))
}

// Function to get all city-service combinations
export function getAllCityServicePaths(): Array<{ cityStateSlug: string, serviceSlug: string }> {
  const cities = parseCityListCsv()
  const paths: Array<{ cityStateSlug: string, serviceSlug: string }> = []
  
  cities.forEach(city => {
    city.services.forEach(service => {
      paths.push({
        cityStateSlug: city.cityStateSlug,
        serviceSlug: service.slug
      })
    })
  })
  
  return paths
}
