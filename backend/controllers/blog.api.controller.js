// In-memory data store
let posts = [
    {
        title: "The Rise of Decentralized Finance",
        body:
            "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
        author: "Alex Thompson",
        id: 1
    },
    {
        title: "The Impact of Artificial Intelligence on Modern Businesses",
        body:
            "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
        author: "Mia Williams",
        id: 2
    },
    {
        title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
        body:
            "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
        author: "Samuel Green",
        id: 3
    },
    {
        title: "The importance of consistency",
        body:
            "Consistency is what keeps you focused so that you can always do what you say you would do. Consistency is what helps you stay on track and always finish what you started.",
        author: "Habib Abiola",
        id: 4
    },
];

let lastId = posts[posts.length - 1].id;

const getAllPosts = (req, res) => {
    res.status(200).json(posts);
}

const getSpecificPost = (req, res) => {
    let postId = parseInt(req.params.id);
    let foundPost = posts.find((post) => post.id === postId);
    res.json(foundPost);
}

const postNewPost = (req, res) => {
    let { title, body, author } = req.body;
    let newId = lastId + 1;
    let newPost = {
        id: newId,
        title: title,
        body: body,
        author: author,
        date: new Date(),
    };
    lastId = newId;
    posts.push(newPost);
    res.status(201).json(newPost);
}

const patchPost = (req, res) => {
    let { title, body, author } = req.body;
    let postId = parseInt(req.params.id);
    let foundPost = posts.find((post) => post.id === postId);
    let newPost = {
        id: postId,
        title: title || foundPost.title,
        body: body || foundPost.body,
        author: author || foundPost.author,
        date: new Date() || foundPost.date,
    };

    let postIndex = posts.findIndex((post) => post.id === postId);
    posts[postIndex] = newPost;

    res.json(newPost);
}

const deletePost = (req, res) => {
    let postId = parseInt(req.params.id);
    let foundPostIndex = posts.findIndex((post) => post.id === postId);
    if (foundPostIndex > -1) {
        posts.splice(foundPostIndex, 1);
    }

    res.sendStatus(200);
}

export { getAllPosts, getSpecificPost, postNewPost, patchPost, deletePost };