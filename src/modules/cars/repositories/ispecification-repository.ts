import { Specification } from "../model/specification";

// DTO => Data Transfer Object
export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

export interface ISpecificationRepository {
    findByName(name: string): Specification;
    list(): Specification[];
    create(specificationDTO: ICreateSpecificationDTO): Specification;
}
