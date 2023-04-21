import axios, {AxiosError} from "axios";
import {IPost} from "./IPost";
const BASE_URL = 'https://jsonplaceholder.typicode.com'


export class PostService {
    static async getAllPosts(): Promise<IPost[]>{
        return new Promise<IPost[]>((resolve, reject) => {
            axios.get<IPost[]>(BASE_URL + '/posts?userId=1')
                .then(response => resolve(response.data))
                .catch((error: AxiosError<string>) => reject(error))
        })
    }
}
