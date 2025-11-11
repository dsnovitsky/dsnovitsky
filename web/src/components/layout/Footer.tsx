import { Separator } from "@/components/ui/separator"
import { Github, Mail, MessageCircle } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="py-12 px-4 bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <Separator className="mb-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-sm text-gray-500 font-mono">
              {t.footer.copyright}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:ds.novitsky@gmail.com"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
