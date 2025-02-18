import {Request, Response} from 'express';
import { PRODUCTS } from '../Models/ProductModels';
import { ProductsParams } from '../dto/Product';



export const createProduct = async (req:Request, res:Response) => {
    const {name, description, price, oldPrice, quantity, isFeatured, inStock, category} =<ProductsParams>req.body;


    const files = req.files as [Express.Multer.File];
    const path = 'http://192.168.56.1:9000/assets/'
    const images = files.map((file:Express.Multer.File) => path+file.filename)

    const product = new PRODUCTS ({
        name: name,
        images:images,
        description,
        price,
        oldPrice,
        category,
        quantity,
        inStock,
        isFeatured
    });

    try {
        console.log(product)
        await product.save();
        res.status(200).json('product create successfully')
    }catch (err) {
        res.status(500).json(`Failed to create product ${err}`);
    }
}


export const getProductByCatId = async (req:Request, res:Response) => {
        //console.log(req.params.catId)
    try{
        const result = await PRODUCTS.find({category: req.params.catId})
        res.status(200).json({result})
    }catch(err) {
        res.status(500).json(`fetch ProductById failed ${err}`)
    }
}

export const getAllCProducts = async (req:Request, res:Response) => {

    try{
        const products = await PRODUCTS.find().sort({createAt: -1})
        res.status(200).json(products)
    }catch(err) {
        res.status(500).json(`Products not found${err}`)
    }
}

export const getProduct = async (req:Request, res:Response) => {

    try{
        const product = await PRODUCTS.findById(req.params.id)
        res.status(200).json(product)
    }catch(err) {
        res.status(500).json(`fetch Product failed ${err}`)
    }
}

export const getFeaturedProducts = async (req:Request, res:Response) => {

    try{
        const featuredProducts = await PRODUCTS.find({isFeatured: true})
        const Products = featuredProducts
        res.status(200).json({Products})
    }catch(err) {
        res.status(500).json({err})
    }
}

export const getTrendingProducts = async (req:Request, res:Response) => {

    try{
        const result = await PRODUCTS.find({isFeatured: true}).limit(5).sort({createAt: -1}) //limit(5) คือ เลือกแค่ 5 product 
        
        res.status(200).json({result})
    }catch(err) {
        res.status(500).json({err})
    }
}

export const getWelcomeProducts = async (req:Request, res:Response) => {

    try{
        const result = await PRODUCTS.find({proce: {$eq:300}}).limit(6)
        
        res.status(200).json({result})
    }catch(err) {
        res.status(500).json({err})
    }
}

