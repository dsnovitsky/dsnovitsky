"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface TerminalTab {
  id: string
  name: string
  lines: string[]
  description: string
}

interface TerminalWithTabsProps {
  tabs: TerminalTab[]
  className?: string
  prompt?: string
}

export function TerminalWithTabs({ tabs, className, prompt = "$" }: TerminalWithTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")
  const [displayedLines, setDisplayedLines] = useState<Record<string, string[]>>({})
  const [currentLineIndex, setCurrentLineIndex] = useState<Record<string, number>>({})
  const [currentCharIndex, setCurrentCharIndex] = useState<Record<string, number>>({})

  const currentTab = tabs.find((tab) => tab.id === activeTab)

  // Initialize tab state when it doesn't exist
  useEffect(() => {
    if (!displayedLines[activeTab]) {
      setDisplayedLines((prev) => ({ ...prev, [activeTab]: [] }))
      setCurrentLineIndex((prev) => ({ ...prev, [activeTab]: 0 }))
      setCurrentCharIndex((prev) => ({ ...prev, [activeTab]: 0 }))
    }
  }, [activeTab, displayedLines])

  // Typing animation
  useEffect(() => {
    if (!currentTab || !displayedLines[activeTab]) return

    const currentLines = currentTab.lines
    const tabLineIndex = currentLineIndex[activeTab] || 0
    const tabCharIndex = currentCharIndex[activeTab] || 0

    if (tabLineIndex < currentLines.length) {
      const currentLine = currentLines[tabLineIndex]
      if (tabCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = { ...prev }
            if (!newLines[activeTab]) {
              newLines[activeTab] = []
            }
            const lines = [...newLines[activeTab]]
            if (!lines[tabLineIndex]) {
              lines[tabLineIndex] = ""
            }
            lines[tabLineIndex] = currentLine.slice(0, tabCharIndex + 1)
            return { ...newLines, [activeTab]: lines }
          })
          setCurrentCharIndex((prev) => ({ ...prev, [activeTab]: tabCharIndex + 1 }))
        }, 30)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => ({ ...prev, [activeTab]: tabLineIndex + 1 }))
          setCurrentCharIndex((prev) => ({ ...prev, [activeTab]: 0 }))
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [activeTab, currentLineIndex, currentCharIndex, currentTab, displayedLines])

  return (
    <div
      className={cn(
        "bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden w-full min-w-0",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-gray-500 text-xs ml-2">terminal</span>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
            <div className="p-4">
              <div className="mb-3 pb-3 border-b border-gray-800/50">
                <p className="text-xs text-gray-400 font-mono">{tab.description}</p>
              </div>
              <pre className="font-mono text-xs m-0" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                <code className="block">
                  {(displayedLines[tab.id] || []).map((line, index) => {
                    const tabCurrentLines = tabs.find((t) => t.id === tab.id)?.lines || []
                    const tabCurrentLineIndex = currentLineIndex[tab.id] || 0
                    const tabCurrentCharIndex = currentCharIndex[tab.id] || 0
                    const isLastLine = index === (displayedLines[tab.id]?.length || 0) - 1
                    const isTyping = tab.id === activeTab && 
                      index === tabCurrentLineIndex && 
                      tabCurrentCharIndex < (tabCurrentLines[index]?.length || 0)
                    
                    return (
                      <div key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 flex-shrink-0 select-none">{prompt}</span>
                        <span className="text-gray-300 flex-1">
                          {line}
                          {isLastLine && isTyping && (
                            <span className="ml-1 w-2 h-4 bg-green-400 animate-pulse inline-block align-middle" />
                          )}
                        </span>
                      </div>
                    )
                  })}
                </code>
              </pre>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

