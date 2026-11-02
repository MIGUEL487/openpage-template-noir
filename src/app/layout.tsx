import type { Metadata, Viewport } from 'next';
import { Cinzel, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import { LenisProvider } from '@/lib/lenis';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  themeColor: '#080808',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'NOIR KNIT — Experimental Knitwear Experience',
  description:
    'Catálogo escultural de tricô e moda avant-garde. Silhuetas de peso monumental, lã merino crua, alpaca selvagem e teares mecânicos de 1952. Consulta sob medida via WhatsApp.',
  keywords: [
    'moda experimental',
    'tricô artesanal',
    'knitwear avant-garde',
    'lã merino',
    'alpaca',
    'openpage template',
    'haute craft',
    'suéter escultural',
  ],
  authors: [{ name: 'NOIR KNIT · OpenPage Fashion Lab' }],
  openGraph: {
    title: 'NOIR KNIT — Experimental Knitwear Experience',
    description:
      'Catálogo escultural de tricô e moda avant-garde. Silhuetas de peso monumental e consulta consultiva via WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'NOIR KNIT',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${spaceGrotesk.variable} ${spaceMono.variable} dark`}
    >
      <body className="min-h-screen bg-noir-950 text-noir-100 font-sans antialiased selection:bg-noir-carmine selection:text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
