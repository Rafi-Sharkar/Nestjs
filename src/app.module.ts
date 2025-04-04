import { Module, Injectable } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PostController } from './posts.controller';
import { TwitesController } from './twites.controller';
import { UsersStore } from './store/users.store';
import { Users1Controller } from './users1.controller';
import { Config } from './config';
import { Store } from './store/store'
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = false;

@Injectable()
class EnvConfig{
  envType: 'DEV' | 'STAGE' | 'PROD'

  constructor(){
    this.envType = 'DEV'
  }
}


@Module({
  imports: [],
  controllers: [Users1Controller],
  providers: [{ provide: 'DATABASE_NAME', useValue: 'MOON_KNIGHT'},
    { provide: 'MAIL', useValue: ['admin1@gmail.com', 'admin2@gmail.com', 'admin3@gmail.com']},
    { provide: 'ENV_CONFIG', useValue: {
      type: "EMS",
      series: 22000
    }},
    { provide: Config, useValue:
      {
        type: "EMS",
        series: 9000
      }
    },
    { provide: UsersStore, useClass: UsersStore} ,
    UsersStore,        // When tooken and class name are same then we can write it once.
    { provide: 'STORE', useClass: UsersStore},
    // {
    //   provide: UsersStore, useClass:Store
    // },
    {
      provide: "EVENT_STORE", useFactory: (envconfig: EnvConfig, limit: number = 4 ) => {
        const eventBus$ = envconfig.envType === 'DEV' ?
         new ReplaySubject(2): new BehaviorSubject(null);
         
         console.log(envconfig, limit)
         return eventBus$
      },
      inject: [EnvConfig, {token: "LIMIT", optional: true}]
    },
    {
      provide: "LIMIT",
      useValue: 3
    },
    EnvConfig
  ],
})
export class AppModule {}
