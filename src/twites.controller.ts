import { Body, Controller, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { CreateTwiteDTO } from "./createTwite.dto";

let TWITES = []

@Controller('/twites')
export class TwitesController{
    // methods for twites
    //create a new twite
    @Post()
    addNewTwite(@Body() createTwiteDto: CreateTwiteDTO){
        TWITES.push(createTwiteDto)
        return {
            message: 'Twite added successfully'
        }
    }

    @Get()
    getTwites(){
        return TWITES
    }

    @Get(":id")
    getTwite(@Param('id') id: number){
        return TWITES.find((twite)=> twite.id === +id)
    }

    @Put(":id")
    updateTwite(@Param('id') id: number, @Body() updateTwiteDTO: CreateTwiteDTO){
        const twiteIndex = TWITES.findIndex((twite)=> twite.id === +id)

        if(!twiteIndex){
            return
        }
        TWITES[twiteIndex] = updateTwiteDTO
    }

    @Delete(':id')
    deleteTwite(@Param('id') id:number){
        TWITES = TWITES.filter((twite)=> twite.id !== +id)
    }

}