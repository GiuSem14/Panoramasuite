import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Tutto tranne file statici, API e cartelle interne di Next/Vercel.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
