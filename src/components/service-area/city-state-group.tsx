"use client"

import { City } from "@/lib/service-area"
import { getFullStateName } from "@/lib/utils"
import { CityCard } from "./city-card"

interface CityStateGroupProps {
  state: string
  cities: City[]
}

export function CityStateGroup({ state, cities }: CityStateGroupProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-2 text-sm">
          {cities.length}
        </span>
        {getFullStateName(state)}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cities.map((city) => (
          <CityCard key={city.cityStateSlug} city={city} />
        ))}
      </div>
    </div>
  )
}
