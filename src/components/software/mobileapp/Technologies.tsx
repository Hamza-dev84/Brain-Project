import React from "react";
import nodejsLogo from "@/assets/software/web-development/technology/nodejs-logo.png";
import pythonLogo from "@/assets/software/web-development/technology/python-logo.png";

interface TechItemProps {
  icon: string;
  name: string;
  className?: string;
}

// const TechItem: React.FC<TechItemProps> = ({ icon, name, className = "" }) => {
//   return (
//     <div
//       className={`border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all ${className}`}
//     >
//       <img loading="lazy" decoding="async"
//         src={icon}
//         alt={name}
//         className="aspect-[1] object-contain w-[50px] h-[50px]"
//       />
//       <div className="mt-2 text-sm font-lato font-medium text-center max-md:text-[12px]">
//         {name}
//       </div>
//     </div>
//   );
// };

// const Technologies: React.FC = () => {
//   return (
//     <section className="self-center flex w-full flex-col items-stretch justify-center mt-[60px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5 animate-fade-in-up">
//       <header className="flex w-full flex-col items-stretch text-center max-md:max-w-full mb-8">
//         <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4 self-center">
//           Technologies
//         </div>
//         <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
//             Technologies
//           </span> We Use
//         </h2>
//         <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto mt-4">
//           Our team works with industry-leading technologies to build secure,
//           scalable, and even artificial-intelligence based solutions.
//         </p>
//       </header>

//       <div className="w-full mt-[30px] max-md:max-w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-md:max-w-full">
//           {/* Frontend */}
//           <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-1">
//             <header className="flex w-full items-center gap-3 text-primary mb-4">
//               <img loading="lazy" decoding="async"
//                 src="/img/builder/615f04f208eec05f.svg"
//                 alt="Frontend"
//                 className="aspect-[1] object-contain w-[35px] h-[35px]"
//               />
//               <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
//                 Frontend
//               </h4>
//             </header>
//             <div className="grid grid-cols-2 gap-3">
//               <TechItem
//                 icon="/img/builder/e52dd9e5f39c1b79.svg"
//                 name="React Native"
//               />
//               <TechItem
//                 icon="/img/builder/38d6d808b13492ec.svg"
//                 name="Flutter"
//               />
//               <TechItem
//                 icon="/img/builder/f62e2dbbebda7d18.svg"
//                 name="Kotlin"
//               />
//               <TechItem
//                 icon="/img/builder/c07398f8503e63b6.svg"
//                 name="WordPress"
//               />
//             </div>
//           </article>

//           {/* Backend */}
//           <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-2">
//             <header className="flex w-full items-center gap-3 text-primary mb-4">
//               <img loading="lazy" decoding="async"
//                 src="/img/builder/aca253e55c776e1e.svg"
//                 alt="Backend"
//                 className="aspect-[1] object-contain w-[35px] h-[35px]"
//               />
//               <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
//                 Backend
//               </h4>
//             </header>
//             <div className="grid grid-cols-2 gap-3">
//               <TechItem
//                 icon="/img/builder/c2aee169e20282d4.svg"
//                 name="Python"
//               />
//               <TechItem
//                 icon="/img/builder/6beafc11781de7d9.svg"
//                 name="Laravel"
//               />
//               <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/946a616704920167.svg"
//                   alt="MySQL"
//                   className="aspect-[1.5] object-contain w-[45px] h-[30px]"
//                 />
//                 <div className="mt-2 text-sm font-lato font-medium text-center">
//                   MySQL
//                 </div>
//               </div>
//               <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/ce2ec99322759ef3.svg"
//                   alt="Oracle"
//                   className="aspect-[7.69] object-contain w-[100px] h-[13px] max-w-full"
//                 />
//                 <div className="mt-2 text-sm font-lato font-medium text-center">
//                   Oracle
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Cloud & DevOps */}
//           <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-3">
//             <header className="flex w-full items-center gap-3 text-primary mb-4">
//               <img loading="lazy" decoding="async"
//                 src="/img/builder/d4ae07d25f7d58f0.svg"
//                 alt="Cloud & DevOps"
//                 className="aspect-[1] object-contain w-[35px] h-[35px]"
//               />
//               <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
//                 Cloud & DevOps
//               </h4>
//             </header>
//             <div className="grid grid-cols-2 gap-3">
//               <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/590c6affa26be95f.svg"
//                   alt="AWS"
//                   className="aspect-[1.67] object-contain w-[50px] h-[30px]"
//                 />
//                 <div className="mt-2 text-sm font-lato font-medium text-center">
//                   AWS
//                 </div>
//               </div>
//               <TechItem
//                 icon="/img/builder/76be5fff17b6c659.svg"
//                 name="Firebase"
//               />
//               <TechItem
//                 icon="/img/builder/bea556f935460be2.svg"
//                 name="Supabase"
//               />
//               <div className="border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all">
//                 <img loading="lazy" decoding="async"
//                   src="/img/builder/ce8b8b4e5520ddbb.svg"
//                   alt="Oracle Cloud"
//                   className="aspect-[7.69] object-contain w-[100px] h-[13px] max-w-full"
//                 />
//                 <div className="mt-2 text-sm font-lato font-medium text-center">
//                   Oracle Cloud
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* AI/ML */}
//           <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-4">
//             <header className="flex w-full items-center gap-3 text-primary mb-4">
//               <img loading="lazy" decoding="async"
//                 src="/img/builder/5c6333a269809764.svg"
//                 alt="AI/ML"
//                 className="aspect-[1] object-contain w-[35px] h-[35px]"
//               />
//               <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
//                 AI / ML
//               </h4>
//             </header>
//             <div className="space-y-3">
//               <div className="grid grid-cols-2 gap-3">
//                 <TechItem
//                   icon="/img/builder/7c44b81428509420.svg"
//                   name="Python"
//                 />
//                 <TechItem
//                   icon="/img/builder/9a0ebe9512a17f4d.svg"
//                   name="TensorFlow"
//                 />
//               </div>
//               <TechItem
//                 icon="/img/builder/3a3f8b6c621a1f15.svg"
//                 name="OpenAI"
//                 className="w-full"
//               />
//             </div>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// };

const TechItem: React.FC<TechItemProps> = ({ icon, name, className = "" }) => {
  return (
    <div
      className={`border flex flex-col items-center justify-center p-4 rounded-lg border-primary/20 md-hover bg-card hover:shadow-lg transition-all ${className}`}
    >
      <img
        src={icon}
        alt={name}
        className={`aspect-[1] object-contain h-[50px] ${
          name === "Oracle Cloud" ? "w-[100px]" : "w-[50px]"
        }`}
      />
      <div className="mt-2 text-sm font-lato font-medium text-center max-md:text-[12px]">
        {name}
      </div>
    </div>
  );
};

const Technologies: React.FC = () => {
  return (
    <section className="self-center flex w-full flex-col items-stretch justify-center mt-28 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5 animate-fade-in-up">
      <header className="flex w-full flex-col items-stretch text-center max-md:max-w-full mb-8">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4 self-center">
          Technologies
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
          Technologies{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            We Use
          </span>
        </h2>
        <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto mt-4">
          We use trusted modern tools to build mobile apps that are stable,
          secure, and easy to maintain. The stack is selected based on your app
          type, features, performance needs, and future scale.
        </p>
      </header>

      <div className="w-full mt-[10px] max-md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-brand-dark max-w-7xl mx-auto w-full">
          {/* Frontend */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-1">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/615f04f208eec05fce2f97e919ab7d11ef40cac0?placeholderIfAbsent=true"
                alt="Frontend"
                className="aspect-[1] object-contain w-[35px] h-[35px]"
              />
              <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
                Front-End
              </h4>
            </header>
            <div className="grid grid-cols-2 gap-3">
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/e52dd9e5f39c1b79de64a99cf91943cccf30c8de?placeholderIfAbsent=true"
                name="React Native"
              />
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/38d6d808b13492ec2f545527c0e2b8fd5dae4d47?placeholderIfAbsent=true"
                name="Flutter"
              />
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/f62e2dbbebda7d18c42cefac142834556ec10902?placeholderIfAbsent=true"
                name="Kotlin"
              />
            </div>
          </article>

          {/* Backend */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-2">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/618f7db8a4168a35a6862c4c0ac5d2be95795f65?placeholderIfAbsent=true"
                alt=""
                className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
              />
              <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 font-bold max-md:text-h4-mobile">
                Back-End
              </h3>
            </header>

            <div className="grid grid-cols-2 gap-3">
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/dbf7a8725b7ee111ab522e70f55e0bdc40f3c62b?placeholderIfAbsent=true"
                name="Laravel"
              />
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/7af41537102437daeb63c21951cb6da05ff88f15?placeholderIfAbsent=true"
                name="Django"
              />
              <TechItem icon={nodejsLogo} name="Node" />
              <TechItem icon={pythonLogo} name="Python" />
            </div>
          </article>

          {/* Cloud & DevOps */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-3">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/d4ae07d25f7d58f0cf86bfe9b3473e45ffc31e2f?placeholderIfAbsent=true"
                alt="Cloud & DevOps"
                className="aspect-[1] object-contain w-[35px] h-[35px]"
              />
              <h4 className="font-raleway text-[22px] leading-[26px] font-bold max-md:text-[18px] max-md:leading-[22px]">
                Cloud & DevOps
              </h4>
            </header>
            <div className="grid grid-cols-2 gap-3">
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/590c6affa26be95ffc29a60e741ddcb388d9da69?placeholderIfAbsent=true"
                name="AWS"
              />
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/ce8b8b4e5520ddbbcae780995a4347ceda01b9c6?placeholderIfAbsent=true"
                name="Oracle Cloud"
              />
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/76be5fff17b6c6598b97130f814a85fde15b4bc2?placeholderIfAbsent=true"
                name="Firebase"
              />
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/bea556f935460be2b457d6f2f6e4f66f8feab027?placeholderIfAbsent=true"
                name="Supabase"
              />
            </div>
          </article>

          {/* AI/ML */}
          <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-4">
            <header className="flex w-full items-center gap-3 text-primary mb-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/5c6333a269809764cc455b7853667e849b089111?placeholderIfAbsent=true"
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
                  icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/7c44b81428509420c7d7ffa1097934152d27d40f?placeholderIfAbsent=true"
                  name="Python"
                />
                <TechItem
                  icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/9a0ebe9512a17f4da71617eb578f4879b4334d94?placeholderIfAbsent=true"
                  name="TensorFlow"
                />
              </div>
              <TechItem
                icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/3a3f8b6c621a1f1570769f434a5523dc5653e283?placeholderIfAbsent=true"
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
