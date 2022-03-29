import {Body, Controller, Delete, Get, Patch, Post, Request, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {CategoryService} from "./category.service";
import {UpdateCategoryDto} from "./dto/update-category.dto";

@Controller('category')
export class CategoryController{
    constructor(private categoryService: CategoryService) {}

    //@UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @Get()
    findAll() {
        console.log('FindAll');
        return this.categoryService.findAll({ relations: ['ctgr'] });
    }

    @UseGuards(JwtAuthGuard)
    @Get('one')
    find_One(@Body() id:number) {
        return this.categoryService.findOne(id);
    }



    //@UseGuards(JwtAuthGuard)
    @Patch()
    update(@Body() updateCategoryDto: UpdateCategoryDto) {
        console.log('Update');
        return this.categoryService.update(updateCategoryDto);
    }

    //@UseGuards(JwtAuthGuard)
    @Delete()
    remove(@Body() id:number) {
        console.log('Delete');
        return this.categoryService.remove(id);
    }
    //-----------------------------------------------------02


}