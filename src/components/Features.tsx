import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, Download, FileSpreadsheet, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Data Manipulation",
      description: "Clean and sort your data with simple prompts. Perform data cleaning, lookup, counting, merge & split sheets, and more with AI assistance."
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Ask questions in plain English and get instant answers directly in your spreadsheet cells using AI-powered functions."
    },
    {
      icon: Shield,
      title: "Real-Time Processing",
      description: "Process your Excel sheets and get results in seconds. Connect with databases, spreadsheets, and other data sources seamlessly."
    },
    {
      icon: FileSpreadsheet,
      title: "100+ Chart Types",
      description: "Generate more than 100 types of charts and graphs from your Excel sheets in just 10 seconds with AI assistance."
    },
    {
      icon: Download,
      title: "Convert PDFs to Excel",
      description: "Transform your PDFs into fully editable Excel spreadsheets in seconds with advanced AI-powered extraction."
    },
    {
      icon: Eye,
      title: "Visualize Your Data",
      description: "Upload your files and AIsheet.ai generates beautiful graphs and charts automatically, making data analysis effortless."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Power of AI in Sheets and Excel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create charts and uncover in-depth insights, streamlining your spreadsheets with AI-powered analysis and automation.
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