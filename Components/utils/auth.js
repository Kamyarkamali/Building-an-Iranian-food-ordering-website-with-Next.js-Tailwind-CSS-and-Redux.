import {hash} from "bcryptjs"

async function hashPassword(password){
    const hashPassworded=await hash(password,12)
    return hashPassworded
}


export {hashPassword}