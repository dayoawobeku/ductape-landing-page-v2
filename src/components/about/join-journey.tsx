import Link from "next/link"

export default function JoinJourney() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1312px] w-full mx-auto">
        <h2 className="text-xl font-bold mb-2 text-grey">JOIN US ON THE JOURNEY</h2>
        <div className="space-y-2 text-grey text-xl font-medium">
          <p>
            Whether you&apos;re a startup laying the groundwork for future growth or an established enterprise looking to
            modernize your infrastructure, we&apos;re here to help you build robust, scalable systems from the ground up.
            Let&apos;s shape the future of technology—one modular component at a time.
          </p>
        </div>
        <div className="space-y-2 text-grey text-xl font-medium mt-4">
          <Link href="/contact">Contact us today to learn how Ductape can transform your backend strategy</Link>
        </div>
      </div>
    </section>
  )
}
