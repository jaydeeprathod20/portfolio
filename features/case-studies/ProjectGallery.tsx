"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import type { CaseStudyImage } from "@/types/case-study";
import { cn } from "@/utils/cn";

interface ProjectGalleryProps {
  images: CaseStudyImage[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const masonryClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];

  const prevSlide = useCallback(() => {
    setCarouselIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCarouselIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (images.length === 0) return null;

  return (
    <PhotoProvider maskOpacity={0.92} bannerVisible={false} speed={() => 300}>
      <div className="space-y-12">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10"
          tabIndex={0}
          role="region"
          aria-label={`${title} screenshot carousel`}
        >
          <div className="relative aspect-[16/9] bg-muted/20">
            <Image
              src={images[carouselIndex]?.src ?? ""}
              alt={images[carouselIndex]?.alt ?? title}
              fill
              className="object-contain bg-black/20"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4">
              <p className="text-sm font-medium text-foreground">
                {images[carouselIndex]?.label ??
                  images[carouselIndex]?.alt ??
                  title}
              </p>
              <p className="text-xs text-muted-foreground">
                {carouselIndex + 1} of {images.length} — use arrow keys to
                navigate
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background/80 backdrop-blur-sm transition-colors hover:bg-background"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background/80 backdrop-blur-sm transition-colors hover:bg-background"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-16 left-1/2 flex max-w-full -translate-x-1/2 gap-2 overflow-x-auto px-4">
            {images.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setCarouselIndex(index)}
                className={cn(
                  "h-2 shrink-0 rounded-full transition-all",
                  carouselIndex === index
                    ? "w-6 bg-indigo-500"
                    : "w-2 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`View screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-white/10 bg-muted/10",
                masonryClasses[index % masonryClasses.length]
              )}
            >
              <PhotoView src={image.src}>
                <button
                  className="relative h-full w-full cursor-zoom-in"
                  aria-label={`Open ${image.alt} in lightbox`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <Expand className="mb-1 h-5 w-5 text-white" />
                    <span className="line-clamp-1 text-xs text-white/90">
                      {image.label}
                    </span>
                  </div>
                </button>
              </PhotoView>
            </motion.div>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
}
