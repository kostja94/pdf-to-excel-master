import { Button } from "@/components/ui/button";
import { Upload, FileText, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">🔥 One dollar. One month. GPT-4o powered sheet analysis</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI Agent for <span className="text-primary">Excel</span> & <span className="text-primary">Google Sheets</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Analyze your sheets, ask questions in plain English, and get insights in seconds. 
            No coding required. Data analysis at a steal.
          </p>
          
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-4">Loved by 2,000,000+ users and trusted by individuals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-2xl font-bold">Google</span>
              <span className="text-2xl font-bold">Microsoft</span>
              <span className="text-2xl font-bold">Apple</span>
              <span className="text-2xl font-bold">Tesla</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2 h-5 w-5" />
              Start Analyzing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <FileText className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary font-bold">📊</span>
              </div>
              <span className="text-sm font-medium">Data manipulation</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary font-bold">💡</span>
              </div>
              <span className="text-sm font-medium">Insights</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary font-bold">📈</span>
              </div>
              <span className="text-sm font-medium">Charts & Graphs</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary font-bold">🔄</span>
              </div>
              <span className="text-sm font-medium">Convert tools</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary font-bold">🔬</span>
              </div>
              <span className="text-sm font-medium">Data science</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-primary font-bold">🧹</span>
              </div>
              <span className="text-sm font-medium">Classify & Cleanse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;