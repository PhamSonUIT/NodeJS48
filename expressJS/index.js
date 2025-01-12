// let check = "Welcome to ExpressJS";
// console.log(check);

import express from 'express';



// khởi taọ 1 ứng dụng express
const app = express();

// khai báo API đơn giản
// truyền đường dẫn api và 1 hàm callback xử lý API 
//domain default: http://localhost:3000

// http://localhost:3000/
//req: request nhận yêu cầu từ client 
//res: response trả về cho client
app.get('/', (req, res)=>{
    res.send('Welcome to NodeJS48');
});

app.get('/test', (req,res)=>{
    res.send('Test API');
})

app.get('/test2', (req,res)=>{
    res.send('Test API2');
})


// để BE luôn có cde mới: dùng thư viện nodemon


//khai báo port mặc định cho BE
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});