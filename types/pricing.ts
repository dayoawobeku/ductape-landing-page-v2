export interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  buttonText: string
  features: string[]
  badge?: string
  position?: "relative" // For positioning badges
}
