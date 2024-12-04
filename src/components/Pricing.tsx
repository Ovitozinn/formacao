import React from 'react';
import { Check, Zap, Star, Trophy } from 'lucide-react';

const totalValue = 2388; // Sum of individual module prices
const discountedPrice = 1997; // Bundle price
const savings = totalValue - discountedPrice;
const savingsPercentage = Math.round((savings / totalValue) * 100);

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-t from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Invista no seu futuro
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acesso completo a todo o conteúdo com economia de {savingsPercentage}%. Uma oportunidade única de transformar sua carreira.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4" />
                Oferta mais popular
              </span>
            </div>
            <div className="rounded-2xl bg-gray-900 border border-purple-500/30 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Pacote Completo</h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-gray-400 line-through">R$ {totalValue}</span>
                  <span className="text-4xl font-bold text-white">R$ {discountedPrice}</span>
                </div>
                <p className="text-green-500 font-medium">
                  Economia de R$ {savings} ({savingsPercentage}% OFF)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-400 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Conteúdo Principal
                  </h4>
                  {[
                    "Acesso vitalício ao conteúdo",
                    "100+ horas de aulas em vídeo",
                    "4 módulos completos",
                    "Projetos práticos com código-fonte",
                    "Certificado de conclusão",
                    "Atualizações gratuitas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Bônus Exclusivos
                  </h4>
                  {[
                    "Mentoria em grupo semanal",
                    "Comunidade exclusiva",
                    "Templates prontos para uso",
                    "Consultoria individual (2 sessões)",
                    "Acesso antecipado a novidades",
                    "Suporte prioritário"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-medium">
                  Garantir minha vaga com desconto
                </button>
                <p className="text-center text-gray-400 text-sm">
                  Pagamento único e seguro • Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}