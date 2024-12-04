import React from 'react';
import { Bot, Brain, Code, Target, CheckCircle, DollarSign, Clock, Trophy, Timer } from 'lucide-react';

const courses = [
  {
    icon: <Bot className="w-6 h-6 text-purple-500" />,
    title: "Curso Completo n8n",
    price: 199,
    description: "Domine a automação de processos com n8n, da teoria à prática."
  },
  {
    icon: <Brain className="w-6 h-6 text-blue-500" />,
    title: "Curso de Prompt Avançado",
    price: 99,
    description: "Aprenda a criar prompts eficientes para maximizar resultados com IAs."
  },
  {
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: "Criação de Sistemas Completos com IA",
    price: 399,
    description: "Desenvolva sistemas inteligentes do zero com as melhores práticas."
  },
  {
    icon: <Target className="w-6 h-6 text-blue-500" />,
    title: "Prospecção de Clientes e Fechamento de Contratos",
    price: 199,
    description: "Estratégias comprovadas para atrair e converter clientes."
  }
];

const benefits = [
  {
    icon: <DollarSign className="w-5 h-5 text-green-500" />,
    title: "Retorno Rápido",
    description: "Potencial para fechar contratos de R$ 2.000 em apenas 15 dias de estudos"
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-500" />,
    title: "Metodologia Acelerada",
    description: "Conteúdo otimizado para resultados rápidos e aplicação imediata"
  },
  {
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    title: "Casos de Sucesso",
    description: "Diversos alunos já conquistaram seus primeiros clientes durante o curso"
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-purple-500" />,
    title: "Suporte Dedicado",
    description: "Mentoria personalizada para acelerar sua jornada de aprendizado"
  }
];

const totalValue = courses.reduce((acc, course) => acc + course.price, 0);
const earlyAccessPrice = 147;
const futurePrice = 1997;
const discount = Math.round(((totalValue - earlyAccessPrice) / totalValue) * 100);

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Conteúdo Completo do Treinamento
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforme sua carreira com nosso programa completo de IA e automação
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                    <span className="text-xl font-bold text-white whitespace-nowrap">
                      R$ {course.price}
                    </span>
                  </div>
                  <p className="text-gray-400 mt-2">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-500/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-white">
                Oferta por Tempo Limitado
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Após o lançamento oficial, o investimento será de <span className="text-white font-bold">R$ {futurePrice}</span>. 
              Aproveite o acesso antecipado por apenas:
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-gray-400 line-through">R$ {totalValue}</span>
              <span className="text-4xl font-bold text-white">R$ {earlyAccessPrice}</span>
            </div>
            <p className="text-yellow-500 font-medium mb-6">
              Economize R$ {futurePrice - earlyAccessPrice} garantindo sua vaga agora!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Garantir preço promocional
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}