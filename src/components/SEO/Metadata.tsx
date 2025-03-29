import { Helmet } from 'react-helmet-async';

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
}

const Metadata: React.FC<MetadataProps> = ({ 
  title = "AutoReal — AI-Powered Real Estate Solutions",
  description = "AutoReal: AI-powered automation solutions for real estate agencies, designed to boost lead engagement and streamline operations.",
  path = ""
}) => {
  const baseUrl = "https://autoreal.ai";
  const url = `${baseUrl}${path}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="real estate automation, AI solutions, CRM for real estate, AutoReal, lead generation, property management" />
      <meta name="author" content="AutoReal AI" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="AutoReal — AI-Powered Real Estate Solutions" />
      <meta property="og:description" content="Transform your real estate business with AI-based solutions for marketing, scheduling, and client engagement." />
      <meta property="og:image" content="https://autoreal.ai/path-to-your-og-image.jpg" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AutoReal — AI-Powered Real Estate Solutions" />
      <meta name="twitter:description" content="AI-powered automation to take your real estate agency to the next level." />
      <meta name="twitter:image" content="https://autoreal.ai/path-to-your-twitter-image.jpg" />
    </Helmet>
  );
};

export default Metadata;