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
    badge: 'Protótipo Principal',
    gauge: 'Gauge 01 · 1.45 kg',
    composition: '75% Lã Merino Crua 19.5μm, 25% Alpaca Negra Escovada',
    price: 1890,
    category: 'sueteres',
    categoryLabel: 'Suéteres',
    weight: '1.45 kg de fibra compactada',
    colors: [
      { id: 'grafite', name: 'Grafite Mineral', hex: '#1C1C1E' },
      { id: 'carmim', name: 'Sangue Oxidado', hex: '#631417' },
      { id: 'marfim', name: 'Osso Cru', hex: '#DCD6CD' },
    ],
    sizes: ['Tamanho 1 (P/M)', 'Tamanho 2 (G/GG)', 'Sob Medida'],
    description:
      'A peça de entrada na iconografia NOIR. Silhueta de proporção oversized calculada para criar um drapeado arquitetônico sobre os ombros caídos, gola alta canelada de 16 cm que sustenta sua própria geometria e ponto jacquard de torção invertida.',
    technicalDetails: [
      'Gola alta dobrável com elasticidade mecânica sem adição de elastano',
      'Costura zero nos ombros via técnica tubular sem emenda',
      'Punhos canelados estendidos de 12 cm com abertura sutil para polegar',
      'Fibras termorreguladoras não submetidas a alvejamento químico',
    ],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'noir-02',
    slug: 'cardigan-tensao-mineral-gauge-03',
    name: 'Cardigan Tensão Mineral',
    badge: 'Edição Limitada',
    gauge: 'Gauge 03 · 1.10 kg',
    composition: '100% Lã Shetland Selvagem com Fiação Rústica',
    price: 2150,
    category: 'cardigans',
    categoryLabel: 'Cardigans',
    weight: '1.10 kg de fiação dupla',
    colors: [
      { id: 'carvao', name: 'Carvão Vulcânico', hex: '#141414' },
      { id: 'grafite-claro', name: 'Basalto Quebrado', hex: '#323234' },
    ],
    sizes: ['Tamanho 1 (P/M)', 'Tamanho 2 (G/GG)'],
    description:
      'Uma exploração da gravidade e assimetria. Frente estruturada com fechamento através de três botões de osso bovino fosco reaproveitado e aberturas laterais que liberam o movimento da barra sobre o quadril.',
    technicalDetails: [
      '3 botões orgânicos moldados manualmente em osso reaproveitado',
      'Trama canelada assimétrica que reage à cinemática do caminhar',
      'Bolsos embutidos sem costura aparente forrados em malha fina',
      'Lavagem pós-tear com água da nascente para fixação da cera natural da lã',
    ],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
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
      { id: 'carmim-escuro', name: 'Sangue Oxidado', hex: '#631417' },
    ],
    sizes: ['Tamanho Único Anatômico'],
    description:
      'Escultura vestível multifuncional. Funciona como colarinho protetor imponente que repousa sobre a clavícula ou se desdobra em uma balaclava facial de precisão cirúrgica.',
    technicalDetails: [
      'Construção anatômica sem pontos de atrito facial',
      'Micro-nervuras respiráveis na zona de ventilação nasal',
      'Tratamento natural anti-pilling por vaporização de alta pressão',
      'Compacta para transporte em viagens sem perda da memória elástica',
    ],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
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
    weight: '2.10 kg de densidade extrema',
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
      'Cada unidade leva 42 horas de fiação e entrelaçamento artesanal',
    ],
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
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
      { id: 'basalto', name: 'Cinza Basalto', hex: '#232426' },
      { id: 'carmim', name: 'Sangue Oxidado', hex: '#631417' },
    ],
    sizes: ['Tamanho 1 (P/M)', 'Tamanho 2 (G/GG)'],
    description:
      'Geometria pura para sobreposição. Cavas pronunciadas permitem uso sobre camisaria oversized ou diretamente sobre a pele, com nervuras verticais que alongam a silhueta.',
    technicalDetails: [
      'Nervuras inglesas de 2.5 cm de profundidade tridimensional',
      'Lateral aberta com amarração em cordão de tricô encerado',
      'Decote em V profundo com acabamento reforçado',
      'Fio pré-encolhido que não deforma após lavagens manuais',
    ],
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'noir-06',
    slug: 'manta-editorial-la-fervida',
    name: 'Manta Editorial Lã Fervida',
    badge: 'Têxtil de Galeria',
    gauge: 'Gauge 04 · 1.60 kg',
    composition: '85% Lã Fervida Pura, 15% Lino Cru',
    price: 1450,
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    weight: '1.60 kg · 220 x 140 cm',
    colors: [
      { id: 'bicolor', name: 'Grafite & Carmim Bicolor', hex: '#1C1C1E', borderHex: '#631417' },
      { id: 'monocromo', name: 'Preto Absoluto', hex: '#080808' },
    ],
    sizes: ['Dimensão Única: 220 x 140 cm'],
    description:
      'Uma escultura têxtil tanto para o corpo quanto para o ambiente. O processo de fervura da malha condensa a trama até torná-la corta-vento, finalizada com franjas brutas desfiadas à mão.',
    technicalDetails: [
      'Tratamento térmico de feltragem controlada pós-tear',
      'Bordas laterais arrematadas com ponto crochê manual invisível',
      'Isolamento térmico superior equivalente a coberturas de expedição',
      'Acompanha cinta de transporte em couro sintético vulcanizado',
    ],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1200&q=80',
  },
];

export const PILLARS = [
  {
    num: '01',
    title: 'HEAVY GAUGE ARCHITECTURE',
    subtitle: 'O peso como elemento escultural',
    desc: 'Recusamos a malha rala e perecível da moda rápida. Nossas peças pesam entre 800g e 2.1kg, usando fios grossos de galga pesada que criam volume próprio sem necessitar de forros sintéticos.',
  },
  {
    num: '02',
    title: 'RIBBED KINETICS',
    subtitle: 'A cinemática do ponto canelado',
    desc: 'O canelado não é apenas elástico: é um vetor de tensão. Conforme o corpo se move, a trama abre micro-intervalos de sombra e luz, revelando a nuance carmim embutida no fundo da laçada.',
  },
  {
    num: '03',
    title: 'MINERAL PIGMENTATION',
    subtitle: 'Tingimento botânico e mineral',
    desc: 'Nossa cartela é restrita aos tons da geologia e da oxidação: carvão vegetal, basalto, terra de ferro e carmim de cochonilha orgânica. Cada banho de tingimento possui nuances irrepetíveis.',
  },
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'editorial-01',
    title: 'Ato I · Tensão e Gravidade',
    subtitle: 'Campanha de Inverno // Ensaio Noturno',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    caption: 'Gola Modular sobreposta ao Suéter Gauge 01 em silhueta monolítica.',
    aspect: 'portrait',
  },
  {
    id: 'editorial-02',
    title: 'Ato II · Anatomia da Lã Crua',
    subtitle: 'Laboratório de Fiação Artesanal',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1200&q=80',
    caption: 'Macro da laçada de merino virgem sob luz rasante de 45°.',
    aspect: 'square',
  },
  {
    id: 'editorial-03',
    title: 'Ato III · O Movimento Asfáltico',
    subtitle: 'Geometria Urbana Desconstruída',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cardigan Tensão Mineral em movimento na penumbra urbana.',
    aspect: 'tall',
  },
  {
    id: 'editorial-04',
    title: 'Ato IV · O Manto da Noite',
    subtitle: 'Corte Brutalista de Comprimento Total',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sobretudo Gauge Zero fotografado sob luz teatral contínua.',
    aspect: 'portrait',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'O que significa a classificação de "Gauge" nas peças?',
    answer:
      'Gauge (galga) indica a densidade e espessura das agulhas no tear. Quanto menor o número, mais pesado, robusto e tridimensional é o ponto. Nosso Gauge 01 utiliza laçadas gigantescas de até 1.5cm de espessura, conferindo presença escultural e peso substancial ao corpo.',
  },
  {
    question: 'Como funciona a confecção sob medida e encomenda?',
    answer:
      'Cada peça do catálogo NOIR é produzida sob demanda em ateliê dedicado na Serra Gaúcha, sem excedente de estoque. Ao clicar no botão de consulta via WhatsApp, nosso alfaiate de tricô orientará sobre medidas de ombro, comprimento e previsão exata de fiação (habitualmente entre 10 e 18 dias úteis).',
  },
  {
    question: 'Quais os cuidados necessários para a manutenção da lã nobre?',
    answer:
      'A lã merino e a alpaca crua repelem odores e poeira naturalmente devido à lanolina natural da fibra. Não recomendamos lavagens frequentes. Basta arejar a peça na sombra em superfície horizontal. Quando necessário, realizar lavagem manual a frio com sabão neutro vegetal, sem torcer.',
  },
  {
    question: 'Este site processa pagamentos ou cartões?',
    answer:
      'Não. A NOIR KNIT é uma experiência de catálogo demonstrativo desenvolvida pela OpenPage. Todos os preços, códigos e produtos são demonstrativos para exibição de design vanguardista. As interações de compra direcionam para o canal oficial de atendimento consultivo via WhatsApp.',
  },
];

export const BRAND_CONTACT = {
  brandName: 'NOIR KNIT',
  concept: 'Experimental Knitwear Experience',
  atelierLocation: 'Ateliê Experimental · Serra Gaúcha & São Paulo',
  whatsappNumber: '5511999999999',
  whatsappDisplay: '+55 (11) 99999-9999',
  curator: 'OpenPage Fashion Lab',
};
