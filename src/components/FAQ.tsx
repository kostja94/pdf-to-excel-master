import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is the PDF to Excel converter free to use?",
      answer: "Yes, our basic PDF to Excel conversion is completely free. You can convert multiple files without any cost or registration required."
    },
    {
      question: "What types of PDF files can be converted?",
      answer: "Our converter works with all PDF files containing tables, forms, and structured data. It handles both text-based and scanned PDFs with OCR technology."
    },
    {
      question: "How accurate is the conversion?",
      answer: "Our AI-powered technology achieves over 95% accuracy in most cases. Complex layouts and formatting are preserved to maintain data integrity."
    },
    {
      question: "Is my data secure during conversion?",
      answer: "Absolutely. All files are processed securely using encrypted connections and are automatically deleted from our servers after conversion."
    },
    {
      question: "What's the maximum file size supported?",
      answer: "You can upload PDF files up to 50MB in size. For larger files, consider splitting them into smaller documents first."
    },
    {
      question: "Can I convert password-protected PDFs?",
      answer: "Yes, you can convert password-protected PDFs. Simply enter the password when prompted during the upload process."
    },
    {
      question: "What formats can I download the converted file in?",
      answer: "You can download your converted data as Excel (.xlsx), CSV, or Google Sheets compatible formats for maximum compatibility."
    },
    {
      question: "Do you support batch conversion?",
      answer: "Yes, you can upload and convert multiple PDF files simultaneously to save time on large document processing tasks."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our PDF to Excel conversion service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;