import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  ChevronDown, 
  ChevronRight,
  Cog,
  WifiHigh,
  Cloud,
  Phone,
  Code2,
  MessageSquare,
  BriefcaseBusiness,
  Headphones,
  Cpu,
  Building2,
  Package,
  HeartPulse,
  Utensils,
  Landmark,
  Factory,
  Banknote,
  Building,
  Users2,
  ShieldCheck,
  HandHeart,
  Handshake,
  Info,
  Briefcase,
  Clock,
  Network,
  Library,
  BookOpen,
  Newspaper,
  CreditCard
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navigationGroups = [
  {
    title: 'Services',
    icon: Cog,
    basePath: '/services',
    items: [
      { title: 'Internet Services', path: '/services/internet', icon: WifiHigh },
      { title: 'Cloud Services', path: '/services/cloud', icon: Cloud },
      { title: 'Telephony Services', path: '/services/telephone', icon: Phone },
      { title: 'Software Services', path: '/services/software', icon: Code2 },
      { title: 'SMS Services', path: '/services/sms', icon: MessageSquare },
    ]
  },
  {
    title: 'Industries',
    icon: BriefcaseBusiness,
    basePath: '/industry-solutions',
    items: [
      { title: 'Call Centers', path: '/industry-solutions/call-centers', icon: Headphones },
      { title: 'Software Houses', path: '/industry-solutions/software-houses', icon: Cpu },
      { title: 'Co-Working Spaces', path: '/industry-solutions/coworking-spaces', icon: Building2 },
      { title: 'FMCG', path: '/industry-solutions/fmcg', icon: Package },
      { title: 'Healthcare', path: '/industry-solutions/health-care', icon: HeartPulse },
      { title: 'Restaurants & Food Services', path: '/industry-solutions/restaurants-and-food-services', icon: Utensils },
      { title: 'Government', path: '/industry-solutions/government', icon: Landmark },
      { title: 'Manufacturing', path: '/industry-solutions/manufacturing', icon: Factory },
      { title: 'Financial Services', path: '/industry-solutions/financial-services', icon: Banknote },
    ]
  },
  {
    title: 'Company',
    icon: Building,
    basePath: '/company',
    items: [
      { title: 'Our Core Team', path: '/company/our-core-team', icon: Users2 },
      { title: 'Certifications', path: '/company/certifications', icon: ShieldCheck },
      { title: 'Corporate Social Responsibility', path: '/company/csr', icon: HandHeart },
      { title: 'Strategic Corporate Alliances', path: '/company/strategic-corporate-alliances', icon: Handshake },
      { title: 'About Us', path: '/company/about-us', icon: Info },
      { title: 'Our History', path: '/company/history', icon: Clock },
      { title: 'Our Technology Partners', path: '/company/tech-partners', icon: Network },
    ]
  },
  {
    title: 'Resources',
    icon: Library,
    basePath: '/resources',
    items: [
      { title: 'Customer Guides', path: '/resources/customer-guides', icon: BookOpen },
    ]
  }
];

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(t => t !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="left" 
        className="w-88 bg-neutral-light border-border p-0 nav-drawer"
      >
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-foreground text-left">Navigation</SheetTitle>
        </SheetHeader>
        
        <div className="px-4 py-2 space-y-2 overflow-y-auto">
          {navigationGroups.map((group) => {
            const isOpen = openGroups.includes(group.title);
            const IconComponent = group.icon;
            
            return (
              <Collapsible key={group.title} open={isOpen} onOpenChange={() => toggleGroup(group.title)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-4 h-auto bg-transparent text-foreground hover:bg-card state-layer"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{group.title}</span>
                    </div>
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pl-4 space-y-1">
                  <Link
                    to={group.basePath}
                    preload="intent"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 p-3 rounded-lg text-neutral-medium hover:bg-card hover:text-foreground transition-colors"
                  >
                    <span>Overview</span>
                  </Link>
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        preload="intent"
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 p-3 rounded-lg text-neutral-medium hover:bg-card hover:text-foreground transition-colors"
                      >
                        <ItemIcon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
          
          {/* Additional Nav Items */}
          <div className="pt-4 border-t border-border space-y-1">
            <Link
              to="/contact-us"
              preload="intent"
              onClick={handleLinkClick}
              className="flex items-center gap-3 p-4 rounded-lg text-foreground hover:bg-card transition-colors"
            >
              <span className="font-medium">Contact Us</span>
            </Link>
            <a
              href="https://careers.brain.net.pk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center gap-3 p-4 rounded-lg text-foreground hover:bg-card transition-colors"
            >
              <Briefcase className="h-5 w-5" />
              <span className="font-medium">Careers</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}