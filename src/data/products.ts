export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  borderHex?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  badge: string;
  gauge: string;
  composition: string;
  price: number;
  category: 'sueteres' | 'cardigans' | 'acessorios' | 'pecas-chave';
  categoryLabel: string;
  colors: ProductColor[];
  sizes: string[];
  description: string;
  technicalDetails: string[];
  image: string;
  secondaryImage: string;
  weight: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'noir-01',
    slug: 'sueter-escultural-gauge-01',
    name: 'Suéter Escultural Gola Alta',
    badge: 'Ícone da Campanha',
    gauge: 'Gauge 01 · 1.45 kg',
    composition: '75% Lã Merino Crua 19.5μm, 25% Alpaca Negra Escovada',
    price: 1890,
    category: 'sueteres',
    categoryLabel: 'Suéteres',
    weight: '1.45 kg de fiação nobre',
    colors: [
      { id: 'grafite', name: 'Grafite Mineral', hex: '#18181A' },
      { id: 'carmim', name: 'Sangue Oxidado', hex: '#5E1417' },
      { id: 'marfim', name: 'Osso Cru', hex: '#DCD6CD' },
    ],
    sizes: ['Tamanho 1 (P/M)', 'Tamanho 2 (G/GG)', 'Sob Medida'],
    description:
      'Silhueta de proporção oversized calculada para criar um drapeado arquitetônico sobre os ombros caídos, gola alta canelada de 16 cm com sustentação própria e ponto jacquard de torção invertida.',
    technicalDetails: [
      'Gola alta dobrável com elasticidade mecânica sem adição de sintéticos',
      'Construção sem costura nos ombros via técnica tubular contínua',
      'Punhos canelados de 12 cm com fenda anatômica discreta',
      'Fibras termorreguladoras preservadas em lavagem neutra',
    ],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'noir-02',
    slug: 'cardigan-tensao-mineral-gauge-03',
    name: 'Cardigan Tensão Mineral',
    badge: 'Edição de Passarela',
    gauge: 'Gauge 03 · 1.10 kg',
    composition: '100% Lã Shetland Selvagem com Fiação Rústica',
    price: 2150,
    category: 'cardigans',
    categoryLabel: 'Cardigans',
    weight: '1.10 kg de malha dupla',
    colors: [
      { id: 'carvao', name: 'Carvão Vulcânico', hex: '#111113' },
      { id: 'basalto', name: 'Basalto Quebrado', hex: '#2B2B2E' },
    ],
    sizes: ['Tamanho 1 (P/M)', 'Tamanho 2 (G/GG)'],
    description:
      'Uma exploração da gravidade e assimetria contemporânea. Frente estruturada com fechamento através de três botões de osso bovino fosco reaproveitado e aberturas laterais que liberam o movimento da barra sobre o quadril.',
    technicalDetails: [
      '3 botões orgânicos moldados manualmente em osso fosco',
      'Trama canelada assimétrica que reage à cinemática do caminhar',
      'Bolsos embutidos sem costura aparente forrados em malha fina',
      'Banho pós-tear com água mineral da serra para selagem da lanolina',
    ],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'noir-03',
    slug: 'gola-balaclava-modular',
    name: 'Gola Modular & Balaclava',
    badge: 'Acessório Tático',
    gauge: 'Gauge 05 · 380 g',
    composition: '70% Lã Merino Extra-Fina 17.5μm, 30% Seda Crua',
    price: 780,
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    weight: '380 g de malha de alta densidade',
    colors: [
      { id: 'asfalto', name: 'Preto Asfalto', hex: '#0B0B0C' },
      { id: 'carmim-escuro', name: 'Sangue Oxidado', hex: '#5E1417' },
    ],
    sizes: ['Tamanho Único Anatômico'],
    description:
      'Escultura vestível multifuncional. Opera como colarinho protetor imponente que repousa sobre a clavícula ou se desdobra em uma balaclava facial de precisão cirúrgica.',
    technicalDetails: [
      'Construção anatômica sem pontos de atrito facial',
      'Micro-nervuras respiráveis na zona de ventilação nasal',
      'Tratamento natural anti-pilling por vaporização de alta pressão',
      'Memória elástica mecânica sem aditivos sintéticos',
    ],
    image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'noir-04',
    slug: 'sobretudo-brutalista-gauge-zero',
    name: 'Sobretudo Tricotado Brutalista',
    badge: 'Haute Craft',
    gauge: 'Gauge Zero · 2.10 kg',
    composition: '90% Lã Crioula Não-Tratada, 10% Cânhamo Natural',
    price: 3420,
    category: 'pecas-chave',
    categoryLabel: 'Peças-Chave',
    weight: '2.10 kg de densidade monumental',
    colors: [
      { id: 'preto-puro', name: 'Preto Profundo', hex: '#050505' },
    ],
    sizes: ['Tamanho 1 (Intermediário)', 'Tamanho 2 (Longo)'],
    description:
      'A expressão máxima da estética brutalista em tricô. Uma peça monolítica de comprimento ao tornozelo, concebida para atuar como abrigo térmico e declaração visual inconfundível.',
    technicalDetails: [
      'Construído em tear de madeira de 1952 readaptado para tensão extra',
      'Barra bruta com acabamento selado por chama direta controlada',
      'Ombreiras internas invisíveis em feltro reciclado para sustentação do caimento',
      'Cada unidade requer 42 horas de tecelagem e arremate manual',
    ],
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'noir-05',
    slug: 'colete-estrutural-nervurado',
    name: 'Colete Estrutural Nervurado',
    badge: 'Camadas Cinéticas',
    gauge: 'Gauge 02 · 750 g',
    composition: '100% Lã Merino de Pastagem Regenerativa',
    price: 1280,
    category: 'sueteres',
    categoryLabel: 'Suéteres',
    weight: '750 g',
    colors: [
      { id: 'basalto', name: 'Cinza Basalto', hex: '#222326' },
      { id: 'carmim', name: 'Sangue Oxidado', hex: '#5E1417' },
    ],
    sizes: ['Tamanho 1 (P/M)', 'Tamanho 2 (G/GG)'],
    description:
      'Geometria pura para sobreposição. Cavas pronunciadas permitem uso sobre camisaria oversized ou diretamente sobre a pele, com nervuras verticais que alongam a silhueta.',
    technicalDetails: [
      'Nervuras inglesas de 2.5 cm de profundidade tridimensional',
      'Lateral aberta com fechamento por laço de tricô encerado',
      'Decote em V profundo com acabamento reforçado',
      'Fio pré-encolhido que não deforma após lavagens manuais',
    ],
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'noir-06',
    slug: 'manta-editorial-la-fervida',
    name: 'Manta Editorial Lã Fervida',
    badge: 'Têxtil de Galeria',
    gauge: 'Gauge 04 · 1.60 kg',
    composition: '85% Lã Fervida Pura, 15% Linho Cru',
    price: 1450,
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    weight: '1.60 kg · 220 x 140 cm',
    colors: [
      { id: 'bicolor', name: 'Grafite & Carmim Bicolor', hex: '#18181A', borderHex: '#5E1417' },
      { id: 'monocromo', name: 'Preto Absoluto', hex: '#080808' },
    ],
    sizes: ['Dimensão Única: 220 x 140 cm'],
    description:
      'Uma escultura têxtil tanto para o corpo quanto para o espaço. O processo de fervura da malha condensa a trama até torná-la corta-vento, finalizada com franjas brutas desfiadas à mão.',
    technicalDetails: [
      'Tratamento térmico de feltragem controlada pós-tear',
      'Bordas laterais arrematadas com ponto crochê manual invisível',
      'Isolamento térmico superior equivalente a coberturas de expedição',
      'Acompanha cinta de transporte em couro sintético vulcanizado',
    ],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1400&q=85',
  },
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'editorial-01',
    act: 'Ato I',
    title: 'Tensão e Gravidade',
    subtitle: 'Campanha de Inverno · Ensaio Noturno',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85',
    caption: 'Gola Modular sobreposta ao Suéter Gauge 01 em silhueta monolítica.',
    look: 'Look 01 · Suéter Gola Alta + Balaclava Modular',
    aspect: 'portrait',
  },
  {
    id: 'editorial-02',
    act: 'Ato II',
    title: 'Anatomia da Lã Crua',
    subtitle: 'Laboratório de Fiação Artesanal',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1400&q=85',
    caption: 'Macro da laçada de merino virgem sob luz rasante de 45°.',
    look: 'Detalhe · Trama Canelada Inglesa de 1.45kg',
    aspect: 'square',
  },
  {
    id: 'editorial-03',
    act: 'Ato III',
    title: 'Cinemática Urbana',
    subtitle: 'Movimento e Desconstrução',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85',
    caption: 'Cardigan Tensão Mineral em movimento na penumbra urbana.',
    look: 'Look 03 · Cardigan Basalto + Calça Reta em Lã',
    aspect: 'tall',
  },
  {
    id: 'editorial-04',
    act: 'Ato IV',
    title: 'O Manto Brutalista',
    subtitle: 'Silhueta de Comprimento Total',
    image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1400&q=85',
    caption: 'Sobretudo Gauge Zero fotografado sob luz teatral contínua.',
    look: 'Look 04 · Sobretudo Monolítico em Lã Crioula',
    aspect: 'portrait',
  },
];

