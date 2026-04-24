import { useEffect } from 'react';

function SEO({ title, description, image }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr, name, content) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    if (image) setMeta('property', 'og:image', image);
  }, [title, description, image]);

  return null;
}

export default SEO;
