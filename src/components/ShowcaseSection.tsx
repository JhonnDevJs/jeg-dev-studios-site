import Image, { StaticImageData } from "next/image";

interface ShowcaseSectionProps {
  imageSrc: string | StaticImageData;
  alt: string;
  badgeText?: string;
  badgeColor?: string;
  title: string;
}

export default function ShowcaseSection({
  imageSrc,
  alt,
  badgeText = "Showcase",
  badgeColor = "bg-blue-600",
  title,
}: ShowcaseSectionProps) {
  return (
    <section className="w-full py-12 md:py-20 px-4 flex justify-center">
      <div className="container mx-auto max-w-6xl">
        <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <span
              className={`px-3 py-1 text-xs font-bold tracking-wider text-white uppercase ${badgeColor} rounded-full mb-2 inline-block`}
            >
              {badgeText}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}