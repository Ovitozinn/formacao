import React from 'react';
import { BrainCircuit, Code2, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-purple-500" />,
    title: "IA Avançada",
    description: "Aprenda os fundamentos e aplicações práticas de Machine Learning e Deep Learning"
  },
  {
    icon: <Code2 className="w-12 h-12 text-blue-500" />,
    title: "Automação Inteligente",
    description: "Desenvolva sistemas automatizados usando as melhores práticas e ferramentas"
  },
  {
    icon: <Users className="w-12 h-12 text-purple-500" />,
    title: "Mentoria em Grupo",
    description: "Suporte personalizado e networking com profissionais da área"
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-500" />,
    title: "Projetos Práticos",
    description: "Construa um portfólio impressionante com projetos do mundo real"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Por que escolher nosso curso?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}