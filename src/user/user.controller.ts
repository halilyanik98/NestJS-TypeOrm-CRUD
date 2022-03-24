import {Body, Controller, Delete, Get, Patch, Post, UseGuards,Request} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {UserService} from "./user.service";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";

@Controller('user')

export class UserController{
    constructor(private userService:UserService) {}

    //@UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log('Create');
        return this.userService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        console.log('FindAll');
        return this.userService.findAll({ relations: ['user'] });
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    find_One(@Request() req) {
        return this.userService.find_One(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
        console.log('Update');
        return this.userService.update(req.user.id, updateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    remove(@Request() req) {
        console.log('Delete');
        return this.userService.remove(req.user.id);
    }
    //-----------------------------------------------------02
}