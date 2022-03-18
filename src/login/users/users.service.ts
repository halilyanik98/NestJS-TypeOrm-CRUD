import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../../login/entities/task.entity";
import {Repository} from "typeorm";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}
    //private readonly users=Task;

    private readonly users =Task;
  /*      {
            userId: 1,
            username: 'halil',
            password: '12345',
        },
        {
            userId: 2,
            username: 'ibrahim',
            password: '123',
        },
    ];
*/
    async findOne(username: string,password: string): Promise<User | undefined> {
        //return this.users.find(user => user.username === username);
    }

}