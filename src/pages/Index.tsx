import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Hero from "@/components/Hero";
import PetCard from "@/components/PetCard";
import PetFilters from "@/components/PetFilters";
import { usePetStore } from "@/store/petStore";

const Index = () => {
  const getFilteredPets = usePetStore((state) => state.getFilteredPets);
  const filteredPets = getFilteredPets();

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold text-foreground">AdoptaPet</span>
          </Link>
          <Button asChild>
            <Link to="/publicar">
              <PlusCircle className="mr-2 h-4 w-4" />
              Publicar mascota
            </Link>
          </Button>
        </div>
      </header>

      <Hero />

      <section id="pets" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Mascotas disponibles para adopción
            </h2>
            <p className="text-lg text-muted-foreground">
              Encuentra a tu nuevo mejor amigo entre nuestras mascotas disponibles
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-bold text-foreground">Filtros</h2>
              <PetFilters />
            </aside>

            <div>
              {filteredPets.length === 0 ? (
                <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border">
                  <div className="text-center">
                    <p className="text-lg text-muted-foreground">
                      No se encontraron mascotas con estos filtros
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 AdoptaPet. Ayudando a conectar mascotas con familias amorosas.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
