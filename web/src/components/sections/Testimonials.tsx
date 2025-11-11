import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { testimonials } from "@/data/testimonials"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <span className="text-sm text-gray-500 font-mono mb-2 block">
              &gt; 05. testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Отзывы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#0d0d0d] border-gray-800 hover:border-gray-700 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="border border-gray-800">
                        <AvatarFallback className="bg-[#1a1a1a] text-gray-400 font-mono text-xs">
                          {testimonial.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-white font-mono">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < Math.floor(testimonial.rating)
                              ? "fill-gray-400 text-gray-400"
                              : "text-gray-700"
                          }
                        />
                      ))}
                      <span className="ml-2 text-xs text-gray-500 font-mono">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    {testimonial.source && (
                      <p className="text-xs text-gray-600 mt-4 font-mono">— {testimonial.source}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
