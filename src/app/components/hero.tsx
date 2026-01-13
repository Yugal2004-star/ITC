import { Search, MapPin, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Hero() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    guests: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search data:', searchData);
    // Handle search logic here
    alert(`Searching for trips to ${searchData.location || 'anywhere'} for ${searchData.guests || 'guests'}`);
  };

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.pexels.com/photos/2093104/pexels-photo-2093104.jpeg"
          alt="Scenic vacation destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Explore the World
          <br />
          <span className="text-white/90">Your Next Adventure Awaits</span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Discover amazing destinations, create unforgettable memories, and experience the journey of a lifetime
        </p>

        {/* Search Card */}
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex-1 text-left">
                <label className="text-xs text-muted-foreground">Location</label>
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  value={searchData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
              <div className="flex-1 text-left">
                <label className="text-xs text-muted-foreground">Check in</label>
                <input 
                  type="date" 
                  placeholder="Add dates"
                  value={searchData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Users className="h-5 w-5 text-primary" />
              <div className="flex-1 text-left">
                <label className="text-xs text-muted-foreground">Guests</label>
                <input 
                  type="number" 
                  placeholder="Add guests"
                  min="1"
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground"
                />
              </div>
            </div>
            
            <button type="submit" className="flex items-center justify-center gap-2 p-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}