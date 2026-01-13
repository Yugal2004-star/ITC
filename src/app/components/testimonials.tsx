import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "TravelWorld made our honeymoon in Bali absolutely magical! Every detail was perfectly planned. Highly recommend!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Best travel experience ever! The guides were knowledgeable, accommodations were top-notch, and the memories priceless.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Incredible service from start to finish. The team went above and beyond to ensure we had the trip of a lifetime!",
    avatar: "EW"
  }
];

export function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              onClick={() => toggleExpand(testimonial.id)}
              className={`bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                expandedId === testimonial.id ? 'scale-105 ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}