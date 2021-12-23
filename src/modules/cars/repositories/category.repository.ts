import { Category } from "../model/category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "./icategory-repository";

export class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const category: Category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
        return category;
    }

    list(): Category[] {
        return this.categories;
    }

    get(id: string): Category {
        return this.categories.find((category) => category.id === id);
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}
