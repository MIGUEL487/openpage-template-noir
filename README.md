# NOIR KNIT — Experimental Fashion & Haute Knitwear
### OpenPage · Template B · Experiência de Moda Editorial & Acervo de Malharia

> **Experiência cinematográfica de moda autoral, catálogo escultural e canal direto via WhatsApp.**
> Desenvolvido com **Next.js 15**, **Three.js PBR Atmosférico**, **GSAP 3 + ScrollTrigger**, **Lenis** e arquitetura de luxo contemporâneo.

---

## 1. Visão Geral & Novo Reposicionamento Criativo

O **NOIR KNIT** é o template de moda de alta-costura e malharia experimental da suíte **OpenPage**. 

Diferente de websites com aspecto de landing page de tecnologia ou demonstrações isoladas de WebGL, o NOIR foi inteiramente reposicionado para evocar a atmosfera de casas de moda contemporâneas e editoriais de luxo (como Jacquemus, COS, Rick Owens e Bottega Veneta):

* **Direção Editorial Autêntica:** A fotografia de campanha e a tipografia monumental em display serif conduzem a experiência, conferindo peso, gravidade e silêncio.
* **3D Atmosférico de Fundo (Nova Regra Absoluta):** O Three.js não é um objeto central improvisado que compete com as roupas. Ele opera em plano de fundo com baixa opacidade (28%), simulando o drapeado ondulante de um tecido de seda/lã nobre sob luz rasante, reagindo suavemente ao scroll.
* **Comercial sem Atrito:** Sem carrinhos convencionais ou gateways impessoais. O interesse é convertido em atendimento consultivo de alfaiataria diretamente pelo **WhatsApp**, com mensagem pré-formatada.

---

## 2. Destaques Técnicos & Inovações

### A. Camada 3D Atmosférica (`AtmosphericClothCanvas.tsx`)
- **Drapeado Orgânico em Baixa Opacidade:** Malha paramétrica em `MeshPhysicalMaterial` com propriedades táteis (*sheen*, *roughness* alta e tonalidade obsidiana mineral).
- **Ondulação Têxtil em Tempo Real:** Deformação de vértices via ondas senoidais multicamada no render loop, evocando o movimento de tecidos em gravidade zero.
- **Iluminação Teatral de Recorte:** *Rim Light* traseira em Sangue Oxidado (`#9B2428`) que capta as cristas das dobras do tecido no escuro.
- **Ponto de Extensão para GLB/GLTF:** O componente conta com interface para fácil substituição por modelo 3D proprietário fornecido pelo cliente.

### B. Coreografia GSAP ScrollTrigger + Lenis
- **Sincronização com o Ticker:** Lenis sincronizado ao ticker principal do GSAP (`gsap.ticker.add((time) => lenis.raf(time * 1000))`) com `lagSmoothing(0)`, garantindo rolagem cinematográfica sem sobressaltos.
- **Storytelling de Scroll:**
  1. *Hero:* Revelação com escala suave da foto editorial e revelação de texto com máscara escalonada.
  2. *Manifesto:* Entrada staggered palavra por palavra.
  3. *Campanha Destaque:* Efeito parallax na foto monumental do Sobretudo Monolítico.
  4. *Lookbook:* Galeria assimétrica com movimento suave desacelerado.
  5. *Acervo:* Grid refinado com seletores de tonalidade e tamanho.
- **Acessibilidade:** Suporte completo à preferência `prefers-reduced-motion`.

### C. Acervo & Canal Consultivo WhatsApp
- Catálogo de peças com pesos reais de fiação (800g a 2.10kg) e galgas (*Gauge 01*, *Gauge 03*, *Gauge Zero*).
- Seletores de cor e tamanho dinâmicos em cada card.
- Modal inteligente que formata a mensagem com a peça, cor, tamanho e estimativa de referência, pronta para envio no WhatsApp.

---

## 3. Estrutura do Projeto

```
openpage-template-noir/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css                       # Estilos globais, ruído analógico e scrollbar
│   │   ├── icon.svg                          # Ícone monograma NOIR
│   │   ├── layout.tsx                        # Root layout com Cinzel, Space Grotesk e Lenis
│   │   └── page.tsx                          # Página mestra integrando a narrativa completa
│   ├── components/
│   │   ├── canvas/
│   │   │   └── AtmosphericClothCanvas.tsx    # 3D Three.js PBR atmosférico em plano de fundo
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx               # Hero cinematográfico de campanha de moda
│   │   │   ├── ManifestoSection.tsx          # Manifesto editorial do fio e da gravidade
│   │   │   ├── RunwayCampaignSection.tsx     # Campanha destaque (Sobretudo Monolítico)
│   │   │   ├── LookbookSection.tsx           # Lookbook editorial com parallax
│   │   │   ├── TextileArchitectureSection.tsx# Anatomia da matéria (19.5μm) & profundidade 3D
│   │   │   ├── CatalogSection.tsx            # Acervo completo de malhas com seletores
│   │   │   ├── PillarsSection.tsx            # Três leis da fiação (Heavy Gauge, Ribbed, etc.)
│   │   │   ├── BrandStorySection.tsx         # Narrativa "A Forja do Fio" (teares de 1952)
│   │   │   ├── FaqSection.tsx                # Diretrizes técnicas sobre galga e cuidados
│   │   │   ├── WhatsAppCtaSection.tsx        # Master CTA Concierge Privado
│   │   │   └── Footer.tsx                    # Rodapé monumental e disclaimers
│   │   └── ui/
│   │       ├── DoubleBezelCard.tsx           # Container de dupla moldura tátil
│   │       ├── Navbar.tsx                    # Ilha flutuante destacada com monograma
│   │       └── WhatsAppModal.tsx             # Modal de pré-visualização e envio WhatsApp
│   ├── data/
│   │   └── products.ts                       # Dados do acervo, lookbook, FAQ e contato
│   └── lib/
│       ├── lenis.tsx                         # Provedor Lenis sincronizado ao ticker GSAP
│       └── utils.ts                          # Utilitários de classe e formatação de moeda
├── next.config.mjs                           # Exportação estática pura para Cloudflare Workers
├── tailwind.config.ts                        # Tokens de cor NOIR, tipografia e raios de borda
├── wrangler.jsonc                            # Configuração Cloudflare Workers Static Assets
└── tsconfig.json
```

---

## 4. Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção estático
npm run build

# Publicar no Cloudflare Workers
npm run deploy:cf
```

---

## 5. Licença e Créditos

- **Identidade e Conceito:** NOIR KNIT — OpenPage Project B.
- **Fotografia Editorial:** Imagens licenciadas sob Unsplash License com curadoria de iluminação dramática.
- **Tipografia:** Google Fonts (*Cinzel* por Natanael Gama, *Space Grotesk* por Florian Karsten, *Space Mono* por Colophon Foundry).
- **Aviso Legal:** Todas as peças, nomes e valores são conceituais e demonstrativos para exibição das capacidades de design e tecnologia da OpenPage.
