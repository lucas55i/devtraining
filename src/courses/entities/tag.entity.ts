import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { v4 as uuid } from "uuid";

@Entity("tags")
export class TagEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Course, (course: Course) => course.tags)
    cousers: Course[];

    @CreateDateColumn({ type: "timestamp" })
    created_att: Date;

    @BeforeInsert()
    generatedId() {
        if (this.id){
            return;
        }
        this.id = uuid()
    }
}
