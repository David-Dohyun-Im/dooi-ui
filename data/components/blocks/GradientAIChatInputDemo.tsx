"use client";

import { GradientAIChatInput } from "@/data/components/ui/gradient-ai-chat-input";

export default function GradientAIChatInputDemo() {
  const handleSend = (message: string) => {
    console.log("Message sent:", message);
  };

  const handleFileAttach = () => {
    console.log("File attach clicked");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground" style={{ textAlign: 'left' }}>
            Invisible AI That Thinks for You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl" style={{ textAlign: 'left' }}>
            Cluely is an undetectable desktop app that gives you the answers you didn't study for in every meeting and
          </p>
        </div>

        {/* Demo */}
        <div className="space-y-6">
          <GradientAIChatInput
            placeholder="Cluely is listening..."
            onSend={handleSend}
            onFileAttach={handleFileAttach}
          />
        </div>
      </div>
    </div>
  );
}
