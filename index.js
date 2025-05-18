
// i hate nodejs

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 8000;

const photoDir = '/home/amdrei/backup/old/'

// Serve files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use("/photos", express.static(photoDir));

// API route to list all photo filenames
app.get('/api/photos', (req, res) => {
  fs.readdir(photoDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Cannot read photo directory' });

    const images = files.filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f));
    res.json(images);
  });
});

// Default route (optional, serves index.html by default)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('Server running at http://localhost:'+port.toString());
});

