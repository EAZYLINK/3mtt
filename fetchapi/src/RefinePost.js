const RefinePost = (posts, authors) => {
    posts && posts.map(post => {
        const author = authors.find(user => user.id === post.userId
        )
        return post.author = author.name;
      })
}

export default RefinePost;