import { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2100); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("formScriptLoaded");

    if (!alreadyLoaded) {
      sessionStorage.setItem("formScriptLoaded", "true");
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

    return () => {
      sessionStorage.removeItem("formScriptLoaded");
      console.log("Contact page unmounted - formScriptLoaded set to false");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

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

                
              </>
            )}
            <p className="text-center text-lg font-semibold text-blue-600 mt-6">
                  Submit your details now and prepare for something fun...!🤩
                </p>

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
                  href="mailto:datascience.sods@kluniveristy.in"
                  className="text-blue-600 hover:text-blue-700"
                >
                  sods@kluniversity.in
                </a>
              </div>
            </div>

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
