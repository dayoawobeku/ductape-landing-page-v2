import type { PrivacyPolicySection } from "../../../types/privacy-policy"

interface PrivacyPolicyContentProps {
  sections: PrivacyPolicySection[]
}

export default function PrivacyPolicyContent({ sections }: PrivacyPolicyContentProps) {
  return (
    <div className="space-y-8  px-6 md:px-0">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-20">
          {section.title && <h2 className="text-2xl font-bold mb-4 text-grey">{section.title}</h2>}

          {section.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-xl font-medium mb-4 text-grey">
              {paragraph}
            </p>
          ))}

          {section.bulletPoints && section.bulletPoints.length > 0 && (
            <ul className="list-disc pl-6 space-y-2 text-xl font-medium mb-4 text-grey">
              {section.bulletPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {section.subsections && section.subsections.length > 0 && (
            <div className="space-y-6 mt-6">
              {section.subsections.map((subsection, idx) => (
                <div key={idx}>
                  {subsection.title && <h3 className="text-xl font-medium mb-4 text-grey">{subsection.title}</h3>}

                  {subsection.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-xl font-normal mb-4 text-grey">
                      {paragraph}
                    </p>
                  ))}

                  {subsection.bulletPoints && subsection.bulletPoints.length > 0 && (
                    <ul className="list-disc pl-6 space-y-2 text-xl font-medium mb-4 text-grey">
                      {subsection.bulletPoints.map((point, bpIdx) => (
                        <li key={bpIdx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
