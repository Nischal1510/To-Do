const { getUser } = require('../service/auth');

async function restrictUser(req, res, next) {
    // const uid = req.headers.authorization;
    // if (!uid) return res.redirect('/login');
    // const token=uid.split("Bearer ")[1];

    // const user = getUser(token);
    // if (!user) return res.redirect('/login');
    // req.user = user;

    // next();

    const uid=req.cookies?.uid;
    if(!uid) return res.redirect('/login');
    const user=getUser(uid);
    if (!user) return res.redirect('/login');
    req.user = user;

    next();
}

async function checkAuth(req, res, next) {
    // console.log(req.headers);
    // const uid = req.headers.authorization;

    // if (!uid) {
    //     return next(); // Continue without a logged-in user
    // }

    // const token = uid.split(" ")[1];

    // const user = getUser(token);

    // req.user = user;

    // next();
    const uid=req.cookies?.uid;
    const user=getUser(uid);
    req.user = user;

    next();

}

module.exports = {
    restrictUser,
    checkAuth,
}

