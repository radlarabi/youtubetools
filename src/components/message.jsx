"use client"

// import { cn } from "@/lib/utils"

export function Message({ message }) {
  const isUser = message.role === "user"

  return (
    <div 
        // className={cn("flex gap-4 p-4 rounded-lg", isUser ? "bg-accent/50" : "bg-card")}
        >
      {/* Avatar */}
      <div
        // className={cn(
        //   "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium",
        //   isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        // )}
      >
        {isUser ? "U" : "AI"}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2 min-w-0">
        <div className="font-semibold text-sm">{isUser ? "You" : "ChatGPT"}</div>
        <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
          {message.isStreaming && (
            <span className="inline-block w-1 h-4 ml-1 bg-foreground animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}
