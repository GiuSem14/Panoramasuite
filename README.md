Panorama Suite

Multilingual website for a guesthouse in Piazza Armerina (Sicily, Italy). Built and deployed for a real client, live at panoramasuite.it.

Stack

React 19 · Vite · Tailwind CSS 4 · React Router · i18next · deployed on Vercel

What it does
Five languages — Italian, English, French, German and Spanish, handled with i18next and automatic browser-language detection. The guesthouse takes international bookings, so the site had to speak to visitors in their own language from the first page.
Room and suite pages — dedicated pages per room type, with photo galleries.
Image optimisation — a dedicated OptimizedImage component and a build-time image pipeline (sharp), because the content is photography-heavy and the audience is often on mobile data.
Dynamic SEO — a SEO component sets title, description and Open Graph tags per page.
Direct contact — floating WhatsApp button, the channel guests actually use.
Structure
src/pages/        Home, Suites, room detail pages, Gallery, Services, Contacts, Privacy
src/components/   Navbar, Footer, cards, gallery, SEO, optimised image, WhatsApp button
src/i18n/         i18next setup and locale files (it, en, fr, de, es)
scripts/          image processing
Running locally
bash
npm install
npm run dev
