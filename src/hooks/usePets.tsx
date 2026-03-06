import animalService from "@/services/animalService"
import { AddPetData } from "@/types/pet"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePets = () => {
    const queryClient = useQueryClient()

    const addPet = useMutation({
        mutationFn: (data: AddPetData) => animalService.addAnimal(data),
        onSuccess(data) {
            queryClient.invalidateQueries({ queryKey: ["user"] })
            queryClient.invalidateQueries({ queryKey: ["pets"] })
        },
    })
    const editPet = useMutation({
        mutationFn: (data: { animalId: string, animalData: AddPetData }) => animalService.updateAnimal(data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["user"] })
            queryClient.invalidateQueries({ queryKey: ["pets"] })
        }
    })
    const deletePet = useMutation({
        mutationFn: (data: string) => animalService.deleteAnimal(data),
        onSuccess(data) {
            queryClient.invalidateQueries({ queryKey: ["user"] })
        }

    })
    return { addPet, editPet, deletePet }
}