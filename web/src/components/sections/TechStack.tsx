import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { techStack, categories } from "@/data/stack"
import { motion } from "framer-motion"
import { useLocale } from "@/contexts/LocaleContext"

export function TechStack() {
  const { t } = useLocale()
  const groupedStack = categories.map((category) => ({
    category,
    categoryLabel: t.stack.categories[category as keyof typeof t.stack.categories] || category,
    items: techStack.filter((item) => item.category === category),
  }))

  return (
    <section id="stack" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <span className="text-sm text-gray-500 font-mono mb-2 block">
              &gt; 02. stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.stack.title}
            </h2>
          </div>

          <div className="space-y-12">
            {groupedStack.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                <h3 className="text-sm text-gray-500 font-mono mb-4 uppercase tracking-wider">
                  {group.categoryLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, index) => {
                    const description = t.stack.descriptions[item.name] || item.description
                    return (
                      <Tooltip key={item.name}>
                        <TooltipTrigger>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="px-3 py-1 text-xs font-mono border-gray-700 hover:border-gray-600 hover:bg-gray-900/50 text-gray-300 transition-all cursor-pointer"
                            >
                              {item.name}
                            </Badge>
                          </motion.div>
                        </TooltipTrigger>
                        {description && (
                          <TooltipContent className="bg-[#1a1a1a] border-gray-800">
                            <p className="text-xs text-gray-300">{description}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
