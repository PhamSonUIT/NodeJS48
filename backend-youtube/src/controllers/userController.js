import connect from "../../db.js";
const getUsers = async (req, res) => {
  try {
    const [data] = await connect.query(`
          select * from users      
      `);
    return res.send(data);
  } catch (error) {
    return res.send(`Error: ${error}`);
  }
};

const createUser = async (req, res) => {
    try {
      const queryString = `
              insert into users (full_name, email, pass_word) values (?, ?, ?)
          `;
      let body = req.body;
      let { full_name, email, pass_word } = body;
      const [data] = await connect.execute(queryString, [
        full_name,
        email,
        pass_word,
      ]);
      return res.send(data);
    } catch (error) {
      return res.send(`Error: ${error}`);
    }
  };
export { getUsers, createUser };
