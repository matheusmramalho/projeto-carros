import { Category } from "../model/category";
import { CategoryRepository } from "../repositories/category.repository";
import { ICategoryRepository } from "../repositories/icategory-repository";

interface IRequest {
    name: string;
    description: string;
}

export class CategoryService {
    constructor(private categoryRepository: ICategoryRepository) {}

    createCategory({ name, description }: IRequest): Category {
        // Validation for Category name
        if (this.categoryRepository.findByName(name)) {
            throw new Error("Category already exists");
        }

        const createdCategory = this.categoryRepository.create({
            name,
            description,
        });

        return createdCategory;
    }
}
