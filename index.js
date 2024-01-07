const express = require('express');
const app = express();
const port = 3000;
const formulaOneRouter = require("./routes/formula1");
const driversRouter = require("./routes/drivers")
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);


app.get('/', (req, res) => {
  res.send('Welcome to the Formula One Playground!');
});

app.use("/circuits", formulaOneRouter);

app.use("/drivers", driversRouter);


app.use((err,req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});





app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
