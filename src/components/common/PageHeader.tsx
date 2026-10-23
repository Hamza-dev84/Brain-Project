import { Link } from '@tanstack/react-router';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-m3-surface-container pt-2 border-b border-m3-outline-variant">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-m3-on-surface-variant mb-2" aria-label="Breadcrumb">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-m3-primary transition-colors"
            >
              <Home className="h-3 w-3" />
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="hover:text-m3-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-m3-on-surface">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}