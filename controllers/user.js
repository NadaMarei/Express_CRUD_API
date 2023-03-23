import {v4 as uuidV4} from "uuid"
let users = [
    {
        name: "Nada",
        age: 23,
        id: uuidV4() // adding new generated random ID 
    },
    {
        name: "Ahmed",
        age: 25,
        id: uuidV4()
    },
    {
        name: "Mohamed",
        age: 18,
        id: uuidV4()
    }
] 

export const getUsers = (req,res)=>{
    res.json(users)
}

export const createUser = (req, res) => {
    const { name, age } = req.body
    users.push({
        name,
        age,
        id:uuidV4()
    })
    res.json(users);
}

export const getOneUser = (req, res) => {
    const userID = req.params.id // return string

    const user = users.find((user) => {
        return user.id === userID 
    })
    res.json(user)
}

export const deleteUser = (req,res)=>{
    const userID = req.params.id;

    users = users.filter((user)=>{
        return user.id !== userID;
    })
    res.json(users)
}

export const updateUser = (req,res)=>{
    const userID = req.params.id;
    const {age, name} = req.body 

    users = users.map((user)=>{
        if(user.id === userID){
            return {
                name,
                age,
                id:user.id
            }
        }

        return user
    })
    res.json(users)
}