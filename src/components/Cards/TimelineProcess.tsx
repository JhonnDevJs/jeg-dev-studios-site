import { ReactNode } from "react";

interface TimelineStep {
  title: string;
  description: string | ReactNode;
}

interface TimelineProcessProps {
  steps: TimelineStep[];
}

export default function TimelineProcess({ steps }: TimelineProcessProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative pl-8 md:pl-12">
        {/* Continuous Gradient Line */}
        <div className="absolute left-[11px] md:left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-600 via-purple-500 to-transparent opacity-20 dark:opacity-40 rounded-full"></div>

        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Dot Marker */}
              <div className="absolute -left-[29px] md:-left-[41px] top-8 w-6 h-6 rounded-full border-4 border-white dark:border-background-dark bg-gray-200 dark:bg-white/20 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300 z-10 shadow-sm"></div>

              {/* Card */}
              <div className="relative p-6 md:p-8 bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm dark:shadow-none hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 overflow-hidden">
                {/* Number Watermark */}
                <span className="absolute -top-4 -right-2 text-8xl font-black text-gray-50 dark:text-white/5 select-none -z-0 group-hover:text-blue-50/50 dark:group-hover:text-blue-900/10 transition-colors duration-500">
                  {index + 1}
                </span>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
