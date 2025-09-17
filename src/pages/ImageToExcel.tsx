import { Button } from "@/components/ui/button";
import { Upload, FileText, ArrowRight } from "lucide-react";

const ImageToExcel = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Convert Image to <span className="text-primary">Excel</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Extract data from images and screenshots using OCR technology to create Excel spreadsheets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2 h-5 w-5" />
              Upload Image
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <FileText className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            ✓ OCR technology • ✓ Supports JPG, PNG, TIFF • ✓ Table recognition
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToExcel;