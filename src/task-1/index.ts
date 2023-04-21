import {PostService} from "./post.service";
import {updateObjectInArray, ObjectShape, arr} from "../task-2/updateObjectInArray";
import './css/index.css'

const postsList = document.querySelector('.posts')!

const showPosts = async () => {
    try{
        const posts = await PostService.getAllPosts()
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

showPosts()
console.log(updateObjectInArray<ObjectShape>(arr, "title", "title1", {title: "changedTitle"}));