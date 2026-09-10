import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  ChartBar, CheckSquareOffset, Users, Target, 
  TrendUp, PlayCircle, Image, MapPin, Clock, GenderMale
} from '@phosphor-icons/react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-12 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <FadeIn>
    <div className="flex flex-col gap-2 mb-8">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{title}</h2>
      {subtitle && <p className="text-white/60 text-xl font-bold uppercase tracking-wide">{subtitle}</p>}
    </div>
  </FadeIn>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#111111]/80 backdrop-blur-xl border border-white/5 rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:bg-[#151515]/90 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);

const chartData = [
  { name: 'Junho', Visualizações: 19, Seguidores: 3300, Novos: 186 },
  { name: 'Julho', Visualizações: 14, Seguidores: 3400, Novos: 112 },
  { name: 'Agosto', Visualizações: 18, Seguidores: 3600, Novos: 159 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111]/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-xl">
        <p className="text-white font-bold mb-2 uppercase">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="font-bold text-sm" style={{ color: entry.color || entry.fill }}>
            {entry.name}: {entry.name === 'Visualizações' ? `${entry.value}k` : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/40 selection:text-white pb-20 overflow-x-hidden">
      
      {/* 1. Capa */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-red-600/10 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full z-10">
          <FadeIn>
            <span className="inline-block bg-white/5 backdrop-blur-md border border-white/10 text-orange-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              RELATÓRIO DE PERFORMANCE • JUN-AGO 2026
            </span>
            <h1 className="text-5xl md:text-[5rem] lg:text-[7rem] font-black leading-[0.9] tracking-tighter uppercase mb-6 text-white text-balance flex flex-col gap-4 drop-shadow-2xl">
              <span className="drop-shadow-[0_0_30px_rgba(249,115,22,0.5)] text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600">
                MUNDIAL FOGOS
              </span>
              <span className="text-white/60 text-3xl md:text-[3.5rem] lg:text-[4.5rem] tracking-normal leading-tight">R$ 747 MIL EM OPORTUNIDADES GERADAS</span>
            </h1>
            <p className="text-white/40 text-xl md:text-2xl font-bold uppercase tracking-wide flex items-center gap-4">
              Gestão: V4 Nunes & Co.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
      </section>

      {/* Visão Geral Consolidada */}
      <Section>
        <SectionTitle title="Visão Geral" subtitle="Trimestre Consolidado" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <Card className="border-orange-500/30 bg-orange-500/5">
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Visualizações Totais (IG)</p>
              <div className="flex items-end gap-3 flex-wrap">
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">51 mil</p>
              </div>
              <p className="text-white/40 text-xs font-bold mt-2">19k + 14k + 18k</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card>
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Alcance Pago (Meta Ads)</p>
              <p className="text-4xl md:text-5xl font-black">263,9 mil</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Card className="border-orange-500/30 bg-orange-500/5">
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Novos Seguidores (IG)</p>
              <div className="flex items-end gap-3 flex-wrap">
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">+457</p>
                <span className="text-orange-400 font-bold text-lg flex items-center mb-1"><TrendUp weight="bold" className="mr-1" /></span>
              </div>
              <p className="text-white/40 text-xs font-bold mt-2">Base Total: 3.640</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Card>
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Melhor Reel</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">2,2k</p>
                <p className="text-white/40 font-bold text-2xl ml-2">views</p>
              </div>
              <p className="text-white/40 text-xs font-bold mt-2">Agosto - Entrega</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.5}>
            <Card>
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Cliques no Link (IG)</p>
              <p className="text-4xl md:text-5xl font-black">9.400+</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.6}>
            <Card>
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Visitas ao Perfil (IG)</p>
              <p className="text-4xl md:text-5xl font-black">8.970+</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.7}>
            <Card>
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Total de Posts (IG)</p>
              <p className="text-4xl md:text-5xl font-black">25</p>
              <p className="text-white/40 text-xs font-bold mt-2">8 Reels + 17 Posts (+ 60 Stories)</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.8}>
            <Card>
              <p className="text-white/60 text-sm uppercase font-bold mb-2">Novos Seg. FB</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl md:text-5xl font-black text-green-400">+38</p>
                <p className="text-green-400 font-bold text-xl ml-2">+35,7%</p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Evolução Mês a Mês */}
      <Section className="bg-[#111111]/50 border-y border-white/5 w-full max-w-none px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <SectionTitle title="Evolução Mensal" subtitle="Visualizações e Crescimento (IG)" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <FadeIn>
              <Card className="h-[400px] flex flex-col p-6 border-white/10">
                <h3 className="text-white font-bold mb-6 text-xl uppercase tracking-widest text-center">Visualizações (milhares)</h3>
                <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity={1} />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" stroke="#9a9a9a" tick={{ fill: '#9a9a9a', fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#9a9a9a" tick={{ fill: '#9a9a9a', fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                    <Bar dataKey="Visualizações" fill="url(#orangeGradient)" radius={[6, 6, 0, 0]} barSize={60} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Card className="h-[400px] flex flex-col p-6 border-white/10">
                <h3 className="text-white font-bold mb-6 text-xl uppercase tracking-widest text-center">Novos Seguidores</h3>
                <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                  <AreaChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorNovos" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" stroke="#9a9a9a" tick={{ fill: '#9a9a9a', fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#9a9a9a" tick={{ fill: '#9a9a9a', fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="Novos" stroke="#f97316" strokeWidth={4} fillOpacity={1} fill="url(#colorNovos)" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-start gap-4 p-6 bg-green-900/10 border-l-4 border-green-500 rounded-lg backdrop-blur-md">
              <TrendUp className="w-8 h-8 text-green-500 shrink-0 mt-1" weight="bold" />
              <p className="text-white/70 font-bold text-lg md:text-xl">
                Agosto registrou recuperação expressiva: <strong className="text-green-400">+27% em visualizações</strong> vs. julho, impulsionado pelo aumento de 2 posts extras e pela qualidade dos Reels. O app sinalizou: <strong className="text-white">"Você arrasou em agosto!"</strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Destaques de Conteúdo */}
      <Section>
        <SectionTitle title="Top Conteúdos" subtitle="Ranking por Visualizações e Alcance" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { title: 'Entrega própria — "Toda entrega começa aqui"', month: 'Agosto', format: 'Reel', result: '2,2 mil views', hl: '11 novos seguidores', icon: <PlayCircle weight="fill" className="text-orange-500 w-8 h-8" /> },
            { title: 'Torta Argentina 93 Tubos — Copa do Mundo', month: 'Junho', format: 'Reel', result: '1.646 alc.', hl: 'Sazonalidade Copa + B2B', icon: <PlayCircle weight="fill" className="text-orange-500 w-8 h-8" /> },
            { title: 'Sem intermediários — logística ponta a ponta', month: 'Junho', format: 'Reel', result: '1.442 alc.', hl: '92 curtidas, 7 coments', icon: <PlayCircle weight="fill" className="text-orange-500 w-8 h-8" /> },
            { title: '3 Mitos sobre usar fogos no quintal', month: 'Julho', format: 'Post', result: '989 views', hl: 'Melhor post estático', icon: <Image weight="fill" className="text-orange-500 w-8 h-8" /> },
            { title: 'AQUI É BRASIL! Copa do Mundo', month: 'Junho', format: 'Reel', result: '808 views', hl: 'Melhor Reel de junho', icon: <PlayCircle weight="fill" className="text-orange-500 w-8 h-8" /> },
            { title: 'O segredo de 1.000 anos dos fogos', month: 'Junho', format: 'Reel', result: '657 alc.', hl: 'Autoridade + storytelling', icon: <PlayCircle weight="fill" className="text-orange-500 w-8 h-8" /> },
          ].map((item, i) => (
            <FadeIn delay={i * 0.1} key={i} className="h-full">
              <Card className="h-full flex flex-col gap-4 border-white/10 hover:border-orange-500/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs font-bold uppercase">{item.month}</span>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white leading-snug">{item.title}</h3>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-1">{item.result}</p>
                  <p className="text-white/60 font-bold text-sm uppercase tracking-wider">{item.hl}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Interações e Engajamento */}
      <Section className="bg-[#111111]/50 border-y border-white/5 w-full max-w-none px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <SectionTitle title="Engajamento" subtitle="Interações Orgânicas" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <FadeIn delay={0.1}>
              <Card className="text-center p-6 bg-black/40 h-full flex flex-col justify-center">
                <p className="text-white/60 text-sm font-bold uppercase mb-2">Interações em Reels</p>
                <p className="text-4xl font-black text-orange-500">522</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="text-center p-6 bg-black/40 h-full flex flex-col justify-center">
                <p className="text-white/60 text-sm font-bold uppercase mb-2">Interações Stories</p>
                <p className="text-4xl font-black text-orange-500">414</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="text-center p-6 bg-black/40 h-full flex flex-col justify-center">
                <p className="text-white/60 text-sm font-bold uppercase mb-2">Curtidas Totais</p>
                <p className="text-4xl font-black text-white">367</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Card className="text-center p-6 bg-black/40 h-full flex flex-col justify-center">
                <p className="text-white/60 text-sm font-bold uppercase mb-2">Taxa de Engajamento</p>
                <p className="text-4xl font-black text-green-400">4,34%</p>
                <p className="text-white/40 text-xs font-bold mt-2">Sobre alcance</p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Vitórias Sociais (Grid de Textos) */}
      <Section>
        <SectionTitle title="Vitórias do Trimestre" subtitle="Crescimento e Estratégia" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <FadeIn delay={0.1} className="h-full">
            <Card className="h-full border-orange-500/30 bg-orange-500/5 group-hover:bg-orange-500/10">
              <h3 className="text-2xl font-black text-white uppercase mb-4 flex items-center gap-3">
                <TrendUp className="text-orange-500" /> Crescimento
              </h3>
              <p className="text-white/70 font-bold text-lg leading-relaxed">
                +457 novos seguidores no IG. Agosto foi o melhor mês com +159 seguidores (+42% vs julho). Facebook cresceu +35,7%.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <Card className="h-full">
              <h3 className="text-2xl font-black text-white uppercase mb-4 flex items-center gap-3">
                <PlayCircle className="text-orange-500" /> Força dos Reels
              </h3>
              <p className="text-white/70 font-bold text-lg leading-relaxed">
                Reels respondem pela maior fatia de interações (522 vs. 209 posts estáticos). Principal vetor de descoberta.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3} className="h-full">
            <Card className="h-full">
              <h3 className="text-2xl font-black text-white uppercase mb-4 flex items-center gap-3">
                <Target className="text-orange-500" /> Aderência B2B
              </h3>
              <p className="text-white/70 font-bold text-lg leading-relaxed">
                Reels sobre logística/operação lideram alcance. Engajamento de 4,34% supera média do setor B2B (~1,5–2,5%).
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.4} className="h-full">
            <Card className="h-full">
              <h3 className="text-2xl font-black text-white uppercase mb-4 flex items-center gap-3">
                <Clock className="text-orange-500" /> Inteligência
              </h3>
              <p className="text-white/70 font-bold text-lg leading-relaxed">
                Seg, Ter e Qua das 18h–21h são os horários de pico, alinhado ao fim de expediente do lojista B2B.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.5} className="md:col-span-2 lg:col-span-2 h-full">
            <Card className="h-full flex flex-col justify-center bg-black/40 border-white/10">
               <h3 className="text-2xl font-black text-white uppercase mb-4 flex items-center gap-3">
                <CheckSquareOffset className="text-orange-500" /> Marcos Operacionais
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 text-white/70 font-bold text-base">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full shrink-0" />
                  Cadência mantida nos 3 meses — 12+ posts/mês.
                </li>
                <li className="flex items-start gap-3 text-white/70 font-bold text-base">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full shrink-0" />
                  Estratégia TikTok aprovada e iniciada.
                </li>
                <li className="flex items-start gap-3 text-white/70 font-bold text-base">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full shrink-0" />
                  Produção de set/agendada: videomaker, fotógrafo, drone.
                </li>
                <li className="flex items-start gap-3 text-white/70 font-bold text-base">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full shrink-0" />
                  Atas de reunião mensal entregues.
                </li>
              </ul>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Resultados de Negócios */}
      <Section className="bg-[#111111]/50 border-y border-white/5 w-full max-w-none px-6 md:px-12 mb-10">
        <div className="max-w-7xl mx-auto w-full">
          <SectionTitle title="Funil de Negócios" subtitle="Impacto do Orgânico vs Tráfego Pago" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Social Media (Orgânico) */}
            <div>
              <h3 className="text-3xl font-black text-white uppercase mb-8 flex items-center gap-3">
                <Users className="text-orange-500" weight="bold" /> Social Media (Orgânico)
              </h3>
              <Card className="h-full border-white/10 bg-black/40">
                <p className="text-white/70 font-bold text-lg mb-8 leading-relaxed">
                  Trabalho de base e qualificação de público. Construção de autoridade e engajamento sem investimento direto em mídia.
                </p>
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-white/60 font-bold uppercase text-sm mb-1">Visualizações Totais (App)</p>
                    <p className="text-3xl font-black text-white">51.000</p>
                  </div>
                  <div className="border-b border-white/10 pb-4 flex justify-between items-end">
                    <div>
                      <p className="text-white/60 font-bold uppercase text-sm mb-1">Perfil da Audiência</p>
                      <p className="text-3xl font-black text-white">90,4% Masculino</p>
                    </div>
                    <p className="text-orange-400 font-bold text-sm bg-orange-500/10 px-3 py-1 rounded-full">35-44 anos (Foco B2B)</p>
                  </div>
                  <div className="pb-2">
                    <p className="text-white/60 font-bold uppercase text-sm mb-1">Novos Seguidores</p>
                    <div className="flex justify-between items-end">
                      <p className="text-3xl font-black text-green-400">+457</p>
                      <p className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full">4,34% Engajamento</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Performance (Pago) */}
            <div>
              <h3 className="text-3xl font-black text-white uppercase mb-8 flex items-center gap-3">
                <ChartBar className="text-orange-500" weight="bold" /> Performance (Pago)
              </h3>
              <Card className="h-full border-orange-500/30 bg-orange-500/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />
                <p className="text-white/70 font-bold text-lg mb-8 leading-relaxed relative z-10">
                  Faturamento consolidado a partir das oportunidades geradas no ano via campanhas de performance (mídia paga).
                </p>
                <div className="space-y-6 relative z-10">
                  <div className="pt-4 bg-orange-500/10 p-6 rounded-lg border border-orange-500/20 mb-6 flex justify-between items-end">
                    <div>
                      <p className="text-orange-300 font-bold uppercase text-sm mb-1">Total de Oportunidades</p>
                      <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        R$ 747.750
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-white/10 pb-4 flex justify-between items-end">
                    <div>
                      <p className="text-white/60 font-bold uppercase text-sm mb-1">B2B — Lojistas / Atacadistas</p>
                      <p className="text-3xl font-black text-white">R$ 720.000</p>
                    </div>
                    <p className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-full text-sm uppercase">Foco Principal</p>
                  </div>
                  <div className="pb-2">
                    <p className="text-white/60 font-bold uppercase text-sm mb-1">B2C — Consumidor Final</p>
                    <div className="flex justify-between items-end">
                      <p className="text-3xl font-black text-white">R$ 27.750</p>
                      <p className="text-orange-400 font-bold text-sm bg-orange-500/10 px-3 py-1 rounded-full">111 pessoas alcançadas</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
