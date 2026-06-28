
const posts = [
    { name: "Jon", wish: "Happy Birthday!" },
    { name: "Dana", wish: "Have a great day!" }
]

const postButton = document.querySelector("#postBtn")

const render = function(){
    const postList = document.querySelector("#wall");
    postList.innerHTML = ""
    for (let index = 0; index < posts.length; index++) {
        const post = posts[index]

        const postElement = document.createElement("li")
        postElement.innerHTML = `<strong>${post.name}</strong> : ${post.wish}`

        postElement.addEventListener("click", () => {
            removePost(index)
        })

        postList.appendChild(postElement)
    }
}

const removePost = function(index){
    posts.splice(index,1);
    render();
}

postButton.addEventListener("click",() => {
    const name = document.querySelector("#inputName").value.trim();
    const wish = document.querySelector("#inputWish").value.trim();

    const newPost = {name,wish};

    posts.push(newPost);

    render();
})

render()