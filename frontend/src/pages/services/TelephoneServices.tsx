import { PageHeader } from '@/components/common/PageHeader';

export default function TelephoneServices() {
  return (
    <>
      <PageHeader 
        title="Telephony Services (BrainTELEPHONY)"
        description="This page is under construction. Content coming soon."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Telephony Services' }
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Content will be added later */}
      </div>
    </>
  );
}