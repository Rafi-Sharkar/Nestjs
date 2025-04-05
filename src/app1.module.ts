import { Module } from "@nestjs/common";
import { Users2Controller } from "./users2.controller";
import { Users2Service } from "./users2.service";


@Module(
    {
        controllers: [Users2Controller],
        providers: [Users2Service],
        imports: [],
    }
)

export class App1Module{}