import Link from 'next/link';
import './globals.css';

// 404 per indirizzi fuori da ogni lingua (rari: il proxy ne assegna una a
// quasi tutto). Le 404 normali le disegna app/[locale]/not-found.tsx.
export default function RootNotFound() {
  return (
    <html lang="it">
      <head>
        <meta name="robots" content="noindex" />
        <title>Pagina non trovata - PanoramaSuite</title>
      </head>
      <body className="bg-cream items-center justify-center text-center px-4">
        <main className="flex flex-col items-center justify-center min-h-screen">
          <p className="font-brand text-6xl text-forest mb-4">PanoramaSuite</p>
          <h1 className="font-heading text-2xl font-semibold mb-6">Pagina non trovata</h1>
          <Link href="/" className="bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full">
            Torna alla Home
          </Link>
        </main>
      </body>
    </html>
  );
}
