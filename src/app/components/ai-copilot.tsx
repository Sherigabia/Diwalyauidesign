import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

export function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "👋 Hi! I'm your Diwalya AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { sender: 'user', text: inputValue }]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: "I can help you find the right worker, track your jobs, or answer any questions about Diwalya services!"
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full shadow-xl flex items-center justify-center group"
          >
            <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-accent/30"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl overflow-hidden border-accent/20">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent to-primary p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-heading font-semibold">Diwalya AI</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                    >
                      {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              {!isMinimized && (
                <AnimatePresence>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                  >
                    <div className="p-4 h-80 overflow-y-auto space-y-3 bg-background/50">
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] px-4 py-2 rounded-xl ${
                              message.sender === 'user'
                                ? 'bg-accent text-white'
                                : 'bg-card border border-border'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-border bg-card">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                          placeholder="Ask me anything..."
                          className="flex-1 px-4 py-2 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                        />
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={handleSend}
                          className="shrink-0"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Powered by Diwalya AI
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
