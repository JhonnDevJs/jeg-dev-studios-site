interface CardInfoProps {
  title: string;
  description: string;
}

export default function CardInfo({ title, description }: CardInfoProps) {
  return (
    <div className="p-6 h-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors">
      <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}