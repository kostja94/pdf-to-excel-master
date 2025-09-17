import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileSpreadsheet, Database, Image, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ConverterLinks = () => {
  const converters = [
    {
      icon: FileText,
      title: "Word to Excel",
      description: "Convert Word documents and tables to Excel spreadsheets",
      link: "/word-to-excel",
      color: "text-blue-600"
    },
    {
      icon: Database,
      title: "CSV to Excel", 
      description: "Transform CSV files into formatted Excel workbooks",
      link: "/csv-to-excel",
      color: "text-green-600"
    },
    {
      icon: Image,
      title: "Image to Excel",
      description: "Extract data from images and convert to Excel format",
      link: "/image-to-excel", 
      color: "text-purple-600"
    },
    {
      icon: FileSpreadsheet,
      title: "Google Sheets to Excel",
      description: "Convert Google Sheets to Excel format seamlessly",
      link: "/sheets-to-excel",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            More Excel Converters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our full suite of conversion tools to transform any file format into Excel spreadsheets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {converters.map((converter, index) => (
            <Link key={index} to={converter.link}>
              <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-muted group-hover:bg-primary/10 transition-colors`}>
                    <converter.icon className={`h-6 w-6 ${converter.color} group-hover:text-primary transition-colors`} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {converter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4">
                    {converter.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                    Try Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConverterLinks;