const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`Listening with postgres at localhost:${port}`);
});