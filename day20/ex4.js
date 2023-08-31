var posts = [
    {
        title: "Tieu de bai viet 1",
        image: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi
        neque ullam? Obcaecati, possimus mollitia. Quo qui totam fugiat.
        Veritatis non vel quae unde quisquam. Ex, nisi eum. Minus, eum!`,
    },
    {
        title: "Tieu de bai viet 2",
        image: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi
        neque ullam? Obcaecati, possimus mollitia. Quo qui totam fugiat.
        Veritatis non vel quae unde quisquam. Ex, nisi eum. Minus, eum!`,
    },
    {
        title: "Tieu de bai viet 3",
        image: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi
        neque ullam? Obcaecati, possimus mollitia. Quo qui totam fugiat.
        Veritatis non vel quae unde quisquam. Ex, nisi eum. Minus, eum!`,
    },
];

var newPosts = posts.map(function(post, index) {
    return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
    <img
      src="${post.image}"
      alt=""
    />
    <div>
      <h2>${post.title}</h2>
      <p>
        ${post.description}
      </p>
    </div>
  </div>`;
});

console.log(newPosts);

document.write(`<div class="posts">
${newPosts.join("")}
</div>`);