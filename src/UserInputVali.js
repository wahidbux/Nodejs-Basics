import express from 'express';
import path from 'path';
import Joi from 'joi';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index3.html'));
});

app.post('/', async (req, res) => {
    console.log('.....Req body.......');
    console.log(req.body);
    console.log('....................');

    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    });

    try {
        const value = await schema.validateAsync(req.body);
        console.log(value);
        res.send("Successfully posted data");
    } catch (err) {
        console.log(err);
        res.status(400).send("An error occurred: " + err.details[0].message);
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});