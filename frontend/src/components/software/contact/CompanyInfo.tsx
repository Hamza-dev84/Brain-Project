import React from "react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export const CompanyInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Company Name */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-primary/90 rounded-2xl p-8 text-white">
        <h3 className="font-raleway font-bold text-2xl mb-2 text-white">
          Brain Telecommunication Limited
        </h3>
        <p className="font-lato text-white">
          Leading offshore software development company in Pakistan
        </p>
      </div>

      {/* Address */}
      <div className="bg-white rounded-xl border border-neutral-border p-6 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-raleway font-semibold text-brand-dark mb-2">
              Office Address
            </h4>
            <p className="font-lato text-neutral-medium">
              730–727 Nizam Block,
              <br />
              Allama Iqbal Town, Lahore,
              <br />
              Pakistan, 54000
            </p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="bg-white rounded-xl border border-neutral-border p-6 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-raleway font-semibold text-brand-dark mb-2">
              Phone Numbers
            </h4>
            <p className="font-lato text-neutral-medium mb-1">
              Main: (042) 111 222 888
            </p>
            <p className="font-lato text-neutral-medium mb-1">
              Office: (042) 32100000
            </p>
            <p className="font-lato text-neutral-medium">
              WhatsApp: +92 327 6222888
            </p>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white rounded-xl border border-neutral-border p-6 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-raleway font-semibold text-brand-dark mb-2">
              Email Addresses
            </h4>
            <p className="font-lato text-neutral-medium mb-1">
              Sales: sales@brain.net.pk
            </p>
            <p className="font-lato text-neutral-medium">
              Support: support@brain.net.pk
            </p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-xl border border-neutral-border p-6 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-raleway font-semibold text-brand-dark mb-2">
              Business Hours (PST)
            </h4>
            <p className="font-lato text-neutral-medium mb-1">
              Monday - Saturday: 9:00 AM - 5:30 PM
            </p>
            <p className="font-lato text-neutral-medium">
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Website */}
      <div className="bg-white rounded-xl border border-neutral-border p-6 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-raleway font-semibold text-brand-dark mb-2">
              Website
            </h4>
            <p className="font-lato text-neutral-medium">
              brain.net.pk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
