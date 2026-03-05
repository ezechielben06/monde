import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'B-right | L’Excellence du Bien-être',
  description: 'Plateforme exclusive de transformation globale : fitness, beauté, coaching et nutrition de prestige.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
