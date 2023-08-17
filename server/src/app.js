let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status',function(req,res){
    res.send('Hello nodejs server belong to patipol kaeomuang')
})

app.get('/hello/:person',function(req,res){
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' +req.params.person)
})

app.get('user/:userId',function(req,res){
    res.send('ดูข้อมูลผู้ใช้')
})

app.get('/users', function(req,res){
    res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
})

app.post('/user', function(req,res){
    res.send('สร้างผู้ใช้' + JSON.stringify(res.body))
})

app.put('/user/:userId',function(req, res){
    res.send('แก้ไขข้อมูลผู้ใช้'+ req.params.userId + " " +JSON.stringify(req.body.person))
})

app.delete('/user/:userId',function(req, res){
    res.send('ลบข้อมูลผู้ใช้'+ req.params.userId + " " +JSON.stringify(req.body.person))
})

let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})