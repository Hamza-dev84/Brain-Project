import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';

export default function CompanyProfile() {
  return (
    <>
      <PageMeta 
        title="Company Profile | BrainTEL Corporate Overview"
        description="BrainTEL's complete corporate profile. Learn about our services, infrastructure, achievements & commitment to Pakistan's IT sector."
      />
      <PageHeader
        title="Company Profile"
        description="This page is under construction. Content coming soon."
      />
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Content will be added later */}
      </div>
    </>
  );
}