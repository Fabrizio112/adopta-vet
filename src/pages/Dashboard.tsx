import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Heart,
  LogOut,
  PawPrint,
  Pencil,
  PlusCircle,
  Trash2,
  User,
} from "lucide-react";
import { useAppStore } from "@/store/store";
import Swal from "sweetalert2";

// Mock data for visual purposes

const mockFavorites = [
  {
    _id: "3",
    name: "Rocky",
    type: "dog",
    breed: "Pastor Alemán",
    age: "adult",
    size: "large",
    imageUrl: "/placeholder.svg",
    location: "Rosario",
  },
  {
    _id: "4",
    name: "Nala",
    type: "cat",
    breed: "Persa",
    age: "young",
    size: "medium",
    imageUrl: "/placeholder.svg",
    location: "Mendoza",
  },
];

const ageLabels: Record<string, string> = {
  puppy: "Cachorro",
  young: "Joven",
  adult: "Adulto",
  senior: "Senior",
};

const sizeLabels: Record<string, string> = {
  small: "Pequeño",
  medium: "Mediano",
  large: "Grande",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const userLogin = useAppStore((state) => state.userLogin);
  const setUserLogin = useAppStore((state) => state.setUserLogin);
  const setEditPet = useAppStore((state) => state.setEditPet);
  const getActualUser = useAppStore((state) => state.getActualUser);
  const deletePet = useAppStore((state) => state.deletePet);
  const toggleFavorite = useAppStore((state) => state.toggleFavorite)

  const [profileData, setProfileData] = useState({
    name: userLogin.name || "Usuario Demo",
    email: userLogin.email || "demo@email.com",
    telphone: userLogin.telphone || "+54 11 1234-5678",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    setUserLogin({} as any);
    navigate("/");
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Aquí se conectará con el backend
  };

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará tu publicación permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        deletePet(id).then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Tu publicación ha sido eliminada.",
            icon: "success",
          });
          navigate("/");
        });

      }
    });
  }
  const handleFavorite = async (pet, valid, user) => {
    await toggleFavorite(pet, valid, user)
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Favorito Eliminado correctamente',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }

  useEffect(() => {
    getActualUser(userLogin._id);
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold text-foreground">AdoptaPet</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              Hola, {profileData.name}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-foreground">Mi Panel</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="my-pets" className="gap-2">
              <PawPrint className="h-4 w-4" />
              <span className="hidden sm:inline">Mis mascotas</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Favoritos</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Datos personales</CardTitle>
                {!isEditing ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSaveProfile}>
                      Guardar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-3xl">
                    {profileData.name.charAt(0).toUpperCase()}
                  </div>
                  {isEditing && (
                    <Button variant="outline" size="sm" disabled>
                      Cambiar foto
                    </Button>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Nombre completo</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({ ...profileData, name: e.target.value })
                        }
                      />
                    ) : (
                      <p className="rounded-md border border-border bg-muted/50 px-3 py-2 text-sm">
                        {profileData.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Correo electrónico</Label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p className="rounded-md border border-border bg-muted/50 px-3 py-2 text-sm">
                        {profileData.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.telphone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            telphone: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p className="rounded-md border border-border bg-muted/50 px-3 py-2 text-sm">
                        {profileData.telphone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <Button variant="destructive" size="sm" disabled>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar cuenta
                  </Button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Esta acción no se puede deshacer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Pets Tab */}
          <TabsContent value="my-pets">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  Mis publicaciones
                </h2>
                <Button asChild size="sm">
                  <Link to="/publicar">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Publicar mascota
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {userLogin.animals?.map((animal) => (
                  <Card key={animal._id} className="overflow-hidden border-border">
                    <div className="relative aspect-video bg-muted">
                      <img
                        src={animal.imageUrl}
                        alt={animal.name}
                        className="h-full w-full object-cover"
                      />
                      <Badge className="absolute right-2 top-2 bg-primary text-primary-foreground">
                        {animal.type === "dog" ? "🐶 Perro" : "🐱 Gato"}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          {animal.name}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {animal.createdAt.toString().split("T")[0]}
                        </span>
                      </div>
                      <p className="mb-1 text-sm text-muted-foreground">
                        {animal.breed} · {ageLabels[animal.age]} ·{" "}
                        {sizeLabels[animal.size]}
                      </p>
                      <p className="mb-3 text-sm text-muted-foreground">
                        📍 {animal.location}
                      </p>
                      <div className="flex gap-2">
                        <Link to="/editar" className="flex-1" onClick={() => setEditPet(animal)}>
                          <Button variant="outline" size="sm" className="w-full">
                            <Pencil className="mr-1 h-3 w-3" />
                            Editar
                          </Button>
                        </Link>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleDelete(animal._id)}
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          Eliminar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {userLogin.animals?.length === 0 && (
                  <p className="text-center text-sm text-muted-foreground">
                    No has publicado ninguna mascota aún.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Mascotas guardadas
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {userLogin.favorites?.map((pet) => (
                  <Card key={pet._id} className="overflow-hidden border-border">
                    <div className="relative aspect-video bg-muted">
                      <img
                        src={pet.imageUrl}
                        alt={pet.name}
                        className="h-full w-full object-cover"
                      />
                      <button className="absolute right-2 top-2 rounded-full bg-card/80 p-1.5 text-destructive backdrop-blur-sm transition-colors hover:bg-card"
                        onClick={() => handleFavorite(pet._id, true, userLogin._id)}>
                        <Heart className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
                        {pet.name}
                      </h3>
                      <p className="mb-1 text-sm text-muted-foreground">
                        {pet.breed} · {ageLabels[pet.age]} ·{" "}
                        {sizeLabels[pet.size]}
                      </p>
                      <p className="mb-3 text-sm text-muted-foreground">
                        📍 {pet.location}
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to={`/mascota/${pet._id}`}>Ver detalle</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                {userLogin.favorites?.length === 0 && (
                  <p className="text-center text-sm text-muted-foreground">
                    No has guardado ninguna mascota aún.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
