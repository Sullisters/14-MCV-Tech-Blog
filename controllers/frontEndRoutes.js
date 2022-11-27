const router = require('express').Router();
const {User, Blog} = require('../models');

// Home Page
router.get('/', (req,res)=> {
    res.render('home')
    console.log('redirecting to home handlebar')
});

// Login Page
router.get('/login', (req,res)=> {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
        return
    }
    res.render('login', {
        loggedIn: false,
        userId: null,
    });
});

// Return individual user
router.get('/users:id', (req,res)=> {
    if (!req.session.loggedIn) {
        return redirect('/login');
    }
    User.findByPk(req.params.id)
        .then((foundUser)=> {
            const hbsUser = foundUser.get({plain:true});
            console.log(hbsUser);
            hbsUser.loggedIn = true;
            hbsUser.userId = req.session.userId;
            if (hbsUser.id === req.session.userId) {
                hbsUser.isMyProfile = true;
            }
        })
        .then(res.render('blog'));
});

router.get("/newAccount", (req, res) => {

    console.log(req.session.logged_in);
    if (req.session.logged_in) {
     return res.redirect('/');
    } 
    res.render('newAccount');
})

// Dashboard
router.get('/dashboard', (req,res)=> {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    }
    Blog.findAll().then(blogs => {
        const blogsHbsData = blogs.map(blog => blog.get({plain:true}));
        res.render('dashboard', {
            blogs:blogsHbsData
        });
    });
});

// Individual dashboard page
router.get('/dashboard/:id', (req,res)=> {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    }
    Blog.findByPk().then(blogs => {
        const blogsHbsData = blogs.get({plain:true});
        res.render('blog', {blogs:blogsHbsData});
    });
});

// Session Data
router.get('/sessions', (req,res)=> {
    res.json(req.session);
});

module.exports = router;