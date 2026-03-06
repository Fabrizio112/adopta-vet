import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PetType, PetAge, PetSize, PetLocation } from "@/types/pet";
import { ProvinciaArgentina } from "@/helper";
import { useAppStore } from "@/store/store";

const PetFilters = () => {
  const { filters, setFilters } = useAppStore();

  const typeOptions: Array<{ value: PetType | "all"; label: string; icon: string }> = [
    { value: "all", label: "Todos", icon: "🏠" },
    { value: "dog", label: "Perros", icon: "🐶" },
    { value: "cat", label: "Gatos", icon: "🐱" },
  ];

  const ageOptions: Array<{ value: PetAge | "all"; label: string }> = [
    { value: "all", label: "Todas las edades" },
    { value: "puppy", label: "Cachorro" },
    { value: "young", label: "Joven" },
    { value: "adult", label: "Adulto" },
    { value: "senior", label: "Senior" },
  ];

  const sizeOptions: Array<{ value: PetSize | "all"; label: string }> = [
    { value: "all", label: "Todos los tamaños" },
    { value: "small", label: "Pequeño" },
    { value: "medium", label: "Mediano" },
    { value: "large", label: "Grande" },
  ];

  const provincias = Object.values(ProvinciaArgentina);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Tipo de mascota</h3>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {typeOptions.map((option) => (
            <Button
              key={option.value}
              variant={filters.type === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ type: option.value })}
            >
              <span className="mr-1">{option.icon}</span>
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Edad</h3>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {ageOptions.map((option) => (
            <Button
              key={option.value}
              variant={filters.age === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ age: option.value })}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Tamaño</h3>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {sizeOptions.map((option) => (
            <Button
              key={option.value}
              variant={filters.size === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ size: option.value })}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Provincia</h3>
        <Select
          value={filters.location}
          onValueChange={(value) => setFilters({ location: value as PetLocation | "all" })}
        >
          <SelectTrigger className="w-full bg-card">
            <SelectValue placeholder="Todas las provincias" />
          </SelectTrigger>
          <SelectContent className="z-50 bg-card border border-border shadow-lg">
            <SelectItem className="w-100 text-center" value="all">Todas las provincias</SelectItem>
            {provincias.map((provincia) => (
              <SelectItem key={provincia} value={provincia}>
                {provincia}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PetFilters;
