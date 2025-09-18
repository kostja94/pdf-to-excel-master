import { Button } from "@/components/ui/button";
import { Upload, FileText, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Convert PDF to <span className="text-primary">Excel</span> in Seconds
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Extract tables, data, and text from PDF files with AI-powered accuracy. 
            Transform your PDFs into editable Excel spreadsheets instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2 h-5 w-5" />
              Upload PDF File
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <FileText className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            ✓ Free to use • ✓ No registration required • ✓ Secure processing
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;