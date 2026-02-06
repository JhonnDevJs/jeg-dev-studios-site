interface AnatomyItemProps {
  number: string;
  title: string;
  description: string;
}

export default function AnatomyItem({ number, title, description }: AnatomyItemProps) {
  return (
    <div className="relative pl-8 py-2 group">
      {/* Línea vertical decorativa */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 group-hover:bg-blue-600 transition-colors duration-300 rounded-full"></div>

      {/* Número grande como marca de agua */}
      <span className="absolute -top-5 left-4 text-8xl font-black text-gray-100 dark:text-white/5 select-none pointer-events-none transition-colors duration-300 group-hover:text-blue-50 dark:group-hover:text-blue-900/20 z-0">
        {number}
      </span>

      <div className="relative z-10 pt-2">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}