import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      originalPrice: null,
      period: "",
      badge: null,
      description: "Perfect for getting started",
      features: [
        "10 conversations per day",
        "50MB file storage",
        "Convert PDF to Excel",
        "Convert Images to Excel", 
        "Download editable Excel files",
        "Access all premium AI commands",
        "Access to 100+ AI Functions",
        "Generate 500+ AI-powered charts",
        "Free access to all tutorials",
        "Standard customer support"
      ]
    },
    {
      name: "Monthly",
      price: "$1.00",
      originalPrice: "$25.90",
      period: "/month",
      badge: "Initial trial experience",
      description: "Perfect for trying our premium features",
      features: [
        "30 messages per day",
        "50MB file storage", 
        "PDF to Excel - 10 pages/month",
        "Image to Excel - 10 pages/month",
        "Saved prompts",
        "Access to Advanced Reasoning",
        "Free use of Advanced Prompts",
        "Free use of 100+ Functions",
        "Free use of 500+ Charts",
        "VIP Customer Service"
      ]
    },
    {
      name: "Yearly",
      price: "$159.00",
      originalPrice: "$329.90", 
      period: "/year",
      badge: "Most Popular",
      popular: true,
      description: "Best value for power users",
      features: [
        "100 messages per day",
        "200MB file storage",
        "PDF to Excel - 20 pages/month", 
        "Image to Excel - 20 pages/month",
        "Saved prompts",
        "Access to Advanced Reasoning",
        "Free use of Advanced Prompts",
        "Free use of 100+ Functions", 
        "Free use of 500+ Charts",
        "VIP Customer Service"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated amount immediately. When downgrading, the change will take effect at the end of your current billing cycle."
    },
    {
      question: "What happens if I exceed my monthly limits?",
      answer: "If you exceed your plan limits, you can either upgrade to a higher plan or wait until the next month when your limits reset. We'll notify you when you're approaching your limits."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with our service, contact our support team for a full refund."
    },
    {
      question: "What file formats do you support?",
      answer: "We support PDF and image files (PNG, JPG, JPEG) for conversion to Excel. Output formats include Excel (.xlsx), CSV, and Google Sheets compatible files."
    },
    {
      question: "How accurate is the AI conversion?",
      answer: "Our GPT-4o powered AI achieves over 95% accuracy in most cases. Complex layouts may require minor manual adjustments, but the AI handles tables, text, and data structures very effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              AI Sheet Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Use AI to power your data analysis. Start for free.
            </p>
            
            {/* Promotional Banner */}
            <div className="flex justify-center mb-12">
              <Badge variant="secondary" className="px-6 py-3 text-lg font-medium bg-orange-100 text-orange-800 border-orange-200">
                <Sparkles className="w-5 h-5 mr-2" />
                One Dollar. One Month. GPT-4o Powered Sheet Analysis.
              </Badge>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant={plan.popular ? "default" : "secondary"} className="px-3 py-1">
                        {plan.popular && <Star className="w-4 h-4 mr-1" />}
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {plan.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          Original Price {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.price === "$0" ? "Get Started Free" : "Choose Plan"}
                    </Button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our pricing and features
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Data Analysis?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join over 2 million users who trust AISheet.ai for their spreadsheet needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;