import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagEntity } from "./tag.entity";
import { v4 as uuid } from "uuid";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id: string;


    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany(() => TagEntity, (tag: TagEntity) => tag.cousers, {
        cascade: true
    })
    tags: TagEntity[];
    
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