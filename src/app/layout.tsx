import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { TopHeader } from '@/components/layout/TopHeader';

export const metadata: Metadata = {
  title: 'B-right | L’Excellence du Bien-être',
  description: 'Plateforme exclusive de transformation globale : fitness, beauté, coaching et nutrition de prestige.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground selection:bg-primary/30">
        <TopHeader />
        <div className="pt-20 pb-28 md:pt-24 md:pb-0">
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}