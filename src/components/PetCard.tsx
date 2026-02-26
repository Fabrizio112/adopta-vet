import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Pet } from "@/types/pet";
import { User } from "@/types/user";
import { useMemo } from "react";
import { useAppStore } from "@/store/store";
import Swal from "sweetalert2";

interface PetCardProps {
  pet: Pet;
  favorites: User["favorites"]
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


const PetCard = ({ pet, favorites }: PetCardProps) => {
  const isFavorite = useMemo(() => favorites && favorites.some(fav => fav._id == pet._id), [favorites])
  const userLogin = useAppStore((state) => state.userLogin)
  const toggleFavorite = useAppStore((state) => state.toggleFavorite)
  const handleFavorite = async (animalId, isFavorite, userId) => {
    const status = await toggleFavorite(animalId, isFavorite, userId)
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: status?.message,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }

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
          variant={(isFavorite) ? "favorite" : "secondary"}
          onClick={() => handleFavorite(pet._id, isFavorite, userLogin._id)}
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
