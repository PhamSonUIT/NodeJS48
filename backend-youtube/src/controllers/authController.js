import initModels from '../models/init-models.js';
import connect from "../models/connect.js";
import bcrypt from 'bcrypt';
const models = initModels(connect);
const register = async (req, res) => {
    try {
        // 1.  nhận dữ liệu: email, password, name

        const {full_name, email, pass_word} = req.body;
        console.log("Dữ liệu nhận:",full_name, email, pass_word);
        // 2. kiểm tra email đã tồn tại chưa
            // tồn tại: trả về lỗi
            // không tồn tại: tiếp tục
        const userExist = await models.users.findOne({where: {email: email}})

        if(!userExist) {
            res.status(400).json({messages: 'Email đã tồn tại'});
            return;
        }
        // 3. mã hóa password
        const hashPassword =  bcrypt.hashSync(pass_word, 10);
        // 4. Thêm user vào db 
        const result = await models.users.create({
            full_name: full_name,
            email: email,
            pass_word: hashPassword
        });
        console.log("Kết quả thêm user:", result);

        // 5. Kểm tra dữ liệu trả về có pass không
        const userNew = result.dataValues;
        delete userNew.pass_word;

        // 6. trả dữ liệu đki thành công
        res.status(200).json(userNew);
    } catch (error) {
        console.log(error);
        res.status(500).json(`Error: ${error}`);
        
    }
}

const login = async (req, res) => {
    try {

        // 1. nhận dữ liệu: email, password
        const {email, pass_word} = req.body;
        console.log("Dữ liệu nhận:", email, pass_word);
        // 2. kiểm tra email có tồn tại không
            // không tồn tại: trả về lỗi
            // tồn tại: tiếp tục

        const userExist = await models.users.findOne({where: {email: email}});
        if(!userExist) {
            res.status(400).json({messages: ''});
            return;
        }
        console.log({userExist});
      
        //2.1 ktra tkhoan đăng nhập fb hay gg 

        if(!userExist.dataValues.pass_word){
            res.status(400).json({messages: 'Tài khoản đăng nhập bằng facebook hoặc google'});
        };
        // 3. ktra pass
        const isPassword = bcrypt.compareSync(pass_word, userExist.dataValues.pass_word);
        if(!isPassword) {
            res.status(400).json({messages: 'Sai mật khẩu'});
            return;
        }
        // 4. tra ket qua
        res.status(200).json("Login");
    } catch (error) {
        console.log(error);
        res.status(500).json(`Error: ${error}`);
    }
};

export { register, login };