import React from "react";
import { Briefcase, Award } from "lucide-react";

export const Portfolio: React.FC = () => {
  return (
    <section className="self-center flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:px-5 relative overflow-hidden">
      {/* Floating icons */}
      <Briefcase className="absolute top-0 right-[15%] w-10 h-10 text-brand-secondary/20 animate-float-slow" />
      <Award className="absolute bottom-40 left-[10%] w-12 h-12 text-brand-primary/20 animate-float" />
      <div className="text-center mb-12 max-w-4xl">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Our Portfolio
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Don't Take Our Word For It
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            See Our Work!
          </span>
        </h2>
      </div>
      <div className="bg-white flex w-full max-w-[1438px] flex-col overflow-hidden items-stretch justify-center mt-10 py-2 max-md:max-w-full">
        <div className="flex items-stretch gap-[30px] flex-wrap pl-[58px] pr-[60px] max-md:px-5">
          <div className="min-w-60 w-[645px] my-auto max-md:max-w-full">
            <div className="flex items-center gap-[30px] flex-wrap max-md:max-w-full">
              <img loading="lazy" decoding="async"
                src="/img/builder/d6edfed0c058aec1.svg"
                alt="Cumulus Labs Project"
                className="aspect-[2.72] object-contain w-[446px] self-stretch min-w-60 my-auto max-md:max-w-full"
              />
              <img loading="lazy" decoding="async"
                src="/img/builder/76f50fb62ad7511b.svg"
                alt=""
                className="aspect-[169/164] object-contain w-[169px] fill-[linear-gradient(359deg,#FFF_-95.8%,#C2D2FF_118.12%)] self-stretch shrink-0 my-auto"
              />
            </div>
            <div className="flex min-h-[282px] max-w-full w-[645px] mt-[30px] rounded-[15px]" />
          </div>
          <div className="min-w-60 capitalize flex-1 shrink basis-[0%] max-md:max-w-full">
            <article className="justify-center items-stretch flex w-full flex-col text-brand-dark flex-1 p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
              <h3 className="max-md:max-w-full">Cumulus Labs</h3>
              <p className="font-lato font-medium text-body-small max-md:text-body-mobile leading-[25px] mt-5 max-md:max-w-full">
                A memorialization platform designed to preserve our deceased loved
                ones' digital assets. We implemented video streaming, uploading,
                overhauled their database schema, and fixed numerous issues with
                their web app.
              </p>
            </article>
            <div className="flex w-full items-stretch gap-[30px] text-brand-dark text-center flex-wrap mt-[30px] max-md:max-w-full">
              <div
                className="justify-center items-stretch flex flex-col flex-1 shrink basis-[0%] p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <img loading="lazy" decoding="async"
                  src="/img/builder/244a240a78e37c24.svg"
                  alt=""
                  className="aspect-[1] object-contain w-[75px] self-center"
                />
                <div className="text-[#17164F] font-lato font-bold text-body-small max-md:text-body-mobile mt-[30px]">
                  Improved User Journey
                </div>
              </div>
              <div
                className="justify-center items-stretch flex flex-col flex-1 shrink basis-[0%] p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <img loading="lazy" decoding="async"
                  src="/img/builder/d20992cd0cbc3a8f.svg"
                  alt=""
                  className="aspect-[1] object-contain w-[75px] self-center"
                />
                <div className="text-[#17164F] font-lato font-bold text-body-small max-md:text-body-mobile mt-[30px]">
                  Seamless Video Experience
                </div>
              </div>
              <div
                className="justify-center items-stretch flex flex-col flex-1 shrink basis-[0%] p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <img loading="lazy" decoding="async"
                  src="/img/builder/443c5f31896676c9.svg"
                  alt=""
                  className="aspect-[1] object-contain w-[75px] self-center"
                />
                <div className="text-[#17164F] font-lato font-bold text-body-small max-md:text-body-mobile mt-[30px]">
                  Revamped Platform Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
