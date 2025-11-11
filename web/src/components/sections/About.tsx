import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CodeBlock } from "@/components/ui/code-block"
import { useLocale } from "@/contexts/LocaleContext"

export function About() {
  const { t } = useLocale()

  const codeTabs = [
    {
      id: "javascript",
      name: "JavaScript",
      language: "javascript",
      code: t.about.codeExamples.javascript,
    },
    {
      id: "lua",
      name: "Lua",
      language: "lua",
      code: t.about.codeExamples.lua,
    },
    {
      id: "python",
      name: "Python",
      language: "python",
      code: t.about.codeExamples.python,
    },
    {
      id: "typescript",
      name: "TypeScript",
      language: "typescript",
      code: t.about.codeExamples.typescript,
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <span className="text-sm text-gray-500 font-mono mb-2 block">
              &gt; 01. about
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.about.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-[#0d0d0d] border-gray-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {t.about.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="text-gray-400 text-sm italic mt-6">
                  {t.about.philosophy}
                </p>
              </CardContent>
            </Card>

            <CodeBlock tabs={codeTabs} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.about.keyPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-[#0d0d0d] border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-gray-300 font-mono">{point}</p>
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
