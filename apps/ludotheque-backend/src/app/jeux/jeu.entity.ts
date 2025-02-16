import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import {UtilisateurEntity} from "../utilisateur/utilisateur.entity";

@Entity("jeux")
export class JeuEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    titre!: string;

    @ManyToOne(() => UtilisateurEntity, utilisateur => utilisateur.id,  {
        onDelete: 'SET NULL',
        nullable: true,
        eager: true,
    })
    @JoinColumn()
    proprietaire?: UtilisateurEntity | null;

    @ManyToOne(() => UtilisateurEntity,
            utilisateur => utilisateur.id,
        {
            onDelete: 'SET NULL',
            nullable: true,
            eager: true,
        }
    )
    @JoinColumn()
    emprunteur?: UtilisateurEntity | null;

    @Column({ nullable: true })
    dateEmprunt?: string;

}