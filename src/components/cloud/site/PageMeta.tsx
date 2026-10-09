import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;

  description?: string;

  keywords?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;

  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  canonical?: string;
  noIndex?: boolean;
  schema?: object;
}

const PageMeta = ({
  title,

  description = "",

  keywords,

  ogTitle,
  ogDescription,
  ogType = "website",
  ogUrl,
  ogImage,

  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,

  canonical,
  noIndex = false,
  schema,
}: PageMetaProps) => {
  const SITE_URL = "https://brain.net.pk";

  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";

  const fullCanonical = canonical
    ? `${SITE_URL}${canonical}`
    : `${SITE_URL}${currentUrl}`;

    console.log("usman canonical === ",currentUrl)

  const imageUrl = ogImage?.startsWith("http")
    ? ogImage
    : ogImage
      ? `${SITE_URL}${ogImage}`
      : undefined;

  return (
    <Helmet>
      {/* TITLE */}

      <title>{title}</title>

      {/* BASIC META */}

      {description && <meta name="description" content={description} />}

      {keywords && <meta name="keywords" content={keywords} />}

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* OPEN GRAPH */}

      <meta property="og:title" content={ogTitle || title} />

      <meta property="og:description" content={ogDescription || description} />

      <meta property="og:type" content={ogType} />

      <meta property="og:url" content={ogUrl || fullCanonical} />

      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* TWITTER */}

      <meta name="twitter:card" content={twitterCard} />

      <meta name="twitter:title" content={twitterTitle || title} />

      <meta
        name="twitter:description"
        content={twitterDescription || description}
      />

      {(twitterImage || imageUrl) && (
        <meta name="twitter:image" content={twitterImage || imageUrl} />
      )}

      {/* CANONICAL */}



      <link rel="canonical" href={fullCanonical} />

      {/* SCHEMA */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default PageMeta;
