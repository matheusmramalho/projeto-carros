import { Category } from "../model/category";

// DTO => Data Transfer Object
export interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export interface ICategoryRepository {
    findByName(name: string): Category;
    list(): Category[];
    create(categoryDTO: ICreateCategoryDTO): Category;
}
