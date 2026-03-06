import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="text-center max-w-2xl md:text-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-primary">Encuentra tu compañero perfecto</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Dale una segunda oportunidad a una mascota
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Miles de perros y gatos esperan encontrar un hogar lleno de amor.
            Adopta, no compres, y cambia una vida para siempre.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-normal flex-col md:flex-row">
            <Button size="lg" asChild>
              <Link to="/#pets">Ver mascotas</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/publicar">Publicar mascota</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
