import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import { useLocale } from "@/contexts/LocaleContext"

export function Contact() {
  const { t } = useLocale()
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <span className="text-sm text-gray-500 font-mono mb-2 block">
              &gt; 04. contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.contact.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#0d0d0d] border-gray-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-white font-mono text-lg">{t.contact.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-[#1a1a1a] border-gray-800 focus:border-gray-700 font-mono text-sm"
                    required
                  />
                  <Textarea
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-[#1a1a1a] border-gray-800 focus:border-gray-700 min-h-[120px] font-mono text-sm"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#1a1a1a] border border-gray-800 hover:bg-[#252525] hover:border-gray-700 text-white font-mono text-sm"
                  >
                    <Send size={14} className="mr-2" />
                    {t.contact.sendButton}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-[#0d0d0d] border-gray-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-white font-mono text-lg">{t.contact.socialNetworks}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded border border-gray-800 hover:border-gray-700 hover:bg-[#1a1a1a] transition-all group"
                  >
                    <Github
                      size={20}
                      className="text-gray-500 group-hover:text-white transition-colors"
                    />
                    <div>
                      <p className="text-sm text-white font-mono">GitHub</p>
                      <p className="text-xs text-gray-500">github.com</p>
                    </div>
                  </a>
                  <a
                    href="mailto:ds.novitsky@gmail.com"
                    className="flex items-center gap-3 p-3 rounded border border-gray-800 hover:border-gray-700 hover:bg-[#1a1a1a] transition-all group"
                  >
                    <Mail
                      size={20}
                      className="text-gray-500 group-hover:text-white transition-colors"
                    />
                    <div>
                      <p className="text-sm text-white font-mono">Email</p>
                      <p className="text-xs text-gray-500">ds.novitsky@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded border border-gray-800 hover:border-gray-700 hover:bg-[#1a1a1a] transition-all group"
                  >
                    <MessageCircle
                      size={20}
                      className="text-gray-500 group-hover:text-white transition-colors"
                    />
                    <div>
                      <p className="text-sm text-white font-mono">Discord</p>
                      <p className="text-xs text-gray-500">artem.richter</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
