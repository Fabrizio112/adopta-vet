import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, LogIn } from "lucide-react";
import authService from "@/services/authService";
import swal from "sweetalert2";
import { LoginData } from "@/types/user";
import { useAppStore } from "@/store/store";

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const setUserLogin = useAppStore(state => state.setUserLogin)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authService.loginUser(loginData);
      if (data.status == 200) {
        await swal.fire({
          icon: "success",
          title: "Iniciando Sesion",
          text: "¡Bienvenido de nuevo! Redirigiendo a tu perfil...",
          timer: 2000,
          showConfirmButton: false
        })
        setUserLogin(data.data.user)
        localStorage.setItem("userLogin", JSON.stringify(data.data.user))
        localStorage.setItem("AUTH_TOKEN", data.data.token)
        navigate("/")
      }
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Login Error",
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
            <CardTitle className="text-2xl text-foreground">Iniciar sesión</CardTitle>
            <CardDescription>Ingresá tus datos para acceder a tu cuenta</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                    to="/recuperar"
                    className="text-sm text-primary hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
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
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar sesión
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                ¿No tenés cuenta?{" "}
                <Link to="/registro" className="font-medium text-primary hover:underline">
                  Registrate
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

export default Login;
