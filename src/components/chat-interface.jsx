"use client"

import React, { useState, useRef, useEffect } from "react"
// import { Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
import { Message } from "@/components/message"
// import { TypingIndicator } from "@/components/typing-indicator"

export function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)


  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full px-4">
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl font-semibold mb-4 text-balance">
                How can I help you today?
              </h1>
              <p className="text-muted-foreground text-lg">
                Ask me anything or start a conversation
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              // <TypingIndicator />
              <div className="flex gap-4 p-4 rounded-lg bg-card">
                {/* Avatar */}
                <div className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium bg-secondary text-secondary-foreground">
                  AI
                </div>
          
                {/* Typing Animation */}
                <div className="flex-1 space-y-2">
                  <div className="font-semibold text-sm">ChatGPT</div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground typing-dot" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground typing-dot" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground typing-dot" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-background">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <form className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message ChatGPT..."
              className="min-h-[60px] max-h-[200px] pr-12 resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  // handleSubmit(e)
                }
              }}
            />
            <button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 bottom-2 h-8 w-8"
            >
              {/* <Send className="h-4 w-4" /> */} send
            </button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-2">
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  )
}
