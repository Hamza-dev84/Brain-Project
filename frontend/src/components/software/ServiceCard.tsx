import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';

interface ServiceCardProps {
  iconImage: string;
  backgroundImage: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconImage, backgroundImage, title, description, link }) => {
  return (
    <Link to={link} className="block">
      <article className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[280px] max-w-[380px] flex-1 rounded-3xl overflow-hidden hover:-translate-y-2 cursor-pointer">
        {/* Background Image with Icon Badge */}
        <div className="relative h-48 overflow-hidden">
          <img loading="lazy" decoding="async" 
            src={backgroundImage} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Circular Icon Badge - Bottom Left */}
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            <img loading="lazy" decoding="async" src={iconImage} alt={`${title} icon`} className="w-10 h-10" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col p-8 border-b-8 border-brand-secondary group-hover:border-brand-dark transition-colors">
          <h3 className="card-title">
            {title}
          </h3>
          
          <p className="card-description mt-4">
            {description}
          </p>
          
          <div className="flex items-center gap-2 btn-text text-brand-dark justify-center mt-8 p-3 group-hover:gap-4 transition-all">
            <span>Get Service Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ServiceCard;
