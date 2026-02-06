interface CardAnatomyProps {
  number: string;
  title: string;
  description: string;
}

export default function CardAnatomy({ number, title, description }: CardAnatomyProps) {
  return (
    <div className="relative p-8 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-lg dark:shadow-none overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
      {/* Background Gradient Blob */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white text-xl font-bold shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
            {number}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-1">
          {description}
        </p>
      </div>
    </div>
  );
}