import User from "../models/User";
import bcrypt from "bcrypt";

export const indexhome = (req, res) => res.render("home");

export const getLogin = (req, res) => res.render("login", { pageTitle: "로그인" });
export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).render("login", {
            errorMessage: "존재하지 않는 아이디 입니다.",
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("login", {
            errorMessage: "비밀번호가 올바르지 않습니다.",
        });
    }
    console.log("LOGIN OK")
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/cataloge/main");
};

export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/cataloge/main");
};



export const getJoin = (req, res) => { 
    return res.render("join",{ pageTitle:"회원가입" });
};

export const postJoin = async (req, res) => {
    // console.log(req.body);
    const { username, password, password2, businesscard, crnumber, businessname, contact } = req.body;
    const pageTitle = "회원가입";
    if(password !== password2){
        return res.status(400).render("join",{
            pageTitle,
            errorMessage: "암호가 일치하지않습니다.",
        })
    }
    const exists = await User.exists({ username });
    if(exists){
        return res.status(400).render("join",{
            errorMessage:"ID가 중복 되었습니다.",
        })
    }
    try{
        await User.create({
            username,
            password,
            businesscard,
            crnumber,
            businessname,
            contact,
        });
        return res.redirect("/login");
    } catch(error){
        return res.status(400).render("join", { errorMessage: error._message });
    }
};

export const getEdit = (req, res) => {
    return res.render("");
};
export const postEdit = (req, res) => {

};