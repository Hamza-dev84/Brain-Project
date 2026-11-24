import { Link, useLocation } from '@/lib/router-compat';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: { [key: string]: string } = {
  internet: 'BrainNET',
  'home-internet': 'Home Internet',
  'business-internet': 'Business Internet',
  'voice-plans': 'Voice Plans',
  'hdtv-bundles': 'HDTV Bundles',
  'coverage-area': 'Coverage Areas',
  'contact-us': 'Contact Us',
  'voip-providers-pakistan': 'VoIP Providers in Pakistan',
  'sip-trunk-providers-pakistan': 'SIP Trunk Providers in Pakistan',
  'ivr-services-pakistan': 'IVR Services in Pakistan',
  'ip-pbx-pakistan': 'IP PBX in Pakistan',
  'virtual-pbx-pakistan': 'Virtual PBX in Pakistan',
  'pbx-price-in-pakistan': 'PBX Price in Pakistan',
};

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/services/internet' },
    ...pathnames.slice(1).map((name, index) => {
      const path = `/services/internet/${pathnames.slice(1, index + 2).join('/')}`;
      const label = routeLabels[name] || name.charAt(0).toUpperCase() + name.slice(1);
      return { label, path };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 md:px-0">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isHome = index === 0;

          return (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-white/50" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="text-accent font-semibold flex items-center" aria-current="page">
                  {isHome && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  {isHome && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                  {!isHome && crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
