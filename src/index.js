import app from './app.js'
import {connectDB} from './db.js'
//servidor //

connectDB();
app.listen(3000)
console.log('Estas conectado al servidor', 3000)