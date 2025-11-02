import { Button } from "@/components/ui/button";
import { usePetStore } from "@/store/petStore";
import { PetType, PetAge, PetSize } from "@/types/pet";

const PetFilters = () => {
  const { filters, setFilters } = usePetStore();

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

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Tipo de mascota</h3>
        <div className="flex flex-wrap gap-2">
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
        <div className="flex flex-wrap gap-2">
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
        <div className="flex flex-wrap gap-2">
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
    </div>
  );
};

export default PetFilters;
