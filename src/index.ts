import express, { Application } from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.get('/ping', async (req, res) => {
  res.send({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});