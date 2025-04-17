export interface PrivacyPolicySubsection {
  title?: string
  paragraphs: string[]
  bulletPoints?: string[]
}

export interface PrivacyPolicySection {
  id: string
  title?: string
  paragraphs: string[]
  bulletPoints?: string[]
  subsections?: PrivacyPolicySubsection[]
}
