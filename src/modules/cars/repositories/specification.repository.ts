import { Category } from "../model/category";
import { Specification } from "../model/specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./ispecification-repository";

export class SpecificationReporitory implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): Specification {
        const specification: Specification = new Specification(
            name,
            description,
            new Date()
        );

        // Object.assign(specification, {
        //     name,
        //     description,
        //     created_at: new Date(),
        // });

        this.specifications.push(specification);
        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }

    get(id: string): Specification {
        return this.specifications.find(
            (specification) => specification.id === id
        );
    }

    findByName(name: string): Specification {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }
}
