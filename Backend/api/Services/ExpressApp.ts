import express, {Application} from 'express';
import path from 'path';
import { CategoryRoute, ProductRoute ,UserRoute} from '../Routes';

export default async (app:Application) => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use('/assets', express.static('assets'))

    app.use('/category', CategoryRoute)
    app.use('/products', ProductRoute)
    app.use('/user', UserRoute)
    

    return app;
}