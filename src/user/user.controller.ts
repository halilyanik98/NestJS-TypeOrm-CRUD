import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards} from "@nestjs/common";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";
import {UserService} from "./user.service";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";

@Controller('user')

export class UserController{
    constructor(private userService:UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        console.log('FindAll');
        return this.userService.findAll({ relations: ['user'] });
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    find_One(@Param('id' ,ParseIntPipe) id: number) {
        return this.userService.find_One(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log('Create');
        return this.userService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        console.log('Update');
        return this.userService.update(+id, updateUserDto);
    }

        @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        console.log('Delete');
        return this.userService.remove(+id);
    }
    //-----------------------------------------------------02
}