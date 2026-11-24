import React from "react";
import { Briefcase, Award } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import CumulusImg from "@/assets/software/case-studies/Case Study Cumulus.png";

// export const Portfolio: React.FC = () => {
//   return (
//     <section className="self-center flex w-full flex-col items-center mt-[80px] px-[60px] py-16 max-md:px-5 relative overflow-hidden">
//       {/* Floating icons */}
//       <Briefcase className="absolute top-0 right-[15%] w-10 h-10 text-brand-secondary/20 animate-float-slow" />
//       <Award className="absolute bottom-40 left-[10%] w-12 h-12 text-brand-primary/20 animate-float" />
//       <h2 className="text-brand-dark text-center capitalize w-full max-md:max-w-full mb-12">
//         <span className="font-raleway font-bold text-h3 max-md:text-h3-mobile">
//           Don't Take Our Word For It
//         </span>
//         <br />
//         <span className="font-raleway font-bold text-h1 max-md:text-h1-mobile">
//           See Our Work!
//         </span>
//       </h2>
//       <div className="bg-white flex w-full max-w-[1438px] flex-col overflow-hidden items-stretch justify-center mt-10 py-2 max-md:max-w-full">
//         <div className="flex items-stretch gap-[30px] flex-wrap pl-[58px] pr-[60px] max-md:px-5">
//           <div className="min-w-60 w-[645px] my-auto max-md:max-w-full">
//             <div className="flex items-center gap-[30px] flex-wrap max-md:max-w-full">
//               <img loading="lazy" decoding="async"
//                 src="/img/builder/d6edfed0c058aec1.svg"
//                 alt="Cumulus Labs Project"
//                 className="aspect-[2.72] object-contain w-[446px] self-stretch min-w-60 my-auto max-md:max-w-full"
//               />
//               <img loading="lazy" decoding="async"
//                 src="/img/builder/76f50fb62ad7511b.svg"
//                 alt=""
//                 className="aspect-[169/164] object-contain w-[169px] fill-[linear-gradient(359deg,#FFF_-95.8%,#C2D2FF_118.12%)] self-stretch shrink-0 my-auto"
//               />
//             </div>
//             <div className="flex min-h-[282px] max-w-full w-[645px] mt-[30px] rounded-[15px]" />
//           </div>
//           <div className="min-w-60 capitalize flex-1 shrink basis-[0%] max-md:max-w-full">
//             <article className="justify-center items-stretch flex w-full flex-col text-brand-dark flex-1 p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
//               <h3 className="max-md:max-w-full">Cumulus Labs</h3>
//               <p className="font-lato font-medium text-body-small max-md:text-body-mobile leading-[25px] mt-5 max-md:max-w-full">
//                 A memorialization platform designed to preserve our deceased loved
//                 ones' digital assets. We implemented video streaming, uploading,
//                 overhauled their database schema, and fixed numerous issues with
//                 their web app.
//               </p>
//             </article>
//             <div className="flex w-full items-stretch gap-[30px] text-brand-dark text-center flex-wrap mt-[30px] max-md:max-w-full">
//               <div
//                 className="justify-center items-stretch flex flex-col flex-1 shrink basis-[0%] p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: "0.1s" }}
//               >
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/244a240a78e37c24.svg"
//                   alt=""
//                   className="aspect-[1] object-contain w-[75px] self-center"
//                 />
//                 <div className="text-[#17164F] font-lato font-bold text-body-small max-md:text-body-mobile mt-[30px]">
//                   Improved User Journey
//                 </div>
//               </div>
//               <div
//                 className="justify-center items-stretch flex flex-col flex-1 shrink basis-[0%] p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/d20992cd0cbc3a8f.svg"
//                   alt=""
//                   className="aspect-[1] object-contain w-[75px] self-center"
//                 />
//                 <div className="text-[#17164F] font-lato font-bold text-body-small max-md:text-body-mobile mt-[30px]">
//                   Seamless Video Experience
//                 </div>
//               </div>
//               <div
//                 className="justify-center items-stretch flex flex-col flex-1 shrink basis-[0%] p-8 rounded-2xl max-md:px-5 bg-white border border-neutral-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: "0.3s" }}
//               >
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/443c5f31896676c9.svg"
//                   alt=""
//                   className="aspect-[1] object-contain w-[75px] self-center"
//                 />
//                 <div className="text-[#17164F] font-lato font-bold text-body-small max-md:text-body-mobile mt-[30px]">
//                   Revamped Platform Architecture
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


export const Portfolio: React.FC = () => {
  return (
    <section className="relative w-full pt-10 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Floating icons */}
      <Briefcase className="absolute top-6 right-[10%] w-8 h-8 md:w-10 md:h-10 text-brand-secondary/20 animate-float-slow" />
      <Award className="absolute bottom-20 left-[8%] w-10 h-10 md:w-12 md:h-12 text-brand-primary/20 animate-float" />

      <div className="flex flex-col px-[60px] max-md:px-5 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <ScrollReveal animationType="fade-up" className="text-center">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Our Portfolio
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-2">
            See Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Web Design Work
            </span>
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="font-lato text-base font-medium leading-relaxed mt-4 text-neutral-400">
            Brain Soft has partnered with businesses throughout Pakistan. We
            design websites that boost brand visibility and enhance customer
            engagement.
          </p>
          <p className="font-lato text-base font-medium leading-relaxed mt-0 text-neutral-400">
            Many companies searching for top web design firms in Pakistan check
            project portfolios. This helps them gauge design quality and
            development skills.
          </p>
        </div>

        {/* Main Container */}
        <div className="mx-auto w-full max-w-[1440px] rounded-3xl px-4 sm:px-6 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT — IMAGES */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top two images */}
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/d6edfed0c058aec1ebf814f5cf7359cdd9f78936?placeholderIfAbsent=true"
                  alt="Cumulus Labs Project"
                  className="w-full sm:w-2/3 lg:w-3/4 aspect-[2.7] object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/76f50fb62ad7511be162abec38bf108a4a196f8e?placeholderIfAbsent=true"
                  alt=""
                  className="w-full sm:w-1/3 lg:w-1/4 aspect-square object-contain"
                />
              </div>

              {/* Full width image */}
              <img
                src={CumulusImg}
                alt="Cumulus Lab"
                className="w-full h-auto rounded-2xl bg-neutral-100 object-cover"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="flex-1 flex flex-col gap-10">
              {/* Main Card */}
              <article className="p-6 sm:p-8 rounded-2xl border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-brand-dark font-raleway text-xl sm:text-2xl font-bold mb-4">
                  Cumulus Labs
                </h3>
                <p className="font-lato text-body-small sm:text-body leading-relaxed">
                  A memorialization platform designed to preserve our deceased
                  loved ones' digital assets. We implemented video streaming,
                  uploading, overhauled their database schema, and fixed
                  numerous issues with their web app.
                </p>
              </article>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {[
                  {
                    img: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/244a240a78e37c241533ae87e2a241a25f0f2823?placeholderIfAbsent=true",
                    text: "Improved User Journey",
                  },
                  {
                    img: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/d20992cd0cbc3a8fe27b8bc944da4aa37c17855b?placeholderIfAbsent=true",
                    text: "Seamless Video Experience",
                  },
                  {
                    img: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/443c5f31896676c92d774f89f70096cefc8c6d76?placeholderIfAbsent=true",
                    text: "Revamped Platform Architecture",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-8 rounded-2xl border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                    />
                    <div className="mt-4 sm:mt-6 font-lato font-bold text-body-small sm:text-body text-[#17164F]">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};