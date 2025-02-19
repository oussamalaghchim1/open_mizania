import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Bonjour! Je suis votre assistant virtuel. Comment puis-je vous aider?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    // Simuler une réponse du chatbot
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Je suis désolé, je suis en cours de développement. Je pourrai bientôt répondre à vos questions!",
        isUser: false
      }]);
    }, 1000);
    setInput("");
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className="fixed bottom-4 right-4 bg-hsl-primary text-white p-3 rounded-full shadow-lg hover:bg-hsl-primary/90 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <Dialog.Title className="sr-only">Assistant Virtuel</Dialog.Title>
          <div className="flex items-center justify-between bg-hsl-primary text-white p-4">
            <h3 className="text-lg font-semibold">Assistant Virtuel</h3>
            <Dialog.Close asChild>
              <button className="text-white hover:text-gray-200">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-hsl-primary text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hsl-primary"
              />
              <button
                type="submit"
                className="bg-hsl-primary text-white px-4 py-2 rounded-lg hover:bg-hsl-primary/90 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Chatbot;
