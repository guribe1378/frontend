import ex from 'express';
import dir from 'path';

const app =  ex()
const dir_front = dir.resolve()
app.use(ex.static("frontend/build"))

app.listen('5500', function(){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/', function(req,res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})
app.get('/home', function(req,res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/actividadForm', function(req,res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})
app.get('/registroUsuario', function(req,res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})
app.get('/actividadesList', function(req,res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})
app.get('/usuariosList', function(req,res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})