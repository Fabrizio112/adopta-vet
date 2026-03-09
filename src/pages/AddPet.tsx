import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { PetType, PetAge, PetSize, AddPetData, PetLocation } from "@/types/pet";
import { ProvinciaArgentina } from "@/helper";
import Swal from "sweetalert2";
import { User } from "@/types/user";
import { usePets } from "@/hooks/usePets";
import { useAuth } from "@/hooks/useAuth";

const AddPet = () => {
  const navigate = useNavigate();
  const { addPet } = usePets()
  const { data: userLogin, isLoading } = useAuth()

  const [formData, setFormData] = useState<AddPetData>({
    name: "",
    type: "" as PetType,
    breed: "",
    age: "" as PetAge,
    size: "" as PetSize,
    description: "",
    location: "" as PetLocation,
    imageUrl: "",
    user: {} as User
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.type || !formData.breed || !formData.age ||
      !formData.size || !formData.description || !formData.location) {
      return;
    }
    addPet.mutate({
      ...formData,
      user: userLogin,
      imageUrl: formData.imageUrl || formData.type === "dog" ? "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80" : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    })
    navigate("/")

  };

  useEffect(() => {
    if (!userLogin && !isLoading) {
      navigate("/login")
    }
  }, [userLogin])

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

      <main className="container mx-auto max-w-2xl px-4 py-12 text-center md:text-start">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Publicar mascota en adopción</CardTitle>
            <CardDescription>
              Completa el formulario con la información de la mascota que buscas dar en adopción
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: Max"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: PetType) => setFormData({ ...formData, type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Perro</SelectItem>
                      <SelectItem value="cat">Gato</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="breed">Raza *</Label>
                  <Input
                    id="breed"
                    value={formData.breed}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    placeholder="Ej: Golden Retriever"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age">Edad *</Label>
                  <Select
                    value={formData.age}
                    onValueChange={(value: PetAge) => setFormData({ ...formData, age: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="puppy">Cachorro</SelectItem>
                      <SelectItem value="young">Joven</SelectItem>
                      <SelectItem value="adult">Adulto</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Tamaño *</Label>
                  <Select
                    value={formData.size}
                    onValueChange={(value: PetSize) => setFormData({ ...formData, size: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Pequeño</SelectItem>
                      <SelectItem value="medium">Mediano</SelectItem>
                      <SelectItem value="large">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe el temperamento, personalidad y características especiales..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicacion *</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value: PetLocation) => setFormData({ ...formData, location: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(ProvinciaArgentina).map((provincia) => (
                      <SelectItem key={provincia} value={provincia}>{provincia}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>



              <div className="space-y-2">
                <Label htmlFor="image">URL de imagen (opcional)</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Publicar mascota
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddPet;
