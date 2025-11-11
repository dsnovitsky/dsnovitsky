import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface CodeBlockTab {
  id: string
  name: string
  code: string
  language: string
}

interface CodeBlockProps {
  tabs: CodeBlockTab[]
  className?: string
}

export function CodeBlock({ tabs, className }: CodeBlockProps) {
  if (tabs.length === 0) return null

  return (
    <div
      className={cn(
        "relative bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden",
        className
      )}
    >
      <Tabs defaultValue={tabs[0]?.id} className="w-full">
        <TabsList className="w-full justify-start rounded-none bg-[#161b22] border-b border-gray-800 p-0 h-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="data-[state=active]:bg-[#0d1117] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-green-400 text-gray-400 hover:text-gray-300 font-mono text-xs px-4 py-2 rounded-none border-b-2 border-transparent"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="m-0">
            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
              <span className="text-xs text-gray-400 font-mono">{tab.language}</span>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre">
                {tab.code}
              </code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

