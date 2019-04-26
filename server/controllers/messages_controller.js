let message = []; // an array to hold the messages 
let id = 0; // a var that will keep track of what id to assign to messages 

module.exports = { // used to export an object, all of our methods will be used on this object// each method has two params for request and response 
    create: (req, res) => { //new message object 
        const {time, text} = req.body; //we are deconstructuring time and text from the request body.
        messages.push({id, text, time}); //pushing the deconstructured var into messages array 
        id++; //increments the id by 1 
        res.status(200).send(messages); // send back the response with the messages 
    }, 

    read: (req, res) => {  //just returns the messages array
        res.status(200).send(messages); 
    }, 

    update: (req, res) => {
        const {text} = req.body; //creating the text var 
        const updateID = req.params.id; // creating the variable that updates ID 
        const messageIndex = messages.findIndex(message => message.id === updateID); // the var messageIndex is equal to the indexes within the messages array according to the variable updateID which is using the variable id which increments by one each time. 
        let message = messages[messageIndex]; //pulls in the variable above in order to get the index of messages 

        messages[messageIndex] = {
            id: message.id, 
            text: text || message.text, // text variable or message.text
            time: message.time 
        }; 

        res.status(200).send(messages); 

    }, 

    delete: (req, res) => {
        const deleteID = req.params.id; // creating the variable that updates ID in this method 
        messageIndex = messages.findIndex(message => message.id == deleteID); 
        messages.splice(messageIndex, 1); // to delete it out at the chosen index 
        res.status(200).send(messages); 
    }
}

