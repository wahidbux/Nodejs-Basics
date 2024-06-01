import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);

// Middleware
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(express.json()); // For parsing application/json //same as body parser

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // Database work here..
    res.send("Successfully posted data....");
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});