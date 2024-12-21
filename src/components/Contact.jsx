import { useEffect } from "react";
import { Mail, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
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

    script.onerror = () => {
      console.error("Error loading form script");
    };

    return () => {
      // Cleanup: Do not remove the script, let it persist for future visits
      console.log("Contact page unmount - no script removal needed");
    };
  }, []); // Empty dependency ensures this runs only once on mount

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

            {/* Visme Form will be loaded by the script */}
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
                  href="https://t.me/yourtelegramgroup"
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
