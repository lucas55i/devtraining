import {MigrationInterface, QueryRunner} from "typeorm";

export class CouserRefactoring1694381413893 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "courses" RENAME COLUMN "name" TO "course"`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "courses" RENAME COLUMN "course" TO "name"`
    }

}
