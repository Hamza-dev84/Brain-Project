import React from "react";
import { Database, Lock, Cloud } from "lucide-react";

export const Technologies: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch capitalize mt-[80px] px-[60px] py-16 max-md:px-5 relative overflow-hidden">
      {/* Floating decorative icons */}
      <Database className="absolute top-10 right-[15%] w-10 h-10 text-brand-secondary/15 animate-float" />
      <Lock className="absolute bottom-20 left-[10%] w-12 h-12 text-brand-primary/15 animate-float-slow" />
      <Cloud className="absolute top-32 left-[20%] w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />
      <h2 className="text-brand-dark text-center max-md:max-w-full mb-12">
        <span className="text-h3 max-md:text-h3-mobile font-raleway font-bold">
          Technologies
        </span>
        <br />
        <span className="text-brand-secondary text-h1 max-md:text-h1-mobile font-raleway font-bold">
          Powering Your Success
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-brand-dark max-w-7xl mx-auto w-full">
        <div className="bg-white p-6 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-neutral-border">
          <div className="flex w-full items-center gap-[11px]">
            <img loading="lazy" decoding="async"
              src="/img/builder/93ca85021fb01fbd.svg"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 max-md:text-h4-mobile">
              Front - end
            </h3>
          </div>
          <div className="w-full font-lato font-medium text-body-small max-md:text-body-mobile text-center mt-[11px]">
            <div className="flex w-full items-stretch gap-[11px]">
              <div className="border flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/ae7b82d58ad692f0.svg"
                  alt="React JS"
                  className="aspect-[0.71] object-contain w-10 self-center"
                />
                <div className="mt-[5px]">react JS</div>
              </div>
              <div className="border flex flex-col items-stretch whitespace-nowrap justify-center flex-1 shrink basis-[0%] p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/024a2ca43685f86b.svg"
                  alt="Flutter"
                  className="aspect-[1] object-contain w-[45px] self-center"
                />
                <div className="mt-[5px]">Flutter</div>
              </div>
            </div>
            <div className="flex w-full items-center gap-[11px] whitespace-nowrap mt-[11px]">
              <div className="border self-stretch flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/3a7b7f3128d94c92.svg"
                  alt="WordPress"
                  className="aspect-[1] object-contain w-[50px] self-center"
                />
                <div className="mt-[5px]">wordpress</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white whitespace-nowrap p-6 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-neutral-border"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex w-full items-center gap-[11px]">
            <img loading="lazy" decoding="async"
              src="/img/builder/618f7db8a4168a35.svg"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 max-md:text-h4-mobile">
              Back-end
            </h3>
          </div>
          <div className="w-full font-lato font-medium text-body-small max-md:text-body-mobile text-center mt-[11px]">
            <div className="flex w-full items-center gap-[11px]">
              <div className="border self-stretch flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/3a7621bc2e411738.svg"
                  alt="Firebase"
                  className="aspect-[1] object-contain w-[50px] self-center"
                />
                <div className="mt-[5px]">Firebase</div>
              </div>
            </div>
            <div className="flex w-full items-stretch gap-[11px] mt-[11px]">
              <div className="border flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/dbf7a8725b7ee111.svg"
                  alt="Laravel"
                  className="aspect-[1] object-contain w-[50px] self-center"
                />
                <div className="mt-[5px]">laravel</div>
              </div>
              <div className="border flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/7af41537102437da.svg"
                  alt="Django"
                  className="aspect-[1] object-contain w-[50px] self-center"
                />
                <div className="mt-[5px]">Django</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-neutral-border"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex w-full items-center gap-[11px] whitespace-nowrap">
            <img loading="lazy" decoding="async"
              src="/img/builder/2ad496406627385d.svg"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 max-md:text-h4-mobile">
              Security
            </h3>
          </div>
          <div className="w-full font-lato font-medium text-center flex-1 mt-[11px]">
            <div className="flex w-full items-stretch gap-[11px] flex-1 h-full">
              <div className="border flex flex-col items-stretch text-body-small max-md:text-body-mobile whitespace-nowrap justify-center flex-1 shrink basis-[0%] p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/53a2053a928bce92.svg"
                  alt="SSL"
                  className="aspect-[0.71] object-contain w-10 self-center"
                />
                <div className="mt-[5px]">SSL</div>
              </div>
              <div className="border flex flex-col items-stretch text-body-small max-md:text-body-mobile leading-[25px] justify-center flex-1 shrink basis-[0%] p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/a32ed8385c2f0e74.svg"
                  alt="PCI-DSS Compliance"
                  className="aspect-[1] object-contain w-[45px] self-center"
                />
                <div className="mt-[5px]">PCI-DSS Compliance</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-neutral-border"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex w-full items-center gap-[11px] whitespace-nowrap">
            <img loading="lazy" decoding="async"
              src="/img/builder/c70e51fc9fd3ef76.svg"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 max-md:text-h4-mobile">
              cloud
            </h3>
          </div>
          <div className="w-full font-lato font-medium text-body-small max-md:text-body-mobile text-center flex-1 mt-[11px]">
            <div className="flex w-full items-stretch gap-[11px] flex-1 h-full">
              <div className="border flex flex-col items-stretch whitespace-nowrap justify-center flex-1 shrink basis-[0%] p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/6d089e3bf8ca0a98.svg"
                  alt="AWS"
                  className="aspect-[1.67] object-contain w-[50px] self-center"
                />
                <div className="mt-[5px]">AWS</div>
              </div>
              <div className="border flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] p-[5px] rounded-[5px] border-[rgba(23,22,79,1)] border-solid">
                <img loading="lazy" decoding="async"
                  src="/img/builder/00656346e0cf8349.svg"
                  alt="Google Cloud"
                  className="aspect-[1.25] object-contain w-[50px] self-center"
                />
                <div className="mt-[5px]">Google cloud</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
