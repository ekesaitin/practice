import { User } from "src/user/user.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => User, user => user.roles)
  users: User[]
}