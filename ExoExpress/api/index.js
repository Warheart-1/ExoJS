import express from 'express';

const app = express();

app.use('/public', express.static('public'));

app.get('/accueil', (req, res) => {
    
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})