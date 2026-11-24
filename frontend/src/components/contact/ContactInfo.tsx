import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  subInfo?: string;
}

function ContactInfoItem({ icon, title, info, subInfo }: ContactInfoItemProps) {
  return (
    <Card className="p-6 text-center bg-surface border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-primary/10">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{info}</p>
      {subInfo && <p className="text-muted-foreground text-sm mt-1">{subInfo}</p>}
    </Card>
  );
}

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContactInfoItem
        icon={<MapPin className="h-8 w-8 text-primary" />}
        title="Address"
        info="730 Nizam Block, Allama Iqbal Town, Lahore, 54000"
      />
      <ContactInfoItem
        icon={<Phone className="h-8 w-8 text-primary" />}
        title="Phone Number"
        info="24/7 Customer Care:"
        subInfo="(042) 111 222 888, (042) 52100 000"
      />
      <ContactInfoItem
        icon={<Mail className="h-8 w-8 text-primary" />}
        title="Email Address"
        info="Sales@Brain.Net.Pk"
      />
      <ContactInfoItem
        icon={<Clock className="h-8 w-8 text-primary" />}
        title="Working Hours"
        info="Mon-Sat: 9am - 5:30pm"
      />
    </div>
  );
}