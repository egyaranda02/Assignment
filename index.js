const express = require('express');
const app = express()
const apiRoutes = require("./routes/index");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API is Running!'))
app.use("/api", apiRoutes);

app.listen(5000, () => console.log(`This App is Running on port 5000`))