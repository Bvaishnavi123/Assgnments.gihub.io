const connect = require("./configs/db");
const app = require("./index")

app.listen(3000, async () => {
    try {
      connect();
      console.log("listening on 3000");
    } catch (error) {
      console.log(error);
    }
  });

  