import User from "../models/User";


export const indexhome = (req, res) => res.render("home");

export const login = (req, res) => res.render("login");


export const getJoin = (req, res) => { 
    return res.render("join",{ pageTitle:"회원가입" });
};

export const postJoin = async (req, res) => {
    console.log(req.body);
    const { username, password, password2, businesscard, crnumber, businessname, contact } = req.body;
    const pageTitle = "회원가입";
    if(password !== password2){
        return res.status(400).render("join",{
            pageTitle,
            errorMessage: "암호가 일치하지않습니다.",
        })
    }
    // const exists = await User.exists({ $or: [{ username }, {  }]});
    // if(exists){
    //     return res.status(400).render("join",{
    //         errorMessage:"ID가 중복 되었습니다.";
    //     })
    // }
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