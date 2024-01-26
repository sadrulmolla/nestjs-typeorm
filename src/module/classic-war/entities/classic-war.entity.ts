import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ClassicWar {
  @PrimaryColumn()
  name: string;

  @Column({ nullable: false, default: 0, name: 'total_attacks' })
  totalAttacks: number;

  @Column({ nullable: false, default: 0, name: 'attacks_used' })
  attacksUsed: number;

  @Column({ nullable: false, default: 0, name: 'total_start' })
  totalStart: number;
}
