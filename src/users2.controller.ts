import { Body, Param, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { CreateUsersDTO } from "./createUser.dto";
import { Users2Service } from "./users2.service";



@Controller('/users2')
export class Users2Controller{

    constructor(private userservice: Users2Service){

    }
    @Post('/create')
    createUser(@Body() createuser: CreateUsersDTO){
        this.userservice.addUser(createuser)
        return `${createuser.name} is Added into userlist`
    }

    @Get()
    getAllUsers():CreateUsersDTO[]{        
        return this.userservice.getUsers()
    }

    @Get(':id')
    getAUser(@Param('id') id: number){
        this.userservice.getUser(id)
        return `${id} user details`
    }

    @Put(':id')
    getUpdate(@Param('id') id:number, @Body() updateduser: CreateUsersDTO){
        this.userservice.updateUser(+id, updateduser)
        return `${id} user update the details. Updated details is ${updateduser}`
    }

    @Delete(':id')
    userDelete(@Param('id') id: number){
        this.userservice.deleteUser(+id)
        return `${id} user delete the account`
    }
}