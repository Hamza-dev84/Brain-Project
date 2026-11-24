// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const sequelize = require('./config/sequelize');
// const app = express();


// // ------------------------------
// // Enable CORS
// // ------------------------------
// app.use(
//   cors({
//      origin: ['http://localhost:8080' ,'https://brain.net.pk', 'https://www.brain.net.pk'],
//   })
// );

// app.use(express.json());

// app.use('/api/braintel', require('./routes/braintel.routes'));
// app.use('/api/brainnet', require('./routes/brainnet.routes'));
// app.use('/api/brainsoft', require('./routes/brainsoft.routes'));
// app.use('/api/bsms', require('./routes/bsms.routes'));
// app.use('/api/braincloud', require('./routes/braincloud.routes'));

// sequelize.sync();
// // ------------------------------
// // ✅ Test Endpoint (PLACE HERE)
// // ------------------------------
// app.get('/api/test', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     message: 'API is working fine 🚀',
//     timestamp: new Date(),
//   });
// });

// // ------------------------------
// // Start Server
// // ------------------------------
// app.listen(5000, () => console.log('Server running on port 5000'));





require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/sequelize");

const app = express();

// ------------------------------
// Enable CORS
// ------------------------------
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://brain.net.pk",
      "https://www.brain.net.pk",
    ],
  })
);

app.use(express.json());

// ------------------------------
// API Routes
// ------------------------------
app.use("/api/braintel", require("./routes/braintel.routes"));
app.use("/api/brainnet", require("./routes/brainnet.routes"));
app.use("/api/brainsoft", require("./routes/brainsoft.routes"));
app.use("/api/bsms", require("./routes/bsms.routes"));
app.use("/api/braincloud", require("./routes/braincloud.routes"));

// ------------------------------
// Test Endpoint
// ------------------------------
app.get("/api/test", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is working fine 🚀",
    timestamp: new Date(),
  });
});

// ------------------------------
// Start Server
// ------------------------------
const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log("Database connected successfully");

    await sequelize.sync();

    console.log("Database tables synchronized successfully");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

startServer();
