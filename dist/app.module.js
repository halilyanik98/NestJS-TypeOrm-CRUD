"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const task_module_1 = require("./task/task.module");
const task_service_1 = require("./task/task.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_module_1 = require("./login/auth/auth.module");
const users_module_1 = require("./login/users/users.module");
const login_controller_1 = require("./login/login.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => Object.assign(await (0, typeorm_2.getConnectionOptions)(), {
                    autoLoadEntities: true,
                }),
            }), task_module_1.TaskModule, auth_module_1.AuthModule, users_module_1.UsersModule],
        controllers: [login_controller_1.LoginController],
        providers: [task_service_1.TaskService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map