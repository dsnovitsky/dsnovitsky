import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

export function Projects() {
  const { t } = useLocale()
  const categories = Array.from(new Set(projects.map((p) => p.category)))

  const getLocalizedProject = (projectId: string): { title: string; description: string } | undefined => {
    return t.projects.items[projectId]
  }

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <span className="text-sm text-gray-500 font-mono mb-2 block">
              &gt; 03. projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.projects.title}
            </h2>
          </div>

          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 bg-[#0d0d0d] border border-gray-800 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:border-gray-700 font-mono text-xs border border-transparent"
                >
                  {t.projects.categories[category] || category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => {
              const categoryProjects = projects.filter((p) => p.category === category)
              return (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryProjects.map((project, index) => {
                      const localized = getLocalizedProject(project.id)
                      return (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Card className="bg-[#0d0d0d] border-gray-800 hover:border-gray-700 transition-all h-full flex flex-col group">
                            <CardHeader className="pb-4">
                              <CardTitle className="text-xl mb-2 text-white font-mono">
                                {localized?.title || project.title}
                              </CardTitle>
                              <CardDescription className="text-gray-400 text-sm">
                                {localized?.description || project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col pt-0">
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="bg-[#1a1a1a] text-gray-400 border-gray-700 font-mono text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-2 mt-auto">
                                {project.githubUrl && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex-1 text-gray-400 hover:text-white hover:bg-gray-900/50 font-mono text-xs"
                                    onClick={() => window.open(project.githubUrl, "_blank")}
                                  >
                                    <Github size={14} className="mr-2" />
                                    github
                                  </Button>
                                )}
                                {project.demoUrl && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex-1 text-gray-400 hover:text-white hover:bg-gray-900/50 font-mono text-xs"
                                    onClick={() => window.open(project.demoUrl, "_blank")}
                                  >
                                    <ExternalLink size={14} className="mr-2" />
                                    demo
                                  </Button>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )
                    })}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
