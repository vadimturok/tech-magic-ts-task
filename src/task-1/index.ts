import {ProductsService} from "./products.service";
import './css/index.css'
import {arr, updateObjectInArray, MyObject} from '../task-2/updateObjectInArray'

const postsList = document.querySelector('.posts')!

const showProducts = async () => {
    try{
        const posts = await ProductsService.getAllPosts()
        posts.forEach(post => {
            const markup = `
            <div class="post">
                <h1 class="post__title"><span>${post.id}</span>.${post.title}</h1>
                <p class="post__body">${post.body}</p>
            </div>
        `
            postsList.insertAdjacentHTML('beforeend', markup)
        })
    }catch(e) {
        postsList.textContent = 'Could not load posts'
    }
}

showProducts()
console.log(updateObjectInArray<MyObject>(arr, "title", "title1", {title: "changedTitle"}))