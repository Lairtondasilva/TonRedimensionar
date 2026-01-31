import { useEffect } from 'react';

const AdSense = ({ 
  client = "ca-pub-2010584930704538", // Replace with actual client ID
  slot, 
  style = { display: 'block' }, 
  format = "auto", 
  responsive = "true",
  layoutKey
}) => {
  
  useEffect(() => {
    // Check if running on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return;
    }

    // Load AdSense script if not already loaded
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Push ad
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [client]);

  // Don't render anything on localhost to avoid violations/errors
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return (
      <div style={{ 
        background: '#f0f0f0', 
        padding: '20px', 
        textAlign: 'center', 
        border: '1px dashed #ccc',
        margin: '20px 0',
        color: '#888'
      }}>
        [AdSense Placeholder: {slot}]
      </div>
    );
  }

  return (
    <div className="adsense-container" style={{ margin: '20px 0', textAlign: 'center', overflow: 'hidden', maxWidth: '100%' }}>
      <ins className="adsbygoogle"
           style={{ ...style, display: 'block', maxWidth: '100%' }}
           data-ad-client={client}
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive={responsive}
           data-ad-layout-key={layoutKey}
      ></ins>
    </div>
  );
};

export default AdSense;
