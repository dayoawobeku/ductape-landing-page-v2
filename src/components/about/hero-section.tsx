import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-16">
      <div className="max-w-[1312px] w-full mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:gap-20 items-center ">
          <div className="w-[644px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-grey">
              Building the Bridges of Automation
            </h1>
            <div className="space-y-2 text-grey text-xl font-medium">
              <p>
                At Ductape, we believe that creating seamless connections within your technology ecosystem should be
                both powerful and effortless.
              </p>
              <p>
                Our platform offers composable, portable backend resources that form the foundation for building complex
                systems tailored to your unique requirements. With our intuitive interface, developers can eliminate
                repetitive tasks, build feature-rich products, and unlock new possibilities with minimal effort.
              </p>
              <p>
                Whether you&apos;re managing customer data, synchronizing systems, or optimizing performance, our solution
                delivers seamless connectivity with precision and reliability.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] max-w-[500px] w-[500px] ml-16">
           <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-[10px] rotate-[-3deg] shadow-lg"></div>
              <Image
                src="/images/automation-bridge.svg"
                alt="Automation bridge concept"
                className="relative z-[1] rotate-3 w-[150px] sm:w-[180px] md:w-[230px] lg:w-full rounded-[10px]"
                width={500}
                height={500}
              />
            </div>
        </div>
      </div>
    </section>
  )
}
