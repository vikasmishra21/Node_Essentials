const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

// const yargs = require('./SomePackages/yargs')
// yargs()
// const express_validator = require('./SomePackages/express-validation')
// express_validator(app)
require('./SomePackages/callback')()