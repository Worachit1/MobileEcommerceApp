import express, {Request, Response} from 'express';

import { CATEGORIES } from '../Models/CategoryModel';
import { CategoryObj } from '../dto/Categories';
import { UpdateCategory } from '../dto/Categories';



export const createCategory = async (req:Request, res:Response) => {
    const {name} =<CategoryObj> req.body;

    const files = req.files as [Express.Multer.File];
    const path = 'http://192.168.56.1:9000/assets/'
    const images = files.map((file:Express.Multer.File) => path+file.filename)

    const categories = new CATEGORIES ({
        name: name,
        images:images
    });

    try {
        //console.log(categories)
        await categories.save();
        res.status(200).json('category create successfully')
    }catch (err) {
        res.status(500).json(`Failed to create category ${err}`);
    }
}

export const getCategory = async (req:Request, res:Response) => {

    try{
        const result = await CATEGORIES.findById(req.params.id)
        res.status(200).json(result)
    }catch(err) {
        res.status(500).json(`Category fetch failed ${err}`)
    }
}

export const getAllCategories = async (req:Request, res:Response) => {

    try{
        const result = await CATEGORIES.find().limit(30)
        res.status(200).json(result)
    }catch(err) {
        res.status(500).json(`Categories not found${err}`)
    }
}

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body as UpdateCategory;
        const files = req.files as [Express.Multer.File];

        if (files) {
            const images = files.map((file: Express.Multer.File) => file.filename);
            const catUpdate = await CATEGORIES.findByIdAndUpdate(
                req.params.id,
                { name: name, images: images },
                { new: true } // ใช้ 'new' เพื่อให้ได้ผลลัพธ์ที่อัปเดตแล้ว
            );

            if (!catUpdate) {
                res.status(500).send('The category cannot be updated');
                return; // หยุดฟังก์ชันเมื่อส่ง response
            }

            res.status(200).json('Category updated successfully');
        } else {
            const catUpdate = await CATEGORIES.findByIdAndUpdate(
                req.params.id,
                { name: name }
            );

            if (!catUpdate) {
                res.status(500).send('The category cannot be updated');
                return; // หยุดฟังก์ชันเมื่อส่ง response
            }

            res.status(200).json('Category updated successfully');
        }
    } catch (error) {
        res.status(500).send('An error occurred while updating the category');
    }
};

export const deleteCategory = async (req:Request, res:Response) => {
    
    try{
        const fintCat = await CATEGORIES.findByIdAndDelete(req.params.id)
        res.status(200).json('Category remove successsfully')
    }catch(err) {
        res.status(500).json(`Category delete failed${err}`)
    }
}
