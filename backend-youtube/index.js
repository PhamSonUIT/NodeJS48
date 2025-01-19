import express from "express";
import connect from "./db.js";
import rootRoutes from "./src/routes/rootRoutes.js";
const app = express();

// parse body từ string -> JSON
app.use(express.json());

// sử dụng rootRoutes
app.use(rootRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`BE is running on port ${port}`);
});

app.get("/welcome", (req, res) => {
  return res.send("welcome to node48");
});
// lấy infomation từ request(header, body, params, query)
//1. params

app.get("/users/:id", (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const params = req.params;
  console.log(`Params: ${params}`);
  return res.send(`User id: ${id}`); // trả về dạng string
});

//2. query
// URL: /users?id=1&name=abc

//GET và DELETE ko có body
app.get("/get-query", (req, res) => {
  const query = req.query;
  console.log(`Query: ${query}`);
  return res.send({ query }); // trả về dạng JSON
});

// 3. header request
app.get("/get-header", (req, res) => {
  // lấy header từ request
  const headers = req.headers;
  return res.send({ headers });
});

// 4. body request
// POST, PUT mới có body
app.post("/get-body", (req, res) => {
  //lấy body từ request
  //body có dạng JSON
  const body = req.body;
  return res.send({ body });
});

// api kết nối tới DB
// app.get("/get-users", async (req, res) => {
//   try {
//     const [data] = await connect.query(`
//         select * from users
//     `);
//     return res.send(data);
//   } catch (error) {
//     return res.send(`Error: ${error}`);
//   }
// });



//api create user
// app.post("/create-user", async (req, res) => {
//   try {
//     const queryString = `
//             insert into users (full_name, email, pass_word) values (?, ?, ?)
//         `;
//     let body = req.body;
//     let { full_name, email, pass_word } = body;
//     const [data] = await connect.execute(queryString, [
//       full_name,
//       email,
//       pass_word,
//     ]);
//     return res.send(data);
//   } catch (error) {
//     return res.send(`Error: ${error}`);
//   }
// });
