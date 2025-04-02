import { Body, Controller, Get, HostParam, Ip, Post } from "@nestjs/common";
import { Request, Response } from "express";

@Controller({path:'/post', host: 'localhost'})
export class PostController{
    @Get()
    createGet(@HostParam('domain') params: Record<string, any>): any{
        console.log(params.domain);
        return 'success'
    }
    citGet(@Ip() ip:string){
        console.log(ip)
        return 'success'
    }
}
