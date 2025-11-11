"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TerminalProps {
  lines: string[]
  className?: string
  prompt?: string
}

export function Terminal({ lines, className, prompt = "$" }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex]
      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = ""
            }
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1)
            return newLines
          })
          setCurrentCharIndex((prev) => prev + 1)
        }, 30)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [currentLineIndex, currentCharIndex, lines])

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
      <div className="p-4">
        <pre className="font-mono text-xs m-0" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          <code className="block">
            {displayedLines.map((line, index) => (
              <div
                key={index}
                className="flex items-start"
              >
                <span className="text-green-400 mr-2 flex-shrink-0 select-none">{prompt}</span>
                <span className="text-gray-300 flex-1">
                  {line}
                  {index === displayedLines.length - 1 && currentCharIndex < lines[currentLineIndex]?.length && (
                    <span className="ml-1 w-2 h-4 bg-green-400 animate-pulse inline-block align-middle" />
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

