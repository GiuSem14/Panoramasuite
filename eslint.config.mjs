import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Le foto passano da components/Photo.tsx (<picture> webp + jpg già
      // ottimizzati da scripts/convert-images.mjs), non da next/image.
      '@next/next/no-img-element': 'off',
    },
  },
  {ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'scripts/**']},
];

export default eslintConfig;
