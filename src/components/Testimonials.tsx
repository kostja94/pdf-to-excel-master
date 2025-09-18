import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Chen",
      handle: "@MikeChen",
      content: "I would like to plug @Aisheet.ai, without which I would be much more miserable doing basic data analysis.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      handle: "@SarahJ",
      content: "As a data analyst, aisheet.ai has become an essential part of my workflow. The ability to extract insights and classify data using AI functions directly in sheets is a game-changer. Highly recommended!",
      avatar: "/placeholder.svg"
    },
    {
      name: "Alex Rivera", 
      handle: "@AlexR",
      content: "Aisheet.ai has revolutionized how I work with data in sheets. The AI functions are incredibly intuitive and save me hours of manual work every week. I can generate content, analyze trends, and create reports with just simple formulas.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Olivia",
      handle: "@Olivia",
      content: "@Aisheet.ai is magical. Makes you feel like a data wizard.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Sophia",
      handle: "@Sophia",
      content: "Holy moly @aisheet.ai changed my life! The ease of use is incredible.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Isabella",
      handle: "@Isabella",
      content: "You can use aisheet.ai for virtually any type of business or scientific data, or simply to categorize survey responses or interpret spreadsheets. It's remarkably versatile.",
      avatar: "/placeholder.svg"
    },
    {
      name: "James",
      handle: "@James",
      content: "Found this gem today @aisheet.ai Using it to merge a couple excel files. Beautiful home page too #excel #ai.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by a community of 2,000,000+ users
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <span className="text-muted-foreground text-sm">{testimonial.handle}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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