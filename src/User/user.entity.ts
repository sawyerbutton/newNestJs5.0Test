import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  userName:string;
}