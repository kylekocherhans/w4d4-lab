const bcryptjs = require("bcryptjs");

const users = []

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const existingPass = bcryptjs.compareSync(password, users[i].passHash);

          if (existingPass) {
            // console.log("Login Successful");
            let user = users[i];
            // console.log(user);
            delete user.passHash;
            res.status(200).send(user);
            return;
          }
        }
      }

      res.status(400).send("User not found.")
    },

    register: (req, res) => {
        // console.log('Registering User')
        // console.log(req.body)
        // const {password} = req.body;
        const user = req.body;
        const salt = bcryptjs.genSaltSync(5);
        const passHash = bcryptjs.hashSync(user.password, salt);

        delete user.password;
        user.passHash = passHash;
        // console.log(user);

        users.push(user);
        res.status(200).send(user);
    }
}