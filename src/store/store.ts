import { Injectable } from "@nestjs/common";

interface User{
    id: number
    name: string
    age: number
}

@Injectable()
export class Store {
    private store = new Map<number, User>();

    constructor(){
        console.log("Store init")
    }

    addUser(user: User){
        this.store.set(user.id, user);
    }

    getUser(id: number){
        return this.store.get(id);
    }

    getAllUsers(){
        return Array.from(this.store).map((_, user)=> user);
    }

    updateUser(id: number, updatedUser: User){
        if(this.store.has(id)){
            this.store.set(id, updatedUser);
        }
    }

}
