import { Link } from '@tanstack/react-router';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-card py-12 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-neutral-medium mb-4" aria-label="Breadcrumb">
            <Link 
              to="/" 
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {crumb.path ? (
                  <Link 
                    to={crumb.path}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
        
        {/* Title and Description */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-neutral-medium leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}