import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    // Dummy submission - simulate processing
    setIsSubmitting(true);
    
    // Log the form data for demo purposes
    console.log('Contact form submitted:', formData);
    
    // Simulate async submission with a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-lg text-gray-300" data-testid="contact-subtitle">Ready to transform your sports technology? Let's talk.</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 lg:p-12 hover:bg-white/15 transition-all duration-300" data-testid="contact-form-container">
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-300"
                  placeholder="Your full name"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-300"
                  placeholder="your@email.com"
                  required
                  data-testid="input-email"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-vertical placeholder-gray-300"
                placeholder="Tell us about your project..."
                required
                data-testid="textarea-message"
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 hover:scale-105 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
