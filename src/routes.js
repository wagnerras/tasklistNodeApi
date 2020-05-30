import {Router} from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/teste', async function(req, res){
    const user = await User.create({
        name: 'Matheus',
        email: 'matheus@gmail.com',
        password_hash: '123123',
    })
    return res.json(user);
})

export default routes;