const express = require('express');
const app = express();
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || port}`);
});