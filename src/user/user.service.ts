import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User)
                private userRepository:Repository<User>) {}


    findAll(p: { relations: string[] }): Promise<User[]> {
        return this.userRepository.find({ relations: ['dbTask'] });
    }

    find_One(id: number): Promise<User> {
        return this.userRepository.findOne(id,{ relations: ['dbTask'] });
    }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(+id,updateUserDto);
    }

    remove(id: number) {
        return this.userRepository.delete(id);
    }
}