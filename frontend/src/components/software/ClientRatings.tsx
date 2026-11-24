import React from 'react';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/software/useScrollAnimation';

const ClientRatings: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const StarRating = () => (
    <div className="flex items-center gap-1 justify-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className="w-6 h-6 fill-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-secondary))]"
        />
      ))}
    </div>
  );

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="flex w-full gap-8 flex-wrap justify-center mt-[80px] px-[60px] py-8 max-md:mt-10 max-md:px-5"
    >
      <div className={`flex flex-col items-center flex-1 min-w-[240px] max-w-xs p-8 rounded-2xl bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'opacity-0 animate-fade-in' : 'opacity-0'}`}>
        <img loading="lazy" decoding="async"
          src="/img/builder/3f68b714d150f304.svg"
          alt="Client Rating Platform 1"
          className="aspect-[3.52] object-contain w-[162px] max-w-full"
        />
        <div className="mt-6">
          <StarRating />
        </div>
      </div>
      
      <div 
        className={`flex flex-col items-center flex-1 min-w-[240px] max-w-xs p-8 rounded-2xl bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'opacity-0 animate-fade-in' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <img loading="lazy" decoding="async"
          src="/img/builder/85a3fea1706d9a36.svg"
          alt="Client Rating Platform 2"
          className="aspect-[4.03] object-contain w-[242px] max-w-full"
        />
        <div className="mt-6">
          <StarRating />
        </div>
      </div>
    </section>
  );
};

export default ClientRatings;
