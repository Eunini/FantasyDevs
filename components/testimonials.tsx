import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            <h2 className="h2 mb-4">Testimonials from Fantasy Devs</h2>
            <p className="text-xl text-gray-400">
              Hear what our fictional teams have to say about how Fantasy Devs transformed their collaboration and innovation.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={52} height={52} alt="Team Alpha" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — "Fantasy Devs helped us assemble the perfect blend of skills for our project. Our productivity skyrocketed, and we loved the gamified experience of building teams!"
              </blockquote>
              <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Team Alpha</cite> - "City Infrastructure"
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={52} height={52} alt="Code Crusaders" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — "The platform made it so easy to find talented team members for our app. Everyone brought their A-game, and we couldn't be happier with the results!"
              </blockquote>
              <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Code Crusaders</cite> - "Fitness Tracker App"
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={52} height={52} alt="Tech Titans" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — "Fantasy Devs is like the fantasy league for tech teams. It's fun, intuitive, and helps us discover amazing developers we wouldn’t have met otherwise!"
              </blockquote>
              <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Tech Titans</cite> - "Blockchain Wallet"
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}