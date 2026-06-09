const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(const i in posts){
    let currentPost = posts[i];
    if(currentPost.id == 2){
        for(const x in currentPost.comments){
            let currentComment = currentPost.comments[x];
            if(currentComment.id == 3){
                currentPost.comments.splice(x, 1);
            }
        }
    }
}

