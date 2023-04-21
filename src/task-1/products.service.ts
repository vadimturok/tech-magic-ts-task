import axios, {AxiosError} from "axios";
import {IProduct} from "./IProduct";
const BASE_URL = 'https://jsonplaceholder.typicode.com'


export class ProductsService{
    static async getAllPosts(): Promise<IProduct[]>{
        return new Promise<IProduct[]>((resolve, reject) => {
            axios.get<IProduct[]>(BASE_URL + '/posts?userId=1')
                .then(response => resolve(response.data))
                .catch((error: AxiosError<string>) => reject(error))
        })
    }
}
