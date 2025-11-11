import { Button } from "@/components/ui/button"
import { Github, Mail, MessageCircle, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { TerminalWithTabs } from "@/components/ui/terminal-with-tabs"
import { useLocale } from "@/contexts/LocaleContext"

export function Hero() {
  const { t, locale } = useLocale()

  const terminalTabs = [
    {
      id: "javascript",
      name: t.hero.terminal.languages.javascript.name,
      description: t.hero.terminal.languages.javascript.description,
      lines: locale === "ru"
        ? [
            "const developer = {",
            "  name: 'Richter',",
            "  role: 'Game Developer | Full-Stack Engineer',",
            "  skills: [",
            "    'Lua',",
            "    'React',",
            "    'TypeScript',",
            "    'Python'",
            "  ],",
            "  passion: 'Игровые модификации'",
            "};",
          ]
        : [
            "const developer = {",
            "  name: 'Richter',",
            "  role: 'Game Developer | Full-Stack Engineer',",
            "  skills: [",
            "    'Lua',",
            "    'React',",
            "    'TypeScript',",
            "    'Python'",
            "  ],",
            "  passion: 'Game Modifications'",
            "};",
          ],
    },
    {
      id: "lua",
      name: t.hero.terminal.languages.lua.name,
      description: t.hero.terminal.languages.lua.description,
      lines: locale === "ru"
        ? [
            "local developer = {",
            "  name = 'Richter',",
            "  role = 'Game Developer | Full-Stack Engineer',",
            "  skills = {",
            "    'Lua',",
            "    'React',",
            "    'TypeScript',",
            "    'Python'",
            "  },",
            "  passion = 'Игровые модификации'",
            "}",
          ]
        : [
            "local developer = {",
            "  name = 'Richter',",
            "  role = 'Game Developer | Full-Stack Engineer',",
            "  skills = {",
            "    'Lua',",
            "    'React',",
            "    'TypeScript',",
            "    'Python'",
            "  },",
            "  passion = 'Game Modifications'",
            "}",
          ],
    },
    {
      id: "python",
      name: t.hero.terminal.languages.python.name,
      description: t.hero.terminal.languages.python.description,
      lines: locale === "ru"
        ? [
            "developer = {",
            "    'name': 'Richter',",
            "    'role': 'Game Developer | Full-Stack Engineer',",
            "    'skills': [",
            "        'Lua',",
            "        'React',",
            "        'TypeScript',",
            "        'Python'",
            "    ],",
            "    'passion': 'Игровые модификации'",
            "}",
          ]
        : [
            "developer = {",
            "    'name': 'Richter',",
            "    'role': 'Game Developer | Full-Stack Engineer',",
            "    'skills': [",
            "        'Lua',",
            "        'React',",
            "        'TypeScript',",
            "        'Python'",
            "    ],",
            "    'passion': 'Game Modifications'",
            "}",
          ],
    },
    {
      id: "typescript",
      name: t.hero.terminal.languages.typescript.name,
      description: t.hero.terminal.languages.typescript.description,
      lines: locale === "ru"
        ? [
            "interface Developer {",
            "  name: string;",
            "  role: string;",
            "  skills: string[];",
            "  passion: string;",
            "}",
            "",
            "const developer: Developer = {",
            "  name: 'Richter',",
            "  role: 'Game Developer | Full-Stack Engineer',",
            "  skills: ['Lua', 'React', 'TypeScript', 'Python'],",
            "  passion: 'Игровые модификации'",
            "};",
          ]
        : [
            "interface Developer {",
            "  name: string;",
            "  role: string;",
            "  skills: string[];",
            "  passion: string;",
            "}",
            "",
            "const developer: Developer = {",
            "  name: 'Richter',",
            "  role: 'Game Developer | Full-Stack Engineer',",
            "  skills: ['Lua', 'React', 'TypeScript', 'Python'],",
            "  passion: 'Game Modifications'",
            "};",
          ],
    },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-sm text-gray-400 font-mono mb-2 block">
                  &gt; {t.hero.greeting}
                </span>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-white">{t.hero.name}</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                {t.hero.role}
                <br />
                <span className="text-gray-500">{t.hero.roleSubtitle}</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                <Button
                  variant="outline"
                  className="border-gray-700 hover:border-gray-600 hover:bg-gray-900/50 font-mono text-sm"
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.hero.viewProjects}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-900/50 font-mono text-sm"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.hero.getInTouch}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:ds.novitsky@gmail.com"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="Discord"
                >
                  <MessageCircle size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-full min-w-0"
          >
            <TerminalWithTabs tabs={terminalTabs} className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
