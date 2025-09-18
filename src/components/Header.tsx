import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import logoImage from "@/assets/aisheet-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="AISheet.ai" className="h-8 w-auto" />
          </div>
          
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a href="/pdf-to-excel" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                PDF to Excel
              </a>
              <a href="/chart-maker" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Chart Maker
              </a>
              <a href="/data-cleaning" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Data Cleaning
              </a>
              <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Pricing
              </a>
              <a href="/api" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                API
              </a>
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Blog
              </a>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="ghost">
              Login
            </Button>
            <Button variant="default">
              Sign Up
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;