import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/submitMarks', (req, res) => {
    try {
        const { username, subjects } = req.body;

        subjects.forEach(subject => {
            const remainingMarks = 40 - (40 * (subject.ia1Marks + subject.ia2Marks) / 60);
            subject.remainingMarks = remainingMarks.toFixed(2);
        });


        res.status(201).json({ message: 'Marks data received successfully', subjects });
    } catch (err) {
        console.error('Error receiving marks data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
