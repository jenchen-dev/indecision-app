const path = require('path');
const express = require('express');
const app = express();
const publicFolderPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicFolderPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicFolderPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});
