import * as HelmetAsyncNS from 'react-helmet-async';

const { Helmet } =
  ((HelmetAsyncNS as unknown as { default?: typeof HelmetAsyncNS }).default ?? HelmetAsyncNS);

interface PageMetaProps {
  title: string;
  description: string;
  /**
   * Accepted for backwards compatibility only. Canonical + og:url are emitted
   * once, centrally, in src/routes/__root.tsx so every page has exactly one
   * self-referencing canonical (https://brain.net.pk/<path>).
   */
  canonical?: string;
}

export default function PageMeta({ title, description }: PageMetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
