import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, GraduationCap, PieChart, Users, Calculator, Briefcase } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: "Financial Reports",
      description: "Convert financial statements, invoices, and budget reports from PDF to Excel for analysis and calculations.",
      industry: "Finance & Accounting"
    },
    {
      icon: GraduationCap,
      title: "Academic Research",
      description: "Extract data tables from research papers, academic journals, and scientific publications for further analysis.",
      industry: "Education & Research"
    },
    {
      icon: PieChart,
      title: "Business Analytics",
      description: "Transform survey results, market research data, and business reports into actionable Excel spreadsheets.",
      industry: "Business Intelligence"
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Convert employee records, payroll documents, and HR forms from PDF format to Excel for database management.",
      industry: "Human Resources"
    },
    {
      icon: Calculator,
      title: "Inventory Management",
      description: "Extract product lists, inventory reports, and stock data from PDF catalogs into Excel for inventory tracking.",
      industry: "Retail & Supply Chain"
    },
    {
      icon: Briefcase,
      title: "Legal Documents",
      description: "Convert contract tables, legal schedules, and compliance reports to Excel format for easier review and analysis.",
      industry: "Legal & Compliance"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perfect for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our PDF to Excel converter is trusted by professionals across industries to streamline their data extraction workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <div className="text-sm text-primary font-medium">{useCase.industry}</div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>500,000+ documents converted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>99.9% uptime guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;