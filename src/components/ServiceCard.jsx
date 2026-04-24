function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-5">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default ServiceCard;
