import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart, PieChart, TrendingUp, Zap, Upload, Download, Palette, Clock } from "lucide-react";

const ChartMaker = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Unlock the Power of Charts and Graphs with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Charts and graphs are the most effective way to turn raw numbers into clear insights. 
              With AI-powered tools, you can create professional charts and graphs in seconds, making 
              data visualization faster and more engaging than ever.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Generation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                Results in Seconds
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Palette className="h-4 w-4 mr-2" />
                Fully Customizable
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Upload className="h-5 w-5 mr-2" />
                Try Free Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Examples
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Charts Feature */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Create Interactive Charts</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore your data with clickable, dynamic visuals that let you drill down to uncover deeper insights.
                Turn static numbers into engaging, interactive experiences.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Create bar and line charts to show profit levels and growth rates of different products
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Real-time data visualization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Interactive drill-down capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Professional styling and themes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Multiple export formats</span>
                  </div>
                </div>
                <Button className="mt-6">
                  Start Creating Charts
                </Button>
              </div>
              <div className="bg-muted/50 p-8 rounded-lg border">
                <div className="text-center mb-4">
                  <h4 className="font-semibold">Total AI-Ready Degrees Granted (2018-2023)</h4>
                </div>
                <div className="h-64 flex items-end justify-between space-x-2 px-4">
                  <div className="bg-primary/70 w-12 h-32 rounded-t"></div>
                  <div className="bg-primary/80 w-12 h-40 rounded-t"></div>
                  <div className="bg-primary/90 w-12 h-48 rounded-t"></div>
                  <div className="bg-primary w-12 h-56 rounded-t"></div>
                  <div className="bg-primary w-12 h-60 rounded-t"></div>
                  <div className="bg-primary w-12 h-64 rounded-t"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2 px-4">
                  <span>2018</span>
                  <span>2019</span>
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How to Create Stunning Charts in Seconds</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Upload Your Data</CardTitle>
                  <CardDescription>
                    Simply upload your data in CSV, XLSX, or any other supported format
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your files or connect to cloud storage services like Google Sheets
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Generate Your Chart</CardTitle>
                  <CardDescription>
                    With AIsheet.ai's AI Graph Maker, your chart will be ready in just seconds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes your data and suggests the best visualization type automatically
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Customize & Download</CardTitle>
                  <CardDescription>
                    Customize your chart, interact with it to gain deeper insights, and download it in multiple formats
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Export as PNG, JPEG, PDF, or share directly with your team
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Chart Types */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types of Charts & Graphs</h2>
              <p className="text-xl text-muted-foreground">
                Create sleek looking data visualizations for any use case
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart className="h-8 w-8 text-primary" />
                    <CardTitle>Bar Chart</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A bar chart in Excel is perfect for comparing values across categories. 
                    Use it to track sales, project milestones, or survey results.
                  </p>
                  <div className="flex space-x-1 h-20 items-end">
                    <div className="bg-primary/70 w-8 h-12 rounded-t"></div>
                    <div className="bg-primary/80 w-8 h-16 rounded-t"></div>
                    <div className="bg-primary w-8 h-20 rounded-t"></div>
                    <div className="bg-primary/60 w-8 h-8 rounded-t"></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <PieChart className="h-8 w-8 text-primary" />
                    <CardTitle>Pie Chart</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our Excel pie chart generator makes it easy to present percentages 
                    and ratios in a clean, professional format.
                  </p>
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary via-primary/70 to-primary/40"></div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <CardTitle>Line Chart</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A line chart is essential for spotting trends over time. Whether analyzing 
                    monthly revenue, website traffic, or performance metrics.
                  </p>
                  <div className="h-20 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <polyline 
                        points="0,35 20,30 40,20 60,15 80,10 100,5" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose AI */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose AI for Charts and Graphs</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Traditional chart-making can be time-consuming, requiring manual setup, formatting, and adjustments. 
                With AI-powered tools, you can skip the repetitive work and focus on insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-8">
                  AI instantly generates accurate, professional-looking visuals from your raw data, 
                  ensuring clarity and speed. By choosing AI for charts and graphs, you also gain:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Faster Results</h4>
                      <p className="text-muted-foreground">Generate polished visuals in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Easy Customization</h4>
                      <p className="text-muted-foreground">Adjust colors, labels, and styles without complex settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Smarter Insights</h4>
                      <p className="text-muted-foreground">AI highlights patterns you might miss manually</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Scalability</h4>
                      <p className="text-muted-foreground">Handle large datasets with no extra effort</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background p-8 rounded-lg border shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Chart Generation Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div className="h-2 bg-primary/20 rounded flex-1">
                      <div className="h-full bg-primary rounded w-full"></div>
                    </div>
                    <span className="text-sm">Data Upload</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div className="h-2 bg-primary/20 rounded flex-1">
                      <div className="h-full bg-primary rounded w-4/5"></div>
                    </div>
                    <span className="text-sm">AI Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div className="h-2 bg-primary/20 rounded flex-1">
                      <div className="h-full bg-primary rounded w-3/5"></div>
                    </div>
                    <span className="text-sm">Chart Generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <div className="h-2 bg-primary/20 rounded flex-1"></div>
                    <span className="text-sm text-muted-foreground">Customization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I create a chart?</AccordionTrigger>
                <AccordionContent>
                  Simply upload your data file, choose your desired chart type (bar, pie, line, area, combo), 
                  and let AI Graph Maker generate it for you in seconds. Our intuitive interface guides you 
                  through each step of the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize my charts?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can adjust colors, labels, axis settings, and more to tailor the chart to your 
                  specific needs. Our customization options include themes, fonts, animations, and branding 
                  elements to match your organization's style.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What types of charts can I create?</AccordionTrigger>
                <AccordionContent>
                  You can create bar charts, pie charts, line charts, area charts, combo charts, and more, 
                  with over 100 types to choose from. We also support advanced visualization types like 
                  heatmaps, scatter plots, waterfall charts, and interactive dashboards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How can I download my charts?</AccordionTrigger>
                <AccordionContent>
                  After creating your chart, you can download it in PNG, JPEG, or PDF format, or share it 
                  directly with colleagues. We also support SVG format for vector graphics and provide 
                  embed codes for websites and presentations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What data formats do you support?</AccordionTrigger>
                <AccordionContent>
                  We support all major data formats including Excel (.xlsx, .xls), CSV, JSON, Google Sheets, 
                  and can connect to databases and APIs. You can also paste data directly or import from 
                  cloud storage services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use enterprise-grade security measures including encryption in transit and 
                  at rest, secure data centers, and comply with GDPR and other privacy regulations. Your data 
                  is automatically deleted after processing unless you choose to save it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Start Visualizing Your Data Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your raw data into compelling visual stories that drive decisions and inspire action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Upload className="h-5 w-5 mr-2" />
                Try Free Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Sample Charts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ChartMaker;