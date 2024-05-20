const {Router} = require('express');
const router = Router();
const Article = require('../models/Article');
const Author = require('../models/Author');
const { Schema, Mongoose, default: mongoose } = require('mongoose');

router.get('/', async (req, res) => {
    let article; 
    await Article.find({}).populate('authors').lean().then((result) => {
        article = result;
        console.log(result.entries());
    });

    res.render('index', {
        title: 'Журналы',
        isIndex: true,
        article
    });
})

router.get('/authors', async (req, res) => {
    const authors = await Author.aggregate([
        { 
            $lookup: 
            { 
                from: "article", 
                localField: "_id", 
                foreignField: "authors._id", 
                as: "articles"
            } 
        }
    ]);

    res.render('authors', {
        title: 'Авторы',
        isAuthor: true,
        authors
    });
});

router.get('/authors/:_id', async (req, res) => {
    const authors = await Author.aggregate([
        { 
            $lookup: 
            { 
                from: "article", 
                localField: "_id", 
                foreignField: "authors._id", 
                as: "articles"
            } 
        },
        {
            $match:
            {
                _id: new mongoose.Types.ObjectId(req.params._id)
            }
        }
    ]);

    const author = authors[0];

    console.log(author);

    res.render('author', {
        title: 'Автор',
        isAuthor: true,
        author
    });
});

router.get('/article', async (req, res) => {
    res.redirect('/');
})

router.get('/article/:_id', async (req, res) => {
    let article;

    await Article.findById(req.params._id).populate('authors').lean().then((result) => {
        article = result;
        console.log(result.authors);
    });

    res.render('article', {
        title: "Журнал",
        article
    });
});

router.post('/search', async (req, res) => {
    const nameArticle = req.body.text;

    console.log(nameArticle);

    const regex = new RegExp(nameArticle, 'i');

    await Article.find({
        name: regex
    }).populate("authors").lean().then((result) => {
        const article = result;
        
        console.log(article);

        res.render('index', {
            title: "Статьи",
            isIndex: true,
            article
        });
    });
});

module.exports = router;