import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("utilisateurs")
export class UtilisateurEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    nom?: string;

    @Column({ nullable: true })
    prenom?: string

}