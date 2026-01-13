import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Destinations } from "./components/destinations";
import { Features } from "./components/features";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="size-full bg-background">
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
