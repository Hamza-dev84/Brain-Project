
import React from "react";
import { Database, Lock, Cloud } from "lucide-react";
import reactLogo from "../../../assets/software/web-development/technology/react-logo.svg";
import nextjsLogo from "../../../assets/software/web-development/technology/nextjs-logo.svg";
import fluterLogo from "../../../assets/software/web-development/technology/flutter-logo.svg";
import nodejsLogo from "../../../assets/software/web-development/technology/nodejs-logo.png";
import pythonLogo from "../../../assets/software/web-development/technology/python-logo.png";
import firebaseLogo from "../../../assets/software/web-development/technology/firebase-logo.png";
import supabaseLogo from "../../../assets/software/web-development/technology/supabase-logo.png";
import OWASPLogo from "../../../assets/software/web-development/technology/OWASP-logo.webp";
import OauthLogo from "../../../assets/software/web-development/technology/Oauth_logo.svg.png";
import cloudflareLogo from "../../../assets/software/web-development/technology/cloudflare-logo.svg";
import webfirewallLogo from "../../../assets/software/web-development/technology/webFirewall-logo.svg";

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

export const Technologies: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch capitalize px-[60px] pt-18 max-md:px-5 relative overflow-hidden">
      {/* Floating decorative icons */}
      <Database className="absolute top-10 right-[15%] w-10 h-10 text-brand-secondary/15 animate-float" />
      <Lock className="absolute bottom-20 left-[10%] w-12 h-12 text-brand-primary/15 animate-float-slow" />
      <Cloud className="absolute top-32 left-[20%] w-8 h-8 text-brand-secondary/20 animate-pulse-slow" />

      <div className="text-center mb-4 mt-10 max-w-4xl mx-auto">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
          Technologies
        </div>
        
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4">
            Technology Stack {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
          Behind Every High-Performing Website
          </span>
        </h2>
      </div>

      <p className="font-lato text-center text-base font-medium leading-relaxed text-brand-dark max-w-5xl mx-auto mb-8">
        We choose the right tools based on your project goals, budget, and
        future growth plans. This helps us build websites that are easier to
        manage, faster to scale, and better suited to your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-brand-dark max-w-7xl mx-auto w-full">
        {/* Frontend */}
        <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-1">
          <header className="flex w-full items-center gap-3 text-primary mb-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/93ca85021fb01fbd406b4915778c43ccc5588711?placeholderIfAbsent=true"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 font-bold max-md:text-h4-mobile">
              Front-End
            </h3>
          </header>

          <div className="grid grid-cols-2 gap-3">
            <TechItem
              icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/ae7b82d58ad692f0f726d3450c8523ee8dc2a2b8?placeholderIfAbsent=true"
              name="HTML"
            />
            <TechItem icon={fluterLogo} name="Flutter" />
            <TechItem icon={reactLogo} name="React" />
            <TechItem icon={nextjsLogo} name="Nextjs" />
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

        {/* Web Security */}
        <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-3">
          <header className="flex w-full items-center gap-3 text-primary mb-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/2ad496406627385d21cf4f9f57d8b839659a4c14?placeholderIfAbsent=true"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 font-bold max-md:text-h4-mobile">
              Security
            </h3>
          </header>

          <div className="grid grid-cols-2 gap-3">
            <TechItem icon={OWASPLogo} name="OWASP" />
            <TechItem icon={OauthLogo} name="OAuth" />
            <TechItem icon={cloudflareLogo} name="Cloud Flare" />
            <TechItem icon={webfirewallLogo} name="Web App Firewall" />
          </div>
        </article>

        {/* Cloud & DevOps */}
        <article className="bg-card border border-primary/10 rounded-2xl p-6 md-card animate-fade-in-up stagger-4">
          <header className="flex w-full items-center gap-3 text-primary mb-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/c70e51fc9fd3ef760733e44b60b4978edb81425f?placeholderIfAbsent=true"
              alt=""
              className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
            />
            <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto text-h4 font-bold max-md:text-h4-mobile">
              cloud
            </h3>
          </header>

          <div className="grid grid-cols-2 gap-3">
            <TechItem
              icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/6d089e3bf8ca0a987c18be312c17c51d388d2c10?placeholderIfAbsent=true"
              name="AWS"
            />
            <TechItem
              icon="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/ce8b8b4e5520ddbbcae780995a4347ceda01b9c6?placeholderIfAbsent=true"
              name="Oracle Cloud"
            />
            <TechItem icon={firebaseLogo} name="Firebase" />
            <TechItem icon={supabaseLogo} name="Supabase" />
          </div>
        </article>
      </div>
    </section>
  );
};
