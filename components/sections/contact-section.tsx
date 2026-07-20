"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm as useRHForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRHForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-32 px-6 bg-charcoal relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Start Your Journey
          </motion.h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ready to explore? Get in touch with our travel curators to begin planning your next cinematic adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-[32px] bg-white/5 border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name</label>
                <input 
                  {...register("name")}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input 
                  {...register("email")}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your dream destination..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gold text-forest hover:bg-white transition-colors">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="flex items-start gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Our Headquarters</h4>
                <p className="text-white/70">123 Premium Way, Suite 100<br/>New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Email Us</h4>
                <p className="text-white/70">concierge@lumina.travel<br/>support@lumina.travel</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Call Us</h4>
                <p className="text-white/70">+1 (800) 123-4567<br/>Available 24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
