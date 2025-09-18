import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, Download, FileSpreadsheet, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Extraction",
      description: "Advanced AI technology accurately identifies and extracts tables, data, and text from complex PDF layouts."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Convert your PDF files to Excel format in seconds, not minutes. Process multiple files simultaneously."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your files are processed securely and deleted automatically. We never store or share your documents."
    },
    {
      icon: FileSpreadsheet,
      title: "Perfect Formatting",
      description: "Maintain original table structure, formatting, and data relationships in the converted Excel file."
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Download as Excel (.xlsx), CSV, or Google Sheets compatible formats for maximum flexibility."
    },
    {
      icon: Eye,
      title: "Preview & Edit",
      description: "Preview extracted data before download and make adjustments to ensure perfect results."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our PDF to Excel Converter?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the most accurate and efficient PDF to Excel conversion with our advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;