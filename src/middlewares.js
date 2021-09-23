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

// 저장되는지 실험한다.
export const clickDeta = (req, res, next) => {
    console.log("clickDeta 클릭한 id데이터")
    console.log("req",req.session.anotherSaveDb);
    console.log("res",res.locals.anotherSaveDb);
    if(req.session.anotherSaveDb){
        res.locals.anotherSaveDb = req.session.anotherSaveDb;
        console.log("만약 존재하면",res.locals.anotherSaveDb);
        console.log("locals 은",res.locals.anotherSaveDb);
        req.session.anotherSaveDb="";
        next();
    }else{
        res.locals.anotherSaveDb = "";
        console.log("만약 존제하지 않으면",res.locals.anotherSaveDb);
        next();
    }
};

