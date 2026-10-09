import { useLocation } from "@/lib/router-compat";
import { useEffect } from "react";
import { Helmet } from "@/lib/helmet-compat";
import PageMeta from "@/components/common/PageMeta";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* <Helmet>
        <title>Page Not Found | BrainSOFT</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to BrainSOFT's homepage to explore our software development services in Pakistan." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSoft - Page Not Found (404)"
        description="The page you’re looking for doesn’t exist or has been moved. Explore our website for insights, solutions, and resources that matter."
        // ogImage="/favicons/brainsoft_favicon.png"
        // noIndex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a href="/services/software" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
