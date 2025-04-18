export interface TermsOfUseSubsection {
    title?: string
    paragraphs: string[]
    bulletPoints?: string[]
  }
  
  export interface TermsOfUseSection {
    id: string
    title?: string
    paragraphs: string[]
    bulletPoints?: string[]
    subsections?: TermsOfUseSubsection[]
  }  