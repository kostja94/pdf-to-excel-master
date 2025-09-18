import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Promotional Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-800 border-orange-200">
            <Sparkles className="w-4 h-4 mr-2" />
            One dollar. One month. GPT-4o powered sheet analysis
          </Badge>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">AIsheet.ai</h1>
            <BarChart3 className="w-12 h-12 text-primary ml-4" />
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI agent for <span className="text-primary">Excel & Google Sheets</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Analyze your sheets, ask questions in plain English, and get insights in seconds.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            No coding required. Data analysis at a steal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Brain className="mr-2 h-5 w-5" />
              Start Analyzing
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Try Demo
            </Button>
          </div>

          <div className="text-lg font-semibold text-foreground mb-4">
            Loved by 2,000,000+ users and trusted by individuals at
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;