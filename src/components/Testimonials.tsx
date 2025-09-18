import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Chen",
      handle: "@MikeChen",
      avatar: "/api/placeholder/40/40",
      content: "I would like to plug @Aisheet.ai, without which I would be much more miserable doing basic data analysis."
    },
    {
      name: "Sarah Johnson",
      handle: "@SarahJ_Data",
      avatar: "/api/placeholder/40/40",
      content: "As a data analyst, aisheet.ai has become an essential part of my workflow. The ability to extract insights and classify data using AI functions directly in sheets is a game-changer. Highly recommended!"
    },
    {
      name: "Olivia",
      handle: "@OliviaAnalytics",
      avatar: "/api/placeholder/40/40", 
      content: "@Aisheet.ai is magical. Makes you feel like a spreadsheet wizard!"
    },
    {
      name: "Isabella",
      handle: "@IsabellaData",
      avatar: "/api/placeholder/40/40",
      content: "You can use aisheet.ai for virtually any type of business or scientific data, or simply to categorize survey responses or interpret spreadsheets. It's remarkably versatile."
    },
    {
      name: "James",
      handle: "@JamesExcel",
      avatar: "/api/placeholder/40/40",
      content: "Found this gem today @aisheet.ai Using it to merge a couple excel files. Beautiful home page too #excel #ai."
    },
    {
      name: "Sophia",
      handle: "@SophiaSheets",
      avatar: "/api/placeholder/40/40",
      content: "Holy moly @aisheet.ai changed my life! The AI functions are incredibly intuitive and save me hours of manual work every week."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by a Community of 2,000,000+ Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about AIsheet.ai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <span className="text-muted-foreground text-sm">{testimonial.handle}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;