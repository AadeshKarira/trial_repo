import express, {Request, Response} from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    let firstName: string = "Dylan"
  return res.json({success: true, name: firstName});
});

app.post('/api/data', (req, res) => {
    console.log(req.body);
    return res.sendStatus(200);
});

app.all('/api/all', (req, res) => {
    return res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server started on port 3000!');
});
