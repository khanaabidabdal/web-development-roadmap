async function getPosts(){
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        console.log("HTTP status:",response.status);

        if(!response.ok){
            throw new Error(`HTTP Error:${response.status}`);
        }
        const posts=await response.json();
        console.log("Total Posts:",posts.length);
        const firstFivePosts=posts.slice(0,5);
        firstFivePosts.forEach(post=>{
            console.log(`Post ${post.id}:${post.title}`);
        });


        console.log("Posts:",posts);
    } catch (error){
        console.error("Failed to fetch posts:", error.message);
    }
}
getPosts()

async function getPostById(postId) {
    try{
        const response=await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        console.log("HTTP status:",response.status);

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const post=await response.json();

        console.log(`Post ${post.id}:${post.title}`);
        console.log("Post body:", post.body);
    } catch (error){
        console.error('Failed to fetch the posts:', error.message);
    }
}
getPostById(2);