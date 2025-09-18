import { FileSpreadsheet } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileSpreadsheet className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">AISheet</span>
            </div>
            <p className="text-muted-foreground">
              Convert PDF files to Excel spreadsheets with AI-powered accuracy and speed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/pdf-to-excel" className="hover:text-foreground transition-colors">PDF to Excel</a></li>
              <li><a href="/chart-maker" className="hover:text-foreground transition-colors">Chart Maker</a></li>
              <li><a href="/data-cleaning" className="hover:text-foreground transition-colors">Data Cleaning</a></li>
              <li><a href="/api" className="hover:text-foreground transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AISheet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;