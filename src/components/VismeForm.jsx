// import React, { useEffect } from 'react';

// const VismeForm = ({ onClose }) => {
//   useEffect(() => {
//     // Load the Visme embed script dynamically
//     const script = document.createElement('script');
//     script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script); // Clean up the script
//     };
//   }, []);

//   return (
//     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
//       <div style={{ position: 'relative', margin: '5% auto', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width: '80%', maxWidth: '600px' }}>
//         <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'red', color: '#fff', borderRadius: '50%', cursor: 'pointer' }}>
//           ✕
//         </button>
//         <div
//           className="visme_d"
//           data-title="Giveaway Sign Up Form"
//           data-url="6x03k4or-giveaway-sign-up-form?fullPage=true"
//           data-domain="forms"
//           data-full-page="true"
//           data-min-height="100vh"
//           data-form-id="102785"
//           style={{ height: '400px', overflow: 'auto' }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default VismeForm;


import React, { useEffect, useState } from 'react';

const VismeForm = ({ formId, fullPage }) => {
  const [settings, setSettings] = useState(null);
  const [iframeVisible, setIframeVisible] = useState(false);

  useEffect(() => {
    // Mimicking fetching settings, now using direct settings object
    const fetchSettings = async () => {
      const settings = {
        afterPageLoad: true, // Example setting
        afterUserInteraction: true, // Example setting
        afterScrollDown: 50, // Trigger after scrolling 50%
        beforeLeave: true, // Trigger on page leave
        afterTime: 10, // Trigger after 10 seconds
      };
      setSettings(settings);
    };

    fetchSettings();
  }, []);

  const handleEvents = () => {
    if (settings) {
      if (settings.afterPageLoad) {
        setIframeVisible(true);
      }

      if (settings.afterTime) {
        setTimeout(() => {
          setIframeVisible(true);
        }, settings.afterTime * 1000);
      }

      if (settings.afterScrollDown) {
        const scrollListener = () => {
          const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          if (scrollPercentage >= settings.afterScrollDown) {
            setIframeVisible(true);
            window.removeEventListener('scroll', scrollListener);
          }
        };
        window.addEventListener('scroll', scrollListener);
      }

      if (settings.afterUserInteraction) {
        const userInteractionListener = () => {
          setIframeVisible(true);
          window.removeEventListener('mousemove', userInteractionListener);
          window.removeEventListener('mousedown', userInteractionListener);
        };
        window.addEventListener('mousemove', userInteractionListener);
        window.addEventListener('mousedown', userInteractionListener);
      }

      if (settings.beforeLeave) {
        const beforeLeaveListener = () => {
          setIframeVisible(true);
          window.removeEventListener('mouseleave', beforeLeaveListener);
        };
        window.addEventListener('mouseleave', beforeLeaveListener);
      }
    }
  };

  useEffect(() => {
    if (settings) {
      handleEvents();
    }
  }, [settings]);

  const iframeContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <h1>Embedded Form ${formId}</h1>
        <p>This is the content of the form with ID: ${formId}</p>
        <!-- You can add more form content here -->
      </body>
    </html>
  `;

  return (
    <div>
      {/* Placeholder or loader for when settings are being fetched */}
      {!settings && <div>Loading...</div>}

      {/* Render iframe only when the conditions are met */}
      {iframeVisible && (
        <iframe
          srcDoc={iframeContent} // Directly embedding the content
          frameBorder="0"
          style={{
            width: '100%',
            height: fullPage ? '100vh' : '100%',
            border: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '999999',
            background: 'rgba(255, 255, 255, 0.78)',
          }}
        ></iframe>
      )}
    </div>
  );
};

export default VismeForm;
