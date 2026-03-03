import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Mail, Phone, User, Heart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Pet } from "@/types/pet";
import { useAppStore } from "@/store/store";
import Swal from "sweetalert2";

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

const PetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchPetByID = useAppStore((state) => state.fetchPetByID);
  const [pet, setPet] = useState<Pet | undefined>(undefined);
  const userLogin = useAppStore((state) => state.userLogin)
  const toggleFavorite = useAppStore((state) => state.toggleFavorite)

  useEffect(() => {
    fetchPetByID(id).then((data) => {
      setPet(data);
    });
  }, [])
  const isFavorite = useMemo(() => userLogin && userLogin.favorites.some(fav => fav._id == pet?._id), [pet])
  const handleFavorite = async (animalId, isFavorite,) => {
    if (isFavorite == null) return
    const data = await toggleFavorite(animalId, isFavorite)
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: data?.message,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });

  }


  if (!pet) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Mascota no encontrada</h1>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold text-foreground">AdoptaPet</span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-foreground">{pet.name}</h1>
                  <p className="text-xl text-muted-foreground">{pet.breed}</p>
                </div>
                <Button size="icon" className="rounded-ful" variant={isFavorite ? "favorite" : "secondary"} onClick={() => handleFavorite(pet._id, isFavorite)}>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="text-base">{pet.type === "dog" ? "🐶 Perro" : "🐱 Gato"}</Badge>
                <Badge variant="secondary" className="text-base">
                  {ageLabels[pet.age]}
                </Badge>
                <Badge variant="secondary" className="text-base">
                  {sizeLabels[pet.size]}
                </Badge>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="mb-3 text-lg font-semibold text-foreground">Sobre {pet.name}</h2>
                <p className="leading-relaxed text-muted-foreground">{pet.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-foreground">Información de contacto</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span className="text-foreground">{pet.user.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`mailto:${pet.user.email}`}
                      className="text-primary hover:underline"
                    >
                      {pet.user.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`tel:${pet.user.telphone}`}
                      className="text-primary hover:underline"
                    >
                      {pet.user.telphone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-foreground">{pet.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button size="lg" className="w-full">
                <a href={`mailto:${pet.user.email}`} className="flex hover:underline">
                  <Mail className="mr-2 h-5 w-5" />
                  Contactar por Correo
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full"  >

                <a href={`https://wa.me/${pet.user.telphone}`} className="flex hover:underline">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactar por Whatsapp
                </a>
              </Button>
            </div>

          </div>
        </div>
      </main >
    </div >
  );
};

export default PetDetail;
