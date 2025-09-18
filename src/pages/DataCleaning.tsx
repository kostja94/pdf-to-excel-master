import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Database, Filter, BarChart3, Zap, Upload, Download, Users, Shield, Clock, RefreshCw } from "lucide-react";

const DataCleaning = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Classify and Cleanse
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
              Build No-Code Dashboards with Classify and Cleanse
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Harness the power of Classify and Cleanse to turn messy data into crystal-clear insights. 
              With AI-powered data classification and cleansing, you can instantly build no-code dashboards, 
              drag-and-drop custom layouts, and track real-time metrics—all without writing a single line of code.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Database className="h-4 w-4 mr-2" />
                No-Code Solution
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Cleaning
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Real-Time Dashboards
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Upload className="h-5 w-5 mr-2" />
                Start Cleaning Data
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Explore More
              </Button>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How to Use Classify and Cleanse</h2>
            
            <div className="grid md:grid-cols-5 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">1. Upload Your Data</CardTitle>
                  <CardDescription>
                    Excel, CSV, or Google Sheets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Support for all major data formats and cloud integrations
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Filter className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">2. Apply Classify & Cleanse</CardTitle>
                  <CardDescription>
                    AI automatically cleans and organizes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Remove duplicates, errors, and inconsistencies automatically
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">3. Build Dashboards</CardTitle>
                  <CardDescription>
                    Generate live dashboards instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use natural language commands to create visualizations
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <RefreshCw className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">4. Customize Layout</CardTitle>
                  <CardDescription>
                    Drag & drop to rearrange
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organize KPIs, charts, and widgets with flexible layouts
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">5. Export Insights</CardTitle>
                  <CardDescription>
                    Share professional reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    One-click sharing across teams and stakeholders
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Classify and Cleanse</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="h-8 w-8 text-primary" />
                    <CardTitle>Natural Language Dashboard Creation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simply type a question, and Classify & Cleanse transforms it into a live, 
                    interactive dashboard. No technical skills required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <RefreshCw className="h-8 w-8 text-primary" />
                    <CardTitle>Drag-and-Drop Customization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Organize your KPIs, charts, and metrics in seconds with flexible layouts. 
                    Build the perfect dashboard for your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Filter className="h-8 w-8 text-primary" />
                    <CardTitle>Automated Data Cleansing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Remove duplicates, errors, and inconsistencies while data is automatically 
                    classified into meaningful categories.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <CardTitle>Real-Time Business Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track sales, performance, or financial metrics as Classify & Cleanse 
                    keeps dashboards in sync with live data sources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                    <CardTitle>Zero-Code Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No technical background required—just clean, classified, and actionable data. 
                    Focus on insights, not implementation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle>Enterprise-Grade Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your data is protected with advanced security measures, compliance standards, 
                    and privacy controls built for enterprise use.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Industry Applications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Healthcare</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Classify patient data and cleanse clinical records for accurate reporting 
                    and improved patient outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Retail</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Remove duplicate SKUs, classify product categories, and monitor store 
                    performance with real-time dashboards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clean student performance data, classify test scores, and generate 
                    real-time dashboards for administrators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Classify bug reports, cleanse user feedback, and visualize trends 
                    instantly for better product decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Visualization */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Data Transformation Process</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  From Messy Data to Business Intelligence
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Database className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-red-700">Before: Messy Data</h4>
                      <p className="text-muted-foreground text-sm">Duplicates, errors, inconsistent formats, missing values</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-px h-8 bg-primary"></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Filter className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-blue-700">AI Processing</h4>
                      <p className="text-muted-foreground text-sm">Classification, cleansing, validation, standardization</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-px h-8 bg-primary"></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-green-700">After: Clean Insights</h4>
                      <p className="text-muted-foreground text-sm">Organized data, interactive dashboards, actionable insights</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background p-8 rounded-lg border shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Real-Time Dashboard Preview</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary/10 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-primary">98.5%</div>
                      <div className="text-xs text-muted-foreground">Data Quality</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-green-600">1.2M</div>
                      <div className="text-xs text-muted-foreground">Records Cleaned</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-blue-600">45</div>
                      <div className="text-xs text-muted-foreground">Categories</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/40 rounded flex items-end justify-between p-4">
                    <div className="bg-primary w-4 h-16 rounded-t"></div>
                    <div className="bg-primary w-4 h-20 rounded-t"></div>
                    <div className="bg-primary w-4 h-24 rounded-t"></div>
                    <div className="bg-primary w-4 h-12 rounded-t"></div>
                    <div className="bg-primary w-4 h-28 rounded-t"></div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    Live dashboard updating in real-time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Q&A: Everything About Classify and Cleanse</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do I need coding skills to use Classify & Cleanse?</AccordionTrigger>
                <AccordionContent>
                  No, Classify & Cleanse is 100% no-code. You can build dashboards with natural language 
                  and drag-and-drop tools. Our intuitive interface is designed for business users, analysts, 
                  and anyone who works with data, regardless of technical background.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How accurate is the data cleansing?</AccordionTrigger>
                <AccordionContent>
                  The AI ensures that errors, duplicates, and inconsistencies are removed automatically, 
                  giving you clean, reliable data every time. Our algorithms achieve 98.5%+ accuracy rates 
                  and continuously improve through machine learning. You can also review and approve 
                  changes before they're applied.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I connect Classify & Cleanse to live data sources?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can integrate real-time data streams and watch your dashboards update instantly. 
                  We support connections to databases, APIs, cloud storage, and popular business applications 
                  like Salesforce, HubSpot, and Google Analytics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What types of data problems can you solve?</AccordionTrigger>
                <AccordionContent>
                  We can handle duplicate records, missing values, inconsistent formatting, data type 
                  mismatches, outliers, and classification errors. Our AI also standardizes data formats, 
                  validates entries against business rules, and enriches datasets with additional context.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How does the natural language dashboard creation work?</AccordionTrigger>
                <AccordionContent>
                  Simply type questions like "Show me sales by region this quarter" or "Create a chart 
                  of customer satisfaction scores." Our AI understands your intent, processes your data, 
                  and generates the appropriate visualizations automatically. You can refine results 
                  with follow-up questions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Can I collaborate with my team on dashboards?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! You can share dashboards with team members, set up role-based access controls, 
                  and collaborate in real-time. Comments, annotations, and version history help teams work 
                  together effectively on data analysis and reporting.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Data Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              With Classify and Cleanse, your business gains faster decision-making, more accurate reporting, 
              and a complete no-code data intelligence solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Upload className="h-5 w-5 mr-2" />
                Start Cleaning Data
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DataCleaning;