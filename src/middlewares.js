import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "GoldRoom";
    res.locals.loggedInUser = req.session.user;
    // console.log("이건", res.locals);
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
        return next();
    } else{
        return res.redirect("/login");
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn){
        return next();
    } else{
        return res.redirect("/cataloge/main");
    }
};

export const businesscardimgUpload = multer({
    dest:"uploads/businesscard/",
    limits: {
        fileSize: 3000000,
    }
});

export const catalogeimgUpload = multer({
    dest:"uploads/cataloge/",
    limits: {
        fileSize: 10000000,
    }
});

