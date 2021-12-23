import { Router } from "express";

import { SpecificationReporitory } from "../modules/cars/repositories/specification.repository";
import { SpecificationService } from "../modules/cars/services/specification.service";

export const specificationRoutes = Router();
const specRepository = new SpecificationReporitory();

// CREATE SPECIFICATION
specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const specificationService = new SpecificationService(specRepository);

    const createdSpecification = specificationService.createSpecification({
        name,
        description,
    });

    return response.status(201).json(createdSpecification);
});

// LIST ALL SPECIFICATIONS
specificationRoutes.get("/", (request, response) => {
    const specifications = specRepository.list();

    return response.status(200).json(specifications);
});
