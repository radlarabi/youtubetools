export function TypingIndicator() {
    return (
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
    )
  }
  