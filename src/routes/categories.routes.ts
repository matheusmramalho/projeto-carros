import { parse } from "csv-parse";
import { Router } from "express";
import fs from "fs";
import multer from "multer";

import { CategoryRepository } from "../modules/cars/repositories/category.repository";
import { CategoryService } from "../modules/cars/services/category.service";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);

const upload = multer({ dest: "./tmp" });

// CREATE CATEGORY
categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createdCategory = categoryService.createCategory({
        name,
        description,
    });

    return response.status(201).json(createdCategory);
});

// LIST ALL CATEGORIES
categoriesRoutes.get("/", (request, response) => {
    const categories = categoryRepository.list();

    return response.status(200).json(categories);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    const stream = fs.createReadStream(file.path);

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
        console.log(line);
        const [name, description] = line;
        categoryService.createCategory({ name, description });
    });

    console.log(file);
    response.send();
});

export { categoriesRoutes };
