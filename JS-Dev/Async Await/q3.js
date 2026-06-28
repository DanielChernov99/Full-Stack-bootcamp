const fetchAllAndAggregate = async function () {
    const [users, posts, comments] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(res => res.json())
    ])

    const summary = {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: posts.length / users.length,
        avgCommentsPerPost: comments.length / posts.length
    }

    const topUsers = []

    for (const user of users) {
        const userPosts = posts.filter(post => post.userId === user.id)

        let commentCount = 0

        for (const post of userPosts) {
            comments.forEach(comment => {
                if (comment.postId === post.id) {
                    commentCount++
                }
            })
        }

        topUsers.push({
            name: user.name,
            postCount: userPosts.length,
            commentCount: commentCount
        })
    }

    topUsers.sort((a, b) => b.postCount - a.postCount)

    const recentPosts = posts
        .sort((a, b) => b.id - a.id)
        .slice(0, 5)

    return {
        summary: summary,
        topUsers: topUsers.slice(0, 3),
        recentPosts: recentPosts
    }
}