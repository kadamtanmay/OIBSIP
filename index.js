const express=required('express')
const path=required ('path')
const app=express ();
app.use(express.static(path.join(__dirname,'public')))
app.listen(3000)

npm i express nodemon path

nodemon index