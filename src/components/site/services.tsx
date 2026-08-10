import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { ChevronLeft, ChevronRight, Monitor, Megaphone, TrendingUp, ShieldCheck, Code2 } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const serviceIndexes = [1, 2, 3, 4, 5];

const icons = {
  1: Monitor,
  2: Megaphone,
  3: TrendingUp,
  4: ShieldCheck,
  5: Code2,
} as const;

function ServiceCard({ num, idx }: { num: number; idx: number }) {
  const { t } = useTranslation();
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 }, true);
  const Icon = icons[num as keyof typeof icons] || Monitor;

  // Interaction states
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [btnHovered, setBtnHovered] = useState(false);

  // Stagger animation based on index
  const delay = idx * 100;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation of ~8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleBtnMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setBtnHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    // Magnetic pull towards center of button
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3; // subtle 30% pull
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setBtnPos({ x, y });
  };

  const handleBtnLeave = () => {
    setBtnHovered(false);
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "group relative flex shrink-0 flex-col",
        "w-[85vw] sm:w-[50vw] lg:w-[26rem] min-h-[50vh] snap-center select-none",
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Glow border on hover */}
      <div className="absolute inset-0 -z-10 scale-[1.02] rounded-[26px] bg-gradient-to-br from-primary/30 to-primary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden pointer-events-none" />

      {/* Tilt container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className={cn(
          "relative flex h-full flex-col justify-between rounded-[24px] border border-primary/10 bg-background p-6 sm:p-8 lg:p-10 shadow-soft hover:shadow-xl",
          !isHovered && "transition-transform duration-300 ease-out hover:-translate-y-1",
          "motion-reduce:transform-none"
        )}
      >
        {/* Shimmer sweep container */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[24px] pointer-events-none">
          <div 
            className="absolute top-0 bottom-0 left-0 w-3/4 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-60 animate-shimmer-sweep motion-reduce:animate-none"
            style={{ animationDelay: `${idx * 1.2}s` }}
          />
        </div>

        {/* Number */}
        <div
          style={{ transitionDelay: `${delay + 150}ms` }}
          className={cn(
            "absolute top-6 right-6 font-sans text-4xl font-bold tracking-tighter text-primary sm:top-8 sm:right-8 sm:text-5xl rtl:right-auto rtl:left-6 sm:rtl:left-8 z-10 pointer-events-none",
            "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
            isInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
          )}
        >
          <span 
            className="animate-number-pulse block motion-reduce:animate-none opacity-15"
            style={{ animationDelay: `${idx * 0.5}s` }}
          >
            0{idx + 1}
          </span>
        </div>

        {/* Content */}
        <div className="mt-12 sm:mt-16 flex h-full flex-col justify-center z-10 pointer-events-none sm:pointer-events-auto">
          <div 
            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary shadow-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 motion-reduce:transform-none animate-icon-float motion-reduce:animate-none pointer-events-auto"
            style={{ animationDelay: `${idx * 0.4}s` }}
          >
            <Icon size={24} />
          </div>
          <h3 className="mb-4 font-sans text-2xl font-black tracking-tighter text-primary uppercase sm:text-3xl lg:text-4xl pointer-events-auto">
            {t(`services.items.${num}.title`)}
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed pointer-events-auto">
            {t(`services.items.${num}.desc`)}
          </p>
          <div className="mt-auto pt-4 pointer-events-none sm:pointer-events-auto">
            {/* Magnetic Button */}
            <a
              href="#contact"
              onMouseMove={handleBtnMove}
              onMouseLeave={handleBtnLeave}
              style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
              className={cn(
                "inline-flex w-full items-center justify-center rounded-full border-2 border-primary bg-transparent px-6 py-3 text-xs font-bold tracking-widest text-primary uppercase shadow-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none pointer-events-auto motion-reduce:transform-none",
                !btnHovered && "transition-transform ease-out"
              )}
              onClick={(e) => {
                // Drag state is handled in parent; link is prevented from triggering if dragging
              }}
            >
              {t("services.cta")}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isInView: sectionInView } = useInView<HTMLElement>({ threshold: 0.2 }, true);

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const checkScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    setCanScrollLeft(Math.ceil(scrollLeft) > 0);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);

    const cardWidth = scrollWidth / serviceIndexes.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), serviceIndexes.length - 1));
  }, []);

  useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, [checkScrollState]);

  useEffect(() => {
    if (!sectionInView) return;
    
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const timer1 = setTimeout(() => {
      if (carouselRef.current && carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollBy({ left: 80, behavior: "smooth" });
      }
    }, 3000);

    const timer2 = setTimeout(() => {
      if (carouselRef.current && carouselRef.current.scrollLeft <= 85) {
        carouselRef.current.scrollBy({ left: -80, behavior: "smooth" });
      }
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [sectionInView]);

  const scrollByAmount = (direction: 1 | -1) => {
    if (!carouselRef.current) return;
    const clientWidth = carouselRef.current.clientWidth;
    const cardWidth = clientWidth >= 1024 ? 416 : clientWidth * 0.85; 
    carouselRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  const scrollToDot = (index: number) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[index] as HTMLElement;
    if (card) {
      const offset = card.offsetLeft - (carouselRef.current.clientWidth - card.clientWidth) / 2;
      carouselRef.current.scrollTo({ left: offset, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStart.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    carouselRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section id="services" ref={sectionRef} className="relative flex min-h-screen flex-col bg-surface text-foreground py-24 lg:py-32 overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-[10%] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px] opacity-60 animate-float pointer-events-none motion-reduce:animate-none" />
      <div className="absolute bottom-20 right-[5%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] opacity-60 animate-float pointer-events-none motion-reduce:animate-none" style={{ animationDelay: '2s', animationDuration: '25s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px] opacity-50 animate-float pointer-events-none motion-reduce:animate-none" style={{ animationDelay: '5s', animationDuration: '30s' }} />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center px-4 sm:px-8 mb-10 sm:mb-16 z-10">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
          {t("services.section_title")}
        </h2>
        
        {/* Animated Title Underline */}
        <div 
          className={cn(
            "mt-6 h-[4px] w-[80px] rounded-full bg-primary origin-center transition-transform duration-700 ease-out delay-150 motion-reduce:scale-x-100 motion-reduce:transition-none",
            sectionInView ? "scale-x-100" : "scale-x-0"
          )}
        />
      </div>

      {/* Horizontal Scroll Snap Carousel */}
      <div className="relative w-full group z-10">
        
        {/* Left Fade Gradient */}
        <div 
          className={cn(
            "absolute left-0 top-0 bottom-12 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none transition-opacity duration-500",
            canScrollLeft ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Right Fade Gradient */}
        <div 
          className={cn(
            "absolute right-0 top-0 bottom-12 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none transition-opacity duration-500",
            canScrollRight ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Left Arrow (Desktop only) */}
        <button
          onClick={() => scrollByAmount(-1)}
          aria-label="Previous services"
          className={cn(
            "hidden sm:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-background/90 text-primary shadow-elevated backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-background disabled:pointer-events-none disabled:opacity-0",
            !canScrollLeft && "opacity-0 pointer-events-none"
          )}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow (Desktop only) */}
        <button
          onClick={() => scrollByAmount(1)}
          aria-label="Next services"
          className={cn(
            "hidden sm:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-background/90 text-primary shadow-elevated backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-background disabled:pointer-events-none disabled:opacity-0",
            !canScrollRight && "opacity-0 pointer-events-none"
          )}
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={carouselRef}
          onScroll={checkScrollState}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={cn(
            "flex flex-row gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 sm:px-8 max-w-7xl mx-auto scrollbar-hide",
            isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
          )}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {serviceIndexes.map((num, idx) => (
            <ServiceCard key={num} num={num} idx={idx} />
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-4">
          {serviceIndexes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === idx 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-primary/20 hover:bg-primary/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="relative mx-auto mt-14 w-11/12 max-w-4xl h-[2px] overflow-hidden rounded-full bg-primary/5 z-10">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-80 animate-line-sweep motion-reduce:hidden" />
        <div className="absolute inset-0 bg-primary/20 hidden motion-reduce:block" />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-icon-float {
          animation: icon-float 3.5s ease-in-out infinite;
        }
        @keyframes number-pulse {
          0%, 100% { opacity: 0.10; }
          50% { opacity: 0.25; }
        }
        .animate-number-pulse {
          animation: number-pulse 4s ease-in-out infinite;
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          25%, 100% { transform: translateX(250%) skewX(-20deg); }
        }
        .animate-shimmer-sweep {
          animation: shimmer-sweep 7s ease-in-out infinite;
        }
        @keyframes line-sweep {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(300%); }
        }
        .animate-line-sweep {
          animation: line-sweep 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
