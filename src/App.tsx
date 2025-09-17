import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WordToExcel from "./pages/WordToExcel";
import CsvToExcel from "./pages/CsvToExcel";
import ImageToExcel from "./pages/ImageToExcel";
import SheetsToExcel from "./pages/SheetsToExcel";
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
          <Route path="/word-to-excel" element={<WordToExcel />} />
          <Route path="/csv-to-excel" element={<CsvToExcel />} />
          <Route path="/image-to-excel" element={<ImageToExcel />} />
          <Route path="/sheets-to-excel" element={<SheetsToExcel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
