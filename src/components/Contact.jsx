import { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
 

  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set the message to disappear after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2100); // 4 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Check if the form script has already been loaded
    const alreadyLoaded = sessionStorage.getItem("formScriptLoaded");

    if (!alreadyLoaded) {
      // Mark that the form script has been loaded for this session
      sessionStorage.setItem("formScriptLoaded", "true");

      // Reload the page to ensure proper form rendering
      window.location.reload();
    }

    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Form script loaded successfully");
    };

    script.onerror = (e) => {
      console.error("Error loading form script");
      console.log(e);
    };

    // Cleanup function: set formScriptLoaded to false on unmount
    return () => {
      sessionStorage.removeItem("formScriptLoaded");
      console.log("Contact page unmounted - formScriptLoaded set to false");
    };
  }, []); // Pass mountKey here to trigger useEffect when mountKey changes

  // Update the mountKey whenever the component is mounted
  // Empty dependency ensures this runs only once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-xl font-normal text-gray-700 mb-6 text-center">
              Have any questions? Reach out to us, and we will respond promptly!
            </h2>
            {isVisible && (
         <>
         <p className="text-center text-white bg-gradient-to-r from-teal-400 to-blue-600 p-6 rounded-3xl text-xl font-bold mb-6 shadow-xl">
  🚀 Hold tight! We're loading something awesome for you...{" "}
  <span role="img" aria-label="sparkles">✨</span>
</p>

<div className="flex justify-center mb-10 mt-20">
        <span className="loader"></span>
      </div>
<style jsx>{`
        .loader {
  color:rgb(64, 35, 208);
  font-size: 45px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
 
      `}</style>
     
         </>
                
        )}
 


     

            
            <div
              className="visme_d"
              data-title="Blog Contact Form"
              data-url="y4rox4r4-blog-contact-form"
              data-domain="forms"
              data-full-page="false"
              data-min-height="500px"
              data-form-id="107501"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 flex items-center space-x-4 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Room 322, C Block</p>
                <p className="text-gray-600">K L University, Vaddeswaram</p>
              </div>
            </div>

            <div className="p-6 flex items-center space-x-4 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:sods@kluniversity.in"
                  className="text-blue-600 hover:text-blue-700"
                >
                  sods@kluniversity.in
                </a>
              </div>
            </div>

            {/* Telegram Group Link */}
            <div className="p-6 flex items-center space-x-4 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telegram Group</h3>
                <a
                  href="https://t.me/+D6MR2RJjIo4wZmQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Join our Telegram Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