export const PILLARS = [
  {
    num: '01',
    title: 'HEAVY GAUGE ARCHITECTURE',
    subtitle: 'O peso como elemento escultural',
    desc: 'Recusamos a malha rala e perecível da moda rápida. Nossas peças pesam entre 800g e 2.1kg, utilizando fios grossos de galga pesada que criam volume arquitetônico próprio sem necessitar de forros sintéticos.',
  },
  {
    num: '02',
    title: 'RIBBED KINETICS',
    subtitle: 'A cinemática do ponto canelado',
    desc: 'O canelado não é apenas elástico: é um vetor de tensão corporal. Conforme a silhueta se move, a trama abre micro-intervalos de sombra e luz, revelando a densidade embutida no fundo da laçada.',
  },
  {
    num: '03',
    title: 'MINERAL PIGMENTATION',
    subtitle: 'Tingimento botânico e mineral',
    desc: 'Nossa cartela é restrita aos tons da geologia e da oxidação: carvão vegetal, basalto, terra de ferro e carmim de cochonilha orgânica. Cada banho de tingimento possui nuances irrepetíveis.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'O que significa a classificação de "Gauge" nas peças?',
    answer:
      'Gauge (galga) indica a densidade e espessura das agulhas no tear. Quanto menor o número, mais pesado, robusto e tridimensional é o ponto. Nosso Gauge 01 utiliza laçadas de até 1.5cm de espessura, conferindo presença escultural e peso substancial ao corpo.',
  },
  {
    question: 'Como funciona a confecção sob medida e encomenda?',
    answer:
      'Cada peça do acervo NOIR é produzida sob demanda em ateliê dedicado na Serra Gaúcha, sem excedente de estoque. Ao acionar o canal direto via WhatsApp, nosso alfaiate orientará sobre medidas de ombro, comprimento e previsão exata de fiação (habitualmente entre 10 e 18 dias úteis).',
  },
  {
    question: 'Quais os cuidados necessários para a manutenção da lã nobre?',
    answer:
      'A lã merino e a alpaca crua repelem odores e poeira naturalmente devido à lanolina presente na fibra. Não recomendamos lavagens frequentes. Basta arejar a peça na sombra em superfície horizontal. Quando necessário, realizar lavagem manual a frio com sabão neutro vegetal, sem torcer.',
  },
  {
    question: 'Este site processa pagamentos ou cartões?',
    answer:
      'Não. A NOIR KNIT é uma experiência de catálogo demonstrativo desenvolvida pela OpenPage. Todos os preços, códigos e produtos são demonstrativos para exibição de design vanguardista. As interações de compra direcionam para o canal oficial de atendimento consultivo via WhatsApp.',
  },
];

export const BRAND_CONTACT = {
  brandName: 'NOIR KNIT',
  concept: 'Experimental Fashion & Haute Knitwear',
  atelierLocation: 'Ateliê Experimental · Serra Gaúcha & São Paulo',
  whatsappNumber: '5511999999999',
  whatsappDisplay: '+55 (11) 99999-9999',
  curator: 'OpenPage Fashion Lab',
};
