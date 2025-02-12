import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import {UtilisateurEntity} from "../utilisateur/utilisateur.entity";

@Entity("jeux")
export class JeuEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titre!: string;

    @OneToOne(() => UtilisateurEntity, utilisateur => utilisateur.id, {nullable: true, eager: true})
    @JoinColumn()
    proprietaire?: UtilisateurEntity;

    @ManyToOne(() => UtilisateurEntity, utilisateur => utilisateur.id, {nullable: true, eager: true})
    @JoinColumn()
    emprunteur?: UtilisateurEntity;

    @Column({ nullable: true })
    dateEmprunt?: string;

}