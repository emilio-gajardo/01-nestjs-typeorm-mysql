import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'shop',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  //timezone: '+07:00' //gmt
}