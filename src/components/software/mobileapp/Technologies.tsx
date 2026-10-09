import React from "react";

interface TechItemProps {
  icon: string;
  name: string;
  className?: string;
}

const TechItem: React.FC<TechItemProps> = ({ icon, name, className = "" }) => {
  return (
    <div
      className={`border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all ${className}`}
    >
      <img loading="lazy" decoding="async"
        src={icon}
        alt={name}
        className="aspect-[1] object-contain w-[50px] h-[50px]"
      />
      <div className="mt-2 text-sm font-lato font-medium text-center max-md:text-[12px]">
        {name}
      </div>
    </div>
  );
};

const Technologies: React.FC = () => {
  return (
    <section className="self-center flex w-full flex-col items-stretch justify-center mt-[60px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5 animate-fade-in-up">
      <header className="flex w-full flex-col items-stretch text-center max-md:max-w-full mb-8">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4 self-center">
          Technologies
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Technologies
          </span> We Use
        </h2>
        <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto mt-4">
          Our team works with industry-leading technologies to build secure,
          scalable, and even artificial-intelligence based solutions.
        </p>
      </header>

      <div className="w-full mt-[30px] max-md:max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-md:max-w-full">
          {/* Frontend */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-1">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img loading="lazy" decoding="async"
                src="/img/builder/615f04f208eec05f.svg"
                alt="Frontend"
                className="aspect-[1] object-contain w-[35px] h-[35px]"
              />
              <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
                Frontend
              </h4>
            </header>
            <div className="grid grid-cols-2 gap-3">
              <TechItem
                icon="/img/builder/e52dd9e5f39c1b79.svg"
                name="React Native"
              />
              <TechItem
                icon="/img/builder/38d6d808b13492ec.svg"
                name="Flutter"
              />
              <TechItem
                icon="/img/builder/f62e2dbbebda7d18.svg"
                name="Kotlin"
              />
              <TechItem
                icon="/img/builder/c07398f8503e63b6.svg"
                name="WordPress"
              />
            </div>
          </article>

          {/* Backend */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-2">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img loading="lazy" decoding="async"
                src="/img/builder/aca253e55c776e1e.svg"
                alt="Backend"
                className="aspect-[1] object-contain w-[35px] h-[35px]"
              />
              <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
                Backend
              </h4>
            </header>
            <div className="grid grid-cols-2 gap-3">
              <TechItem
                icon="/img/builder/c2aee169e20282d4.svg"
                name="Python"
              />
              <TechItem
                icon="/img/builder/6beafc11781de7d9.svg"
                name="Laravel"
              />
              <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
                <img loading="lazy" decoding="async"
                  src="/img/builder/946a616704920167.svg"
                  alt="MySQL"
                  className="aspect-[1.5] object-contain w-[45px] h-[30px]"
                />
                <div className="mt-2 text-sm font-lato font-medium text-center">
                  MySQL
                </div>
              </div>
              <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
                <img loading="lazy" decoding="async"
                  src="/img/builder/ce2ec99322759ef3.svg"
                  alt="Oracle"
                  className="aspect-[7.69] object-contain w-[100px] h-[13px] max-w-full"
                />
                <div className="mt-2 text-sm font-lato font-medium text-center">
                  Oracle
                </div>
              </div>
            </div>
          </article>

          {/* Cloud & DevOps */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-3">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img loading="lazy" decoding="async"
                src="/img/builder/d4ae07d25f7d58f0.svg"
                alt="Cloud & DevOps"
                className="aspect-[1] object-contain w-[35px] h-[35px]"
              />
              <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
                Cloud & DevOps
              </h4>
            </header>
            <div className="grid grid-cols-2 gap-3">
              <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
                <img loading="lazy" decoding="async"
                  src="/img/builder/590c6affa26be95f.svg"
                  alt="AWS"
                  className="aspect-[1.67] object-contain w-[50px] h-[30px]"
                />
                <div className="mt-2 text-sm font-lato font-medium text-center">
                  AWS
                </div>
              </div>
              <TechItem
                icon="/img/builder/76be5fff17b6c659.svg"
                name="Firebase"
              />
              <TechItem
                icon="/img/builder/bea556f935460be2.svg"
                name="Supabase"
              />
              <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
                <img loading="lazy" decoding="async"
                  src="/img/builder/ce8b8b4e5520ddbb.svg"
                  alt="Oracle Cloud"
                  className="aspect-[7.69] object-contain w-[100px] h-[13px] max-w-full"
                />
                <div className="mt-2 text-sm font-lato font-medium text-center">
                  Oracle Cloud
                </div>
              </div>
            </div>
          </article>

          {/* AI/ML */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-4">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img loading="lazy" decoding="async"
                src="/img/builder/5c6333a269809764.svg"
                alt="AI/ML"
                className="aspect-[1] object-contain w-[35px] h-[35px]"
              />
              <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
                AI / ML
              </h4>
            </header>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <TechItem
                  icon="/img/builder/7c44b81428509420.svg"
                  name="Python"
                />
                <TechItem
                  icon="/img/builder/9a0ebe9512a17f4d.svg"
                  name="TensorFlow"
                />
              </div>
              <TechItem
                icon="/img/builder/3a3f8b6c621a1f15.svg"
                name="OpenAI"
                className="w-full"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
