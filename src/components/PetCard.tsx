import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Pet } from "@/types/pet";

interface PetCardProps {
  pet: Pet;
}

const ageLabels = {
  puppy: "Cachorro",
  young: "Joven",
  adult: "Adulto",
  senior: "Senior",
};

const sizeLabels = {
  small: "Pequeño",
  medium: "Mediano",
  large: "Grande",
};

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-foreground">{pet.name}</h3>
          <Badge variant="secondary">{pet.type === "dog" ? "🐶" : "🐱"}</Badge>
        </div>

        <p className="mb-3 text-sm text-muted-foreground">{pet.breed}</p>

        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="outline">{ageLabels[pet.age]}</Badge>
          <Badge variant="outline">{sizeLabels[pet.size]}</Badge>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{pet.location}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link to={`/mascota/${pet._id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
