import React from 'react';
import { ArrowRight, Bot, Cpu, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Bot className="w-8 h-8 text-purple-500" />
            <Cpu className="w-8 h-8 text-blue-500" />
            <Zap className="w-8 h-8 text-purple-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Domine a Inteligência Artificial e Automação
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Transforme sua carreira com as tecnologias mais avançadas do mercado.
            Aprenda a criar soluções inovadoras com IA e automação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto border border-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
              Ver grade curricular
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}