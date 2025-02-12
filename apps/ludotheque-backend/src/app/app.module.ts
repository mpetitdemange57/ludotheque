import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UtilisateurModule} from "./utilisateur/utilisateur.module";
import {JeuModule} from "./jeux/jeu.module";
import {UtilisateurEntity} from "./utilisateur/utilisateur.entity";
import {JeuEntity} from "./jeux/jeu.entity";

console.log(__dirname + '/**/*.entity{.ts,.js}')

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/ludotheque.db',
      entities: [UtilisateurEntity, JeuEntity],
      synchronize: false,
    }),
      UtilisateurModule,
      JeuModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
