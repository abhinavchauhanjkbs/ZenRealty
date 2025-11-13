import { Phone, Mail, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { siteData } from "@/data/siteData";

const Contact = () => {
  const { contact } = siteData;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {contact.title}
              <span className="text-primary italic">{contact.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              {contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg text-muted-foreground">{contact.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg text-muted-foreground">{contact.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg text-muted-foreground">{contact.website}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-secondary/30 p-8 rounded-2xl">
            <form className="space-y-6">
              <Input
                placeholder={contact.form.namePlaceholder}
                className="bg-white border-border"
              />
              <Input
                type="email"
                placeholder={contact.form.emailPlaceholder}
                className="bg-white border-border"
              />
              <Select>
                <SelectTrigger className="bg-white border-border">
                  <SelectValue placeholder={contact.form.requirementsPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy Property</SelectItem>
                  <SelectItem value="sell">Sell Property</SelectItem>
                  <SelectItem value="lease">Lease Property</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder={contact.form.messagePlaceholder}
                className="bg-white border-border min-h-32"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                {contact.form.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
