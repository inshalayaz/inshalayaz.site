import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express()
// app.use(express.json)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST'],
    credentials: true
}))

app.use(cookieParser())
app.use(bodyParser.json())

app.use(session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 24 * 60 * 60
    }
}))

// Making DB Connection

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'inshal_site'
})


app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/login', (req,res)=>{
    
    const email = req.body.email
    const password = req.body.password
    
    db.query(
        "Select * from users where email = ?", email,
        (err,result)=>{
            if(err)
                res.send({err: err})
            
            if(result.length > 0){
                bcrypt.compare(password,result[0].password, (err,resp)=>{
                    if(resp){
                        req.session.user = result
                        
                        res.send(result)
                    }else{
                        res.send({message: "Wrong Email Or Password"})
                    }
                })
            }else{
                res.send({message: "User Dosen't exist"})
            }
            
        }
    )
})


app.get('/login',(req,res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})


app.post('/register', (req,res)=>{

    
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
    bcrypt.hash(password,10, (err,hash)=>{
        db.query(
            "insert into users values(?,?,?,?)", ['',username,email,hash],
            (err,result)=>{
                if(err)
                    res.send({err: err})
    
                    res.send(result)
                
            }
        )

    })

})


app.listen(3001, ()=>{
    console.log('Server Running...')
})


