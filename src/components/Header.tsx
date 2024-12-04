import React from 'react';
import { Brain, Robot, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            AIxpert
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
          <a href="#curriculum" className="text-gray-300 hover:text-white transition-colors">Conteúdo</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Investimento</a>
        </nav>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Inscrever-se
        </button>
      </div>
    </header>
  );
}