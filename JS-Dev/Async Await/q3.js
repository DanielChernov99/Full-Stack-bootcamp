// All users: https://jsonplaceholder.typicode.com/users
// All posts: https://jsonplaceholder.typicode.com/posts
// All comments: https://jsonplaceholder.typicode.com/comments


const fetchAllAndAggregate = async function(){
    const [users, posts, comments] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(res => res.json())
    ])
    const summary = {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: totalPosts / totalUsers,
        avgCommentsPerPost: totalComments / totalPosts
    }

    const topUsers = {
        
    }




    return{
        summary:summary,
        topUsers:,
        recentPosts:
    }
}