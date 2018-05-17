"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.databaseProvider = [
    {
        provide: 'TypeORMInstance',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.createConnection({
                type: 'postgres',
                host: 'ec2-54-235-64-195.compute-1.amazonaws.com',
                port: 5432,
                username: "tmvjttsvgegung",
                password: "d36741096832a4f6eeb5c51adad42c7acf3a6e4eaab4272e05779648e426a63c",
                database: 'dak5jar3nm445n',
                url: 'postgres://tmvjttsvgegung:d36741096832a4f6eeb5c51adad42c7acf3a6e4eaab4272e05779648e426a63c@ec2-54-235-64-195.compute-1.amazonaws.com:5432/dak5jar3nm445n',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                logging: true,
                synchronize: true
            });
        }),
    }
];
//# sourceMappingURL=database.provider.js.map