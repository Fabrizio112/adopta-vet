import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowLeft } from "lucide-react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Solo visual por ahora
    setSent(true);
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
          {!sent ? (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Recuperar contraseña</CardTitle>
                <CardDescription>
                  Ingresá tu correo y te enviaremos un enlace para restablecer tu contraseña
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-4">
                  <Button type="submit" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar enlace
                  </Button>
                </CardFooter>
              </form>
            </>
          ) : (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <Mail className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">¡Correo enviado!</CardTitle>
                <CardDescription>
                  Si existe una cuenta con <span className="font-medium text-foreground">{email}</span>, recibirás un enlace para restablecer tu contraseña.
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" onClick={() => setSent(false)}>
                  Enviar de nuevo
                </Button>
              </CardFooter>
            </>
          )}
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          <Link to="/login" className="inline-flex items-center gap-1 hover:underline">
            <ArrowLeft className="h-3 w-3" />
            Volver al login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
