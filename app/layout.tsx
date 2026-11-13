import type {ReactNode} from 'react';

// Il layout vero è app/[locale]/layout.tsx: qui si passa solo il contenuto,
// come richiede next-intl con la lingua nel percorso.
export default function RootLayout({children}: {children: ReactNode}) {
  return children;
}
