import { type } from "os";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagEnity } from "./tag.enity";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany((type) => TagEnity, (tag) => tag.cousers)
    tags: string[];
}