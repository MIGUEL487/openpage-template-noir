# NOIR KNIT — Experimental Knitwear Experience
### OpenPage · Template B · Malharia & Tricô de Alta-Costura

> **Experiência cinematográfica de moda autoral, catálogo escultural e canal direto via WhatsApp.**
> Desenvolvido com **Next.js 15**, **Three.js PBR**, **GSAP 3 + ScrollTrigger**, **Lenis** e arquitetura **Double-Bezel (Hardware Aesthetics)**.

---

## 1. Visão Geral & Conceito Artístico

O **NOIR KNIT** é o segundo template demonstrativo da suíte **OpenPage**, concebido especificamente para malharias finas, marcas de tricô artesanal e estúdios de moda experimental que buscam uma presença digital de impacto museológico e cinematográfico.

Diferente de templates convencionais de e-commerce carregados de botões de compra rápida e layouts repetitivos, o NOIR adota o conceito **"Beyond the Thread"** (Além do Fio):
- **O tricô como arquitetura:** O vestuário é tratado como escultura viva de peso, gravidade e volume, utilizando galgas pesadas (*Heavy Gauge 01*) de até 1.45kg a 2.1kg de lã crua merino e alpaca escovada.
- **Paleta de pigmentação geológica:** Preto Profundo (`#080808`), Grafite Basáltico (`#161616`), Branco Quente Osso (`#F0EDE8`) e acentos dramáticos de Sangue Oxidado / Carmim (`#9B2428`).
- **Comercial sem atrito:** Não há checkout, cartões ou cadastros complexos. O fluxo de interesse culmina em um modal consultivo com mensagem pré-formatada para atendimento exclusivo via **WhatsApp**.

---

## 2. Destaques Técnicos & Inovações

### A. The Floating Garment (Three.js WebGL Real)
- **Peça tridimensional autêntica:** Um suéter oversized de tricô com gola alta canelada de 16cm, mangas raglan curvadas e relevos de tranças frontais, modelado proceduralmente em Three.js.
- **Material Têxtil PBR:** `MeshPhysicalMaterial` com propriedades de veludo e penugem (*sheen: 1.0*, *sheenRoughness: 0.42*), acompanhado de **mapas procedurais de relevo, normais e oclusão de ambiente (AO)** gerados matematicamente em Canvas HTML5 para simular laçadas reais de tricô.
- **Iluminação Teatral de 3 Pontos:** Key light quente a 45°, luz de preenchimento suave e uma luz de recorte (*rim light*) carmim intensa posicionada na traseira que ressalta os contornos do fio.
- **Controles Interativos:** Seleção de tonalidade em tempo real (Grafite Mineral, Sangue Oxidado, Osso Cru), alternância entre modo sólido têxtil e modo poligonal (*wireframe*) e presets de câmera (Silhueta Total, Gola Alta, Perfil Lateral, Macro da Trama).

### B. Coreografia GSAP ScrollTrigger + Lenis
- **Sincronização Absoluta:** O motor de rolagem suave **Lenis** opera diretamente atrelado ao ticker central do **GSAP** (`gsap.ticker.add((time) => lenis.raf(time * 1000))`) com `lagSmoothing(0)` para eliminar qualquer stutter ou conflito de animação.
- **Cinemática de Câmera e Objeto:**
  1. *Hero:* Peça paira no centro com flutuação gravitacional sutil e rotação contínua.
  2. *Manifesto:* Ao rolar, a peça translada lateralmente e inclina seu eixo de visão.
  3. *Seção 3D:* Transição fluida de 360° destacando detalhes construtivos e gola.
  4. *Catálogo:* Peça sobe suavemente pelo topo do quadro abrindo espaço para a grade de produtos.
- **Acessibilidade:** Suporte completo à diretriz `prefers-reduced-motion`, pausando giros e mantendo enquadramentos fixos estáticos.

### C. Catálogo Interativo + WhatsApp
- Grade de produtos com seletores de tonalidade e tamanho (Tamanho 1, Tamanho 2, Sob Medida).
- Valores e códigos demonstrativos claramente identificados.
- Modal inteligente que formata a mensagem com nome da peça, galga, cor selecionada, tamanho e estimativa de referência.
- Opções para copiar a mensagem com 1 clique ou abrir diretamente o aplicativo oficial do WhatsApp.

---

## 3. Skills e Diretrizes de Design Aplicadas

- **`frontend-design` & `design-taste-frontend`:** Recusa a padrões genéricos de IA, títulos centralizados previsíveis e ornamentos falsos; aplicação de contrastes tipográficos severos e conteúdo 100% autoral em pt-BR.
- **`high-end-visual-design`:** Arquitetura de hardware *Double-Bezel* (Doppelrand com casca externa e núcleo interno), botões de ilha com ícone aninhado em pílula, macro-espaçamento de respiro (`py-28` a `py-36`) e micro-interações táteis.
- **`apple-design` (HIG):** Áreas de toque generosas (mínimo 44x44pt), foco visível para navegação por teclado (`:focus-visible`), contraste estrito de legibilidade e drawer mobile fluido.
- **`minimalist-ui`:** Padrões sóbrios de dados técnicos, ausência de sombras difusas pesadas de Tailwind genérico e acabamento refinado de galeria.
- **`gsap-scrolltrigger`:** Padrões oficiais de context cleanup, scrub desacelerado e controle de memória GPU.
- **`ponytail`:** Código enxuto, direto ao ponto, sem wrappers desnecessários ou complexidade acidental.

---

## 4. Estrutura do Projeto

```
openpage-template-noir/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css                # Estilos globais, ruído analógico e scrollbar
│   │   ├── icon.svg                   # Ícone monograma NOIR
│   │   ├── layout.tsx                 # Root layout com Cinzel, Space Grotesk e Lenis
│   │   └── page.tsx                   # Página mestre integrando as 10 seções
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── FloatingGarmentCanvas.tsx  # Three.js WebGL viewport e animação PBR
│   │   │   └── KnitTextureGenerator.ts    # Gerador procedural de texturas de tricô
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx            # Hero cinematográfico tela cheia
│   │   │   ├── ManifestoSection.tsx       # Manifesto antimanual do fio
│   │   │   ├── FloatingGarmentSection.tsx # Seção 3D imersiva e controles de câmera
│   │   │   ├── PillarsSection.tsx         # 3 leis da fiação (Heavy Gauge, Ribbed, etc.)
│   │   │   ├── LookbookSection.tsx        # Galeria editorial com efeito parallax
│   │   │   ├── CatalogSection.tsx         # Catálogo interativo com seletores de cor/tam
│   │   │   ├── BrandStorySection.tsx      # Narrativa "A Forja do Fio" (teares de 1952)
│   │   │   ├── FaqSection.tsx             # Respostas técnicas sobre galga e cuidados
│   │   │   ├── WhatsAppCtaSection.tsx     # Master CTA para o alfaiate
│   │   │   └── Footer.tsx                 # Rodapé monumental e disclaimers
│   │   └── ui/
│   │       ├── DoubleBezelCard.tsx        # Container de dupla moldura tátil
│   │       ├── Navbar.tsx                 # Ilha flutuante destacada com monograma
│   │       └── WhatsAppModal.tsx          # Modal de pré-visualização e envio WhatsApp
│   ├── data/
│   │   └── products.ts                # Dados de acervo, lookbook, FAQ e contato
│   └── lib/
│       ├── lenis.tsx                  # Provedor Lenis sincronizado ao ticker GSAP
│       └── utils.ts                   # Utilitários de classe e formatação de moeda
├── next.config.mjs                    # Exportação estática pura para Cloudflare Workers
├── tailwind.config.ts                 # Tokens de cor NOIR, tipografia e raios de borda
├── wrangler.jsonc                     # Configuração Cloudflare Workers Static Assets
└── tsconfig.json
```

---

## 5. Como Executar Localmente

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no navegador.

3. **Gerar Build de Produção Estático:**
   ```bash
   npm run build
   ```
   Os arquivos estáticos otimizados serão gerados na pasta `./out`.

---

## 6. Publicação no Cloudflare Workers

O projeto utiliza **Cloudflare Workers Static Assets** para entregar máxima performance com latência ultrabaixa em edge global:

```bash
npx wrangler deploy
```

---

## 7. Licença e Créditos

- **Identidade e Conceito:** NOIR KNIT — OpenPage Project B.
- **Fotografia Editorial:** Imagens licenciadas sob Unsplash License com curadoria de iluminação dramática.
- **Tipografia:** Google Fonts (*Cinzel* por Natanael Gama, *Space Grotesk* por Florian Karsten, *Space Mono* por Colophon Foundry).
- **Aviso Legal:** Todas as peças, nomes e valores são conceituais e demonstrativos para exibição das capacidades de design e tecnologia da OpenPage.
