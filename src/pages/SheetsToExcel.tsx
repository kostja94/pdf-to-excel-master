import { Button } from "@/components/ui/button";
import { Upload, FileText, ArrowRight } from "lucide-react";

const SheetsToExcel = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Convert Google Sheets to <span className="text-primary">Excel</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Seamlessly convert Google Sheets to Excel format while preserving formulas and formatting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2 h-5 w-5" />
              Connect Google Sheets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <FileText className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            ✓ Preserve formulas • ✓ Keep formatting • ✓ Multiple sheets support
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetsToExcel;