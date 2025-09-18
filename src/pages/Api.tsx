import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code, Copy, ExternalLink, Key, Shield, Zap } from "lucide-react";

const Api = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              AI Sheet API
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Integrate AI Sheet's powerful Excel data processing capabilities into your applications with our comprehensive API. 
              Full documentation and code examples included.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Zap className="h-4 w-4 mr-2" />
                GPT-4 Powered
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Enterprise Ready
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Code className="h-4 w-4 mr-2" />
                RESTful API
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Key className="h-5 w-5 mr-2" />
                Get API Key
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">API Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-6 w-6 mr-2 text-primary" />
                    Excel Processing
                  </CardTitle>
                  <CardDescription>
                    AI-powered Excel file analysis, data manipulation, and visualization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Data analysis and insights</li>
                    <li>• Chart and graph generation</li>
                    <li>• Formula optimization</li>
                    <li>• Data cleaning and validation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-primary" />
                    File Conversion
                  </CardTitle>
                  <CardDescription>
                    Convert between multiple file formats with AI enhancement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• PDF to Excel conversion</li>
                    <li>• Image to Excel OCR</li>
                    <li>• CSV/JSON data transformation</li>
                    <li>• Google Sheets integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-primary" />
                    Advanced AI
                  </CardTitle>
                  <CardDescription>
                    Leverage GPT-4 for intelligent data processing and analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Natural language queries</li>
                    <li>• Automated report generation</li>
                    <li>• Pattern recognition</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">API Documentation</h2>
            
            <Tabs defaultValue="quickstart" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>

              <TabsContent value="quickstart" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Authentication</CardTitle>
                      <CardDescription>
                        All API requests require authentication using your API key
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">Authorization Header</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY")}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code>Authorization: Bearer YOUR_API_KEY</code>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Base URL</CardTitle>
                      <CardDescription>
                        All API endpoints are relative to the base URL
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">Base URL</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard("https://api.aisheet.ai/v1")}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code>https://api.aisheet.ai/v1</code>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="endpoints" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Badge variant="default" className="mr-2">POST</Badge>
                        Process Excel File
                      </CardTitle>
                      <CardDescription>/excel/process</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">cURL Example</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(`curl -X POST https://api.aisheet.ai/v1/excel/process \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@spreadsheet.xlsx" \\
  -F "action=analyze"`)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre>{`curl -X POST https://api.aisheet.ai/v1/excel/process \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@spreadsheet.xlsx" \\
  -F "action=analyze"`}</pre>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Parameters:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><code>file</code> - Excel file to process (required)</li>
                          <li><code>action</code> - Processing action: analyze, visualize, clean (required)</li>
                          <li><code>prompt</code> - Custom AI prompt for analysis (optional)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Badge variant="secondary" className="mr-2">POST</Badge>
                        Convert PDF to Excel
                      </CardTitle>
                      <CardDescription>/convert/pdf-to-excel</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">cURL Example</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(`curl -X POST https://api.aisheet.ai/v1/convert/pdf-to-excel \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@document.pdf"`)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre>{`curl -X POST https://api.aisheet.ai/v1/convert/pdf-to-excel \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@document.pdf"`}</pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Badge variant="outline" className="mr-2">GET</Badge>
                        Get Processing Status
                      </CardTitle>
                      <CardDescription>/jobs/&#123;job_id&#125;/status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">cURL Example</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard("curl -X GET https://api.aisheet.ai/v1/jobs/12345/status \\\n  -H \"Authorization: Bearer YOUR_API_KEY\"")}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre>curl -X GET https://api.aisheet.ai/v1/jobs/12345/status \<br />  -H "Authorization: Bearer YOUR_API_KEY"</pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="examples" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>JavaScript/Node.js Example</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">JavaScript</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(`const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('action', 'analyze');

const response = await fetch('https://api.aisheet.ai/v1/excel/process', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const result = await response.json();
console.log(result);`)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre>{`const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('action', 'analyze');

const response = await fetch('https://api.aisheet.ai/v1/excel/process', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const result = await response.json();
console.log(result);`}</pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Python Example</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">Python</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(`import requests

url = "https://api.aisheet.ai/v1/excel/process"
headers = {"Authorization": "Bearer YOUR_API_KEY"}

with open("spreadsheet.xlsx", "rb") as file:
    files = {"file": file}
    data = {"action": "analyze"}
    
    response = requests.post(url, headers=headers, files=files, data=data)
    result = response.json()
    print(result)`)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre>{`import requests

url = "https://api.aisheet.ai/v1/excel/process"
headers = {"Authorization": "Bearer YOUR_API_KEY"}

with open("spreadsheet.xlsx", "rb") as file:
    files = {"file": file}
    data = {"action": "analyze"}
    
    response = requests.post(url, headers=headers, files=files, data=data)
    result = response.json()
    print(result)`}</pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for small projects</CardDescription>
                      <div className="text-3xl font-bold">$0.10<span className="text-lg font-normal text-muted-foreground">/request</span></div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 1,000 requests/month included</li>
                        <li>• Basic file processing</li>
                        <li>• Standard support</li>
                        <li>• 10MB file size limit</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-primary">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Most Popular</Badge>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>For growing businesses</CardDescription>
                      <div className="text-3xl font-bold">$0.05<span className="text-lg font-normal text-muted-foreground">/request</span></div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 10,000 requests/month included</li>
                        <li>• Advanced AI features</li>
                        <li>• Priority support</li>
                        <li>• 50MB file size limit</li>
                        <li>• Custom prompts</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                      <div className="text-3xl font-bold">Custom<span className="text-lg font-normal text-muted-foreground">/pricing</span></div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Unlimited requests</li>
                        <li>• White-label options</li>
                        <li>• Dedicated support</li>
                        <li>• Custom file size limits</li>
                        <li>• SLA guarantees</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I get started with the AI Sheet API?</AccordionTrigger>
                <AccordionContent>
                  Getting started is simple! First, sign up for an account and generate your API key. Then, you can immediately start making requests to our endpoints. We recommend starting with our Quick Start guide and trying out the Excel processing endpoint with a sample file.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What file formats are supported?</AccordionTrigger>
                <AccordionContent>
                  We support a wide range of file formats including Excel (.xlsx, .xls), CSV, PDF, and various image formats (PNG, JPG, PDF) for OCR conversion. Google Sheets can also be processed through our API by sharing the sheet URL.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What are the rate limits?</AccordionTrigger>
                <AccordionContent>
                  Rate limits depend on your subscription plan. The Starter plan allows up to 100 requests per hour, Professional allows 1,000 requests per hour, and Enterprise plans have custom rate limits. All plans include burst capacity for temporary spikes in usage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How secure is my data?</AccordionTrigger>
                <AccordionContent>
                  We take data security seriously. All file uploads are encrypted in transit and at rest. Files are automatically deleted after processing is complete (typically within 24 hours). We are SOC 2 compliant and follow industry best practices for data protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I customize the AI analysis?</AccordionTrigger>
                <AccordionContent>
                  Yes! Our API supports custom prompts that allow you to specify exactly what kind of analysis you want. You can ask for specific insights, request particular chart types, or instruct the AI to focus on certain data patterns. This feature is available on Professional and Enterprise plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What kind of support is available?</AccordionTrigger>
                <AccordionContent>
                  We offer different levels of support based on your plan. Starter plans include community support and documentation. Professional plans get email support with 24-hour response times. Enterprise customers receive dedicated support with phone access and custom SLAs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers already using AI Sheet API to power their applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Get Your API Key
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Api;