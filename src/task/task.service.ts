import {Injectable, Request} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Repository} from "typeorm";
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";
import {User} from "../user/entities/user.entity";
import {Category} from "../category/entities/category.entity";


@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) {}


    create(createTaskDto: CreateTaskDto,@Request() req) {
        const task=new Task();
        task.tasking=createTaskDto.tasking;
        task.user=req.user['id'];
        task.ctgr=createTaskDto.ctgr;
        return this.taskRepository.save(task)
    }

    findAll(p: { relations: string[] }): Promise<Task[]> {
        return this.taskRepository.find({ relations: ['user','ctgr']});
    }

    findOne(id:number): Promise<Task[]> {
        return this.taskRepository.find({relations: ['user','ctgr'],
            where: {
                user: id,
            },
        });
    }
    /*
    userRepository.find({
    select: {
        firstName: true,
        lastName: true,
    },
    relations: {
        profile: true,
        photos: true,
        videos: true,
    },
    where: {
        firstName: "Timber",
        lastName: "Saw",
        profile: {
            userName: "tshaw",
        },
    },
    order: {
        name: "ASC",
        id: "DESC",
    },
    skip: 5,
    take: 10,
    cache: true,
})
*/




    update(userId:number, updateTaskDto: UpdateTaskDto) {

        //Task güncellenirken user id post olarak gönderiliyor. Repostoryden alması gerekli

        //post id
        const postId= updateTaskDto.id;
        //güncellenen veriler
        const task=new Task();
        task.tasking=updateTaskDto.tasking;
        task.ctgr=updateTaskDto.ctgr;

        console.log('post:  '+postId,'   '+' userId  '+userId)
        const result = this.taskRepository.find({where:{id:postId, user:{id:userId}},relations:['user','ctgr'],} )
        console.log(result['id']);
        if(result['id'] !==undefined)
        {
            console.log("Task Update")
            return this.taskRepository.update(postId,task);
        }
        else{
            console.log('no task update');
        }
    }

    remove(id: number, req:number) {

        const result = this.taskRepository.find({where:{id:id['id'], user:{id:req}},relations:['user','ctgr'],} )
        console.log(result['id'])
        if (result['id'] !==undefined)
        {
            console.log('delete task')
            return this.taskRepository.delete(id);
        }
        else{
            return 'no delete'
        }
    }
}