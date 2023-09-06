import express from 'express';
import getFruits from '../controller/frutasControllerBack.js'
import cors from 'cors'

const app = express();
app.use(cors()) 

app.get('/', (req, res) => {
    res.status(200).send("API FRUTAS");
})

app.get('/frutas', async (req, res) => {
    const token = req.headers.authorization
    res.status(200).json(await getFruits(token)); 
})


export default app;