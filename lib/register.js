import { createUser } from "../lib/db";

export default function handler(req, res){
    const {email, password} = req.body;
    createUser(email, password);
    res.json({msg:"ok"});
}
