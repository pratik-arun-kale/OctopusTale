import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "Prashanth@octopustale.co.in",
      href: "mailto:Prashanth@octopustale.co.in",
      testId: "link-email",
      description: "Send us an email"
    },
    {
      icon: Phone,
      label: "Call",
      value: "+1 (343) 254-1255",
      href: "tel:+13432541255",
      testId: "link-call",
      description: "Give us a call"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/prashanthiyer",
      testId: "link-linkedin",
      description: "Connect with us"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-lg text-gray-300" data-testid="contact-subtitle">Ready to transform your sports technology? Let's talk.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
                rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-300 group"
                data-testid={method.testId}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{method.label}</h3>
                    <p className="text-sm text-gray-300 mb-1">{method.description}</p>
                    <p className="text-sm text-blue-400 font-medium break-all">{method.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
