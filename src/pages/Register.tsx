import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { RegisterData } from "@/types/user";
import Swal from "sweetalert2";
import authService from "@/services/authService";

const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
    telphone: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authService.createAccount(registerData);
      if (data.status == 201) {
        await Swal.fire({
          icon: "success",
          title: "Registrando usuario",
          text: "¡Cuenta creada exitosamente! Redirigiendo a inicio de sesión...",
          timer: 2000,
          showConfirmButton: false
        })
        navigate("/login")
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error de registro",
        text: error.message,
      })
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">🐾</span>
            <span className="text-2xl font-bold text-foreground">AdoptaPet</span>
          </Link>
        </div>

        <Card className="border-border shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Crear cuenta</CardTitle>
            <CardDescription>Registrate para publicar y adoptar mascotas</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telphone">Telefono </Label>
                <Input
                  id="telphone"
                  type="text"
                  placeholder="Tu telefono"
                  value={registerData.telphone}
                  onChange={(e) => setRegisterData({ ...registerData, telphone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Repetí tu contraseña"
                  value={registerData.repeat_password}
                  onChange={(e) => setRegisterData({ ...registerData, repeat_password: e.target.value })}
                  required
                  minLength={6}
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                <UserPlus className="mr-2 h-4 w-4" />
                Crear cuenta
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                ¿Ya tenés cuenta?{" "}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Iniciá sesión
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">← Volver al inicio</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
