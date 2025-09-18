import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, BarChart3, PieChart, FileSpreadsheet, Brain, Filter } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Data Manipulation",
      description: "Clean and sort your data with simple prompts. Handle data cleaning, lookup, counting, merging & splitting sheets, and more."
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Transform your data into meaningful insights and discover patterns hidden in your spreadsheets."
    },
    {
      icon: PieChart,
      title: "AI Charts Maker",
      description: "Generate over 100 types of charts and graphs from your Excel sheets in just 10 seconds with AI-powered visualization."
    },
    {
      icon: FileSpreadsheet,
      title: "PDF to Excel Converter",
      description: "Convert your PDFs into fully editable Excel spreadsheets in seconds with high accuracy."
    },
    {
      icon: Brain,
      title: "Data Science",
      description: "Perform advanced data analysis and machine learning tasks directly within your spreadsheets using AI."
    },
    {
      icon: Filter,
      title: "Classify & Cleanse",
      description: "Automatically classify and clean your data, remove duplicates, and standardize formats with AI assistance."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
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