import { CreateCousersTable1694481402905 } from 'src/migrations/1694481402905-CreateCousersTable';
import { CreateTagsTable1694481794483 } from 'src/migrations/1694481794483-CreateTagsTable';
import {CreateCoursesTagsTable1694482963650 } from 'src/migrations/1694482963650-CreateCoursesTagsTable';
import { AddCoursesIdToTagsTable1694483375227 } from 'src/migrations/1694483375227-AddCoursesIdToTagsTable';
import { AddTagsIdToCoursesTable1694483836686 } from 'src/migrations/1694483836686-AddTagsIdToCoursesTable';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "admin",
        database: "postgres",
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];


export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "postgres",
  entities: [__dirname + '/**/*.entity.js'],
  synchronize: true,
  migrations: [CreateCousersTable1694481402905, CreateTagsTable1694481794483, CreateCoursesTagsTable1694482963650, AddCoursesIdToTagsTable1694483375227, AddTagsIdToCoursesTable1694483836686]
});