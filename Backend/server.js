const app = require('./src/app');
const cors = require("cors");

const PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});