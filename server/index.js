const express = require('express'); //creating a express application by requiring it
const mc = require('./controllers/messages_controller'); // this gives us access to all the methods we have in messages controller object 
const app = express(); // saving it to a variable that equals express 

app.use(express.json()); //body parser so we have access to req.body in our endpoints 
app.use(express.static(__dirname + '/../public/build')); // serve the public build folder 

const messagesBaseURL = "/api/messages"; //if the URL changes we don't have to update it in four places, because they are accesing the var messageBaseURL 
app.post(messagesBaseURL, mc.create); //post end point for create accessing the url above 
app.get(messagesBaseURL, mc.read); //get end point for read 
app.put(`${messagesBaseURL}/:id`, mc.update); // put end point for update, has a url parameter of ID as does delete. 
app.delete(`${messagesBaseURL}/:id`, mc.delete); //delete end point for delete 









const port = 3001; //distinguishes the port number 
app.listen(port, () => {  // method that passes in the port we ar listening on 
    console.log(`Server listening on port ${port}`); // accesses the port var to say what port to listen to 
}); 