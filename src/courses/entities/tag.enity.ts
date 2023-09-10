import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity("tags")
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column()
    @ManyToMany((type) => Course, (course) => course.tags)
    cousers: Course[];
}
