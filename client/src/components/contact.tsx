import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import octopusImage from "@assets/download__10_-removebg-preview_1755719654422.png";

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

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

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
    submitContactForm.mutate(formData);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden" data-testid="contact-section">
      {/* Blended Octopus - Mirrored */}
      <div className="absolute top-16 right-0 w-64 h-80 opacity-20 pointer-events-none animate-float-gentle">
        <img 
          src={octopusImage} 
          alt=""
          className="w-full h-full object-contain mix-blend-soft-light animate-drift"
          style={{
            filter: 'brightness(0.7) contrast(1.8) hue-rotate(60deg) saturate(1.1)',
            transform: 'scaleX(-1) rotate(20deg) scale(1.1)',
            animationDelay: '4s'
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                disabled={submitContactForm.isPending}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 hover:scale-105 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                data-testid="button-submit"
              >
                {submitContactForm.isPending ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
