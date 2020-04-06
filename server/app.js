const express = require("express")
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors())


mongoose.connect("mongodb+srv://priyank:sharma1993@graphql-syekj.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connection.once('open', ()=>{
	console.log("DB connected")
})


app.use('/graphql',graphqlHTTP({
	schema,
	graphiql : true

}));


app.listen(4000, ()=> {
	console.log("yeah you are here")
})