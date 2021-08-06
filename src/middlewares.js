export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "GoldRoom";
    res.locals.loggedInUser = req.session.user;
    console.log("이건", res.locals);
    next();
};