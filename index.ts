import prisma from "./database";
import { clients } from "@prisma/client";


type CreateUser = Omit <clients, "id">

async function find() {
    const users = await prisma.clients.findMany();
    return users;
}

async function findId(id:number) {
    const users = await prisma.clients.findUnique({
        where:{
            id
        }
    })
    return users;
}

async function createUser(user: CreateUser) {
    const users = await prisma.clients.create({
        data: user     
    })
    return users;
}

async function updateUser(id: number, user: CreateUser) {
    const users = await prisma.clients.update({
        data: user ,
        where:{
            id
        }    
    })
    return users;
}

async function deleteUser(id: number, user: CreateUser) {
    const users = await prisma.clients.delete({
        where:{
            id
        }    
    })
    return users;
}

(async () => {
    const users = await find()
    console.log(users)
})()