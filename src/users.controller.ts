import { Controller, Get, Post, Delete, Put, Patch, Req, Res, HttpCode, HttpStatus, Redirect, Param, Query, Header, Headers } from "@nestjs/common";
import { of } from 'rxjs'
import { Request, Response } from 'express'

interface VideoParams{
    id: number,
    name: string
}

@Controller('/users')
export class UsersController {

    @Post('/profile')
    @HttpCode(HttpStatus.OK)
    postProfile(){
        return "This is for Post Profile"
    }
    @Get('/profile')
    @HttpCode(HttpStatus.ACCEPTED)
    @Redirect('/users/account', 302)
    getProfile(@Req() req:Request, @Res({ passthrough:true }) res:Response){
        const rn = ~~(Math.random()*10+1)
        if(rn < 5){
            return {
                url: 'users/account',
                statusCode: 302
            }
        }else{
            return {
                url: 'users/wallet',
                statusCode: 302
            }
        }
    }
    @Put('/account')
    putProfile(){
        return "This is for Put Profile"
    }
    @Put('/wallet')
    putProfile1(){
        return "This is for Put Profile"
    }
    @Get('/video/:id/:name')
    getVideo(@Param() params: VideoParams){
        console.log(params)
        return `name: ${params.name}, id: ${params.id}`
    }
    @Get('/video')
    getPost(@Query() query: VideoParams){
        console.log(query)
        return `name: ${query.name}, id: ${query.id}`
    }

    // Header do two things:
    // 1. It sets the value of a response header.
    // 2. It returns the value of a request header.

    @Get('/Videos')
    getHeader(@Headers() headers: Record<string, any>){
        console.log(headers)
        return 'Success'
    }

}