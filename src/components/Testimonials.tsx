import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from './Animation/FadeIn';

const testimonials = [
  {
    rating: 5,
    quote: "We Turned More Leads into Clients",
    content: "Before AutoReal, follow-ups were inconsistent, and we missed opportunities. Now, with automated lead engagement, we're converting more leads into clients and hitting our targets every month.",
    author: "Jessica M.",
    role: "Boutique Brokerage Owner"
  },
  {
    rating: 5,
    quote: "Finally, Everything in One Place",
    content: "Our team was drowning in texts, emails, and social messages. AutoReal consolidated everything into one platform, making it easy to manage. Now we close deals faster and focus more on our clients.",
    author: "David L.",
    role: "Real Estate Team Lead"
  },
  {
    rating: 5,
    quote: "From Missed Leads to Consistent Growth",
    content: "Leads used to slip through the cracks, but AutoReal changed that. The AI tools and automated workflows have streamlined our processes and helped us scale.",
    author: "Maria R.",
    role: "Agency Manager"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See How Real Estate Teams Are{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Achieving More
              </span>{' '}
              with AutoReal
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <FadeIn delay={200}>
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {testimonial.quote}
                        </h3>

                        {/* Content */}
                        <p className="text-gray-600 mb-6 text-lg">
                          "{testimonial.content}"
                        </p>

                        {/* Author */}
                        <div>
                          <p className="font-semibold text-gray-900">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;