import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PdfToExcel from "./pages/PdfToExcel";
import Pricing from "./pages/Pricing";
import Api from "./pages/Api";
import ChartMaker from "./pages/ChartMaker";
import DataCleaning from "./pages/DataCleaning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pdf-to-excel" element={<PdfToExcel />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/api" element={<Api />} />
          <Route path="/chart-maker" element={<ChartMaker />} />
          <Route path="/data-cleaning" element={<DataCleaning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
