import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Send, Mic } from 'lucide-react';

function MessageBubble({ role, text }) {
  const isUser = role === 'user';
  return (
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-sm transition-all ${
          isUser
            ? 'bg-white/10 border border-white/10 text-[#E8E8E8]'
            : 'bg-[#1b1b1b] border border-white/10 text-[#E8E8E8]'
        }`}
      >
        <p className={`${isUser ? 'text-[0.98rem]' : 'text-[1.05rem] leading-relaxed'}`}>{text}</p>
      </div>
    </div>
  );
}

export default function ChatArea() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Ask me anything. I can summarize, brainstorm, and guide you.' },
  ]);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const answers = useMemo(
    () => ({
      hello: "Hello! How can I help you today?",
      'who are you': "I'm a demo AI assistant here to chat in this dark-themed interface.",
      help: 'You can ask about goals, images, videos, tools or anything else.',
      'ai goals': 'Common AI goals: accuracy, robustness, fairness, transparency, efficiency.',
    }),
    []
  );

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const getBotReply = (text) => {
    const t = text.toLowerCase().trim();
    for (const key of Object.keys(answers)) {
      if (t.includes(key)) return answers[key];
    }
    return "I'm thinking…";
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg = { role: 'bot', text: getBotReply(trimmed) };
      setMessages((prev) => [...prev, botMsg]);
    }, 550);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <div
            className="group flex items-center gap-2 w-full rounded-full border border-violet-400/30 bg-[#1b1b1b] px-4 py-3 shadow-[0_0_0_2px_rgba(124,58,237,0.12)] focus-within:shadow-[0_0_0_4px_rgba(124,58,237,0.25)] transition-shadow"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question…"
              className="flex-1 bg-transparent outline-none text-[#E8E8E8] placeholder:text-[#E8E8E8]/50 text-base md:text-lg"
            />
            <button
              aria-label="Send"
              onClick={sendMessage}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={listRef}
        className="mt-5 md:mt-7 h-[52vh] md:h-[58vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#121212] p-3 md:p-4 scroll-smooth"
      >
        {messages.map((m, idx) => (
          <MessageBubble key={idx} role={m.role} text={m.text} />
        ))}
      </div>

      <button
        type="button"
        aria-label="Voice input (coming soon)"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500/80 to-indigo-500/80 hover:from-fuchsia-500 hover:to-indigo-500 text-white shadow-lg shadow-fuchsia-500/20 flex items-center justify-center transition-all"
      >
        <Mic />
      </button>
    </section>
  );
}
