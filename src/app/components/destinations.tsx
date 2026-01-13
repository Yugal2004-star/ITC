import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Star } from "lucide-react";
import { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY4MTAyMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$1,299",
    duration: "7 Days",
    rating: 4.9,
    tours: "12 Tours"
  },
  {
    id: 2,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjgwOTg2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$2,499",
    duration: "10 Days",
    rating: 4.8,
    tours: "8 Tours"
  },
  {
    id: 3,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1716481631637-e2d4fd2456e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjB0cmF2ZWx8ZW58MXx8fHwxNzY4MTIzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$1,899",
    duration: "5 Days",
    rating: 4.9,
    tours: "15 Tours"
  },
  {
    id: 4,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1729673766564-618fce6c835e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBob3RlbHxlbnwxfHx8fDE3NjgwMzUwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$3,299",
    duration: "8 Days",
    rating: 5.0,
    tours: "6 Tours"
  }
];

export function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);

  const handleViewDetails = (id: number, name: string) => {
    setSelectedDestination(id);
    alert(`Viewing details for ${name}`);
    // Here you would navigate to destination details page
  };

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Popular Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collection of the world's most breathtaking destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                selectedDestination === destination.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.tours}</span>
                </div>
                <h3 className="text-xl mb-2">{destination.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl text-primary">{destination.price}</span>
                    <span className="text-sm text-muted-foreground"> / person</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{destination.duration}</span>
                </div>
                <button 
                  onClick={() => handleViewDetails(destination.id, destination.name)}
                  className="w-full mt-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}