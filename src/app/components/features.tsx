import { Globe, Shield, Award, Headphones } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Globe,
    title: "500+ Destinations",
    description: "Explore amazing places across 6 continents with expert guides"
  },
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We guarantee the best prices with no hidden fees or charges"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as the #1 travel company by Travel Excellence Awards"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock to assist you"
  }
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tours" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience travel like never before with our premium services and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-card p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 transition-all duration-300 ${
                hoveredIndex === index ? 'bg-primary text-primary-foreground' : ''
              }`}>
                <feature.icon className={`h-8 w-8 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-primary-foreground' : 'text-primary'
                }`} />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}