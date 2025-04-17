import Image from "next/image"
import JoinJourney from "./join-journey"

export default function OurVision() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1312px] w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[500px] max-w-[500px] w-[500px]">
            <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-[10px] rotate-[-3deg] shadow-lg"></div>
            <Image
              src="/images/vision.svg"
              alt="vision concept"
              className="relative z-[1] rotate-3 w-[150px] sm:w-[180px] md:w-[230px] lg:w-full rounded-[10px]"
              width={500}
              height={500}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-grey">Our Vision</h2>
            <div className="space-y-2 text-grey text-xl font-medium">
              <p>
                At Ductape, our mission is simplifying backend system design by eliminating unnecessary complexity. We
                provide the tools to build advanced solutions from a well-crafted set of resources, empowering
                developers and organizations to innovate without boundaries.
              </p>
            </div>
            <JoinJourney />
          </div>
        </div>
      </div>
    </section>
  )
}
