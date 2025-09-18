import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Cog, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      step: "1",
      title: "Connect Your Data Sources",
      description: "Connect with data sources like databases, spreadsheets, and more. Upload your Excel or Google Sheets files."
    },
    {
      icon: Cog,
      step: "2", 
      title: "Ask for Analysis",
      description: "Real-time data processing for Excel sheets. Ask questions in plain English and get AI-powered insights instantly."
    },
    {
      icon: Download,
      step: "3",
      title: "Visualize Your Data",
      description: "AIsheet.ai generates beautiful graphs and charts for you automatically. Export results in your preferred format."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Analyze Sheets with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ask for what you want and AIsheet.ai analyzes the data for you in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;