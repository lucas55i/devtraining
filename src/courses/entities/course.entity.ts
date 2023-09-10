import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagEntity } from "./tag.enity";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany(() => TagEntity, (tag: TagEntity) => tag.cousers, {
        cascade: true
    })
    tags: TagEntity[];
}