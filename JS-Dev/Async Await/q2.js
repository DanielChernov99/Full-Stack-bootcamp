// Starter code structure:
// Create a function that fetches a user and then fetches all posts by that user.
// Return an object containing both user info and their posts.
// Handle errors at each step with meaningful messages.
// If user doesn't exist, don't attempt to fetch posts.


async function getUserWithPosts(userId) {
    // Your implementation here
    // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
    // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
    // 3. Return combined data
    try{
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (!userResponse.ok){
            throw new Error('User not found with such id');
        }
        const user = await userResponse.json()

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        if(!postsResponse.ok) {
            throw new Error('Failed to fetch posts')
        }
        const posts = await postsResponse.json()
        return {
        user: user,
        posts: posts
        }
    }
    catch(error){
        console.error('Error:', error.message)
        return null
    }
}
