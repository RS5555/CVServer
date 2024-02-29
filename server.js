const express = require('express');
const path = require('path');
const app = express();
const port = 3001; // You can choose any port you prefer
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Define a route to serve the CV file
app.get('/cv', (req, res) => {
  const cvFilePath = path.join(__dirname, 'Rohit_Sawant.pdf'); // Replace 'cv.pdf' with your CV file name
  res.sendFile(cvFilePath);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});