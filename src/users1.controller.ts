import { Controller, Inject, Optional } from "@nestjs/common";
import { UsersStore } from "./store/users.store";
import { Config } from "./config";
import { Subject } from 'rxjs'

@Controller('/users1')
export class Users1Controller{
    // v11
    // class based
    // Injection tooken : Provider instance
    // UsersStore: UsersStore

    // constructor(@Inject(UsersStore) private store: any){
    //     console.log(this.store)
    // }

    // @Optional() used for ignore error is there have no Provider at Module.
    // constructor(@Optional() private store: UsersStore){ 
    //     console.log(this.store) 
    // }

    // constructor(@Inject('STORE') private store: UsersStore){
    //     console.log(this.store)  // Using the stored data from users.store
    // }


    // v12
    // Injection tooken : Provider value
    // DATABASE_NAME: MOON_KNIGHT
    // constructor(@Inject('ENV_CONFIG') private config: Record<string, any>){
    //     console.log(this.config)
    // }

    //class injector
    // constructor(private config: Config){
    //     console.log(this.config)
    // }


    // v13
    // constructor(@Inject('EVENT_STORE') private eventbus: Subject<any>){
    //     console.log(eventbus)
    // }


    // v14
     



}