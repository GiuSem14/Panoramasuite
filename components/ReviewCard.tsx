type ReviewCardProps = {text: string; author: string; platform?: string};

export default function ReviewCard({text, author, platform}: ReviewCardProps) {
  return (
    <figure className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="flex gap-1 mb-5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>
      <blockquote className="flex-1 relative" lang="it">
        <svg className="w-8 h-8 text-gold/20 absolute -top-1 -left-1" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
        </svg>
        <p className="text-gray-600 text-sm leading-relaxed pl-5 italic">{text}</p>
      </blockquote>
      <figcaption className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center" aria-hidden="true">
            <span className="font-heading font-semibold text-forest text-sm">{author.charAt(0)}</span>
          </div>
          <span className="font-heading font-semibold text-charcoal text-sm">{author}</span>
        </div>
        {platform && <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">{platform}</span>}
      </figcaption>
    </figure>
  );
}
