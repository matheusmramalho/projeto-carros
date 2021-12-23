import { Category } from "../model/category";
import { CategoryRepository } from "../repositories/category.repository";
import { ICategoryRepository } from "../repositories/icategory-repository";
import { ISpecificationRepository } from "../repositories/ispecification-repository";

interface IRequest {
    name: string;
    description: string;
}

export class SpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    createSpecification({ name, description }: IRequest): Category {
        // Validation for Category name
        if (this.specificationRepository.findByName(name)) {
            throw new Error("Category already exists");
        }

        const createdCategory = this.specificationRepository.create({
            name,
            description,
        });

        return createdCategory;
    }
}
