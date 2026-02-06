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
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative pl-4 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-6 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-white/10 rounded-full"></div>

        <div className="flex flex-col gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-12 md:pl-20 group">
              {/* Number Bubble */}
              <div className="absolute left-0 md:left-2 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-[#101922] border-4 border-gray-50 dark:border-[#101922] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300">
                <div className="h-full w-full rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/30">
                  {index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}