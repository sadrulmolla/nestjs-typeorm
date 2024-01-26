import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  townHall: number;

  @Column({ nullable: true })
  builderHall: number;
}
