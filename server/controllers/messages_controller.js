let messages = []
let id = 0


module.exports ={
    create: (req, res) =>{
        const {text, time} = req.body

        const newMessage = {
            text, 
            time,
            id
        }

        messages.push(newMessage)

        id++

        res.status(200).send(messages)
    },

    read: (req, res) =>{
        res.status(200).send(messages)
    },

    update: (req,res) =>{
        const {text} = req.body
        const {id} = req.params

        const postId = messages.findIndex(messages => {
            return messages.id === +id
        })
        if(postId === -1){
            return res.status(404).send('No Message on Record')
        }

        messages[postId] = {text, id: +id}

        res.status(200).send(messages)

    },

    delete: (req, res) =>{
        const {id} = req.params

        const postId = messages.findIndex(messages => {
            return messages.id === +id
        })
        if(postId === -1){
            return res.status(404).send('No Message on Record')
        }
        messages.splice(postId, 1)

        res.status(200).send(messages)
    },
}

