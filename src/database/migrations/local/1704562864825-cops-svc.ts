import { MigrationInterface, QueryRunner } from "typeorm";

export class CopsSvc1704562864825 implements MigrationInterface {
    name = 'CopsSvc1704562864825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classic_war" ("name" character varying NOT NULL, "total_attacks" integer NOT NULL DEFAULT '0', "attacks_used" integer NOT NULL DEFAULT '0', "total_start" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_68d52ac9aff695dad4cfb2b59e6" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TABLE "players" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "townHall" integer NOT NULL, "builderHall" integer, CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "players"`);
        await queryRunner.query(`DROP TABLE "classic_war"`);
    }

}
