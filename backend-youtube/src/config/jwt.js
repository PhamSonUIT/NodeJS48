import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createAccessToken = (payload) => {
  return jwt.sign({ payload }, process.env.SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
};

// hàm verify token

const verifyAccessToken = (accesstoken) => {
    try {
        jw.verify(accesstoken, process.env.SECRET_KEY);
        return true;
    } catch (error) {
        return false;
    }
};

// midleware kiểm tra token
// next chuyển tới midleware tiếp theo
const midlewareToken = (req,res, next) => {
    let {token} = req.headers;
    console.log({token});

    // TH1: token ko có trong header 
    if(!token){
        // 4xx: lỗi của user 
        return res.status(401).json({message: "unauthorized"});
    }

    let checkToken = verifyAccessToken(token);
    // TH2: token ko hợp lệ
    if(!checkToken){
        return res.status(401).json({message: "unauthorized"});
    }
    // TH3: token hợp lệ
    next();
};
export {createAccessToken, verifyAccessToken, midlewareToken};