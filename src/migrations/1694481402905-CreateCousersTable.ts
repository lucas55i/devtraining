import { timestamp } from "rxjs";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCousersTable1694481402905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'courses',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'created_att',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses');
      }

}
