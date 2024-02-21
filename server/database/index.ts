import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { People } from './entities/People';
import { Things } from './entities/Things';
import { Users } from './entities/Users';
import { People_Ratings } from './entities/People_Ratings';
import { Connections } from './entities/Connections';
import { Things_Ratings } from './entities/Things_Ratings';
import { Connections_Ratings } from './entities/Connections_Ratings';
import { Favorites } from './entities/Favorites';
import { Sessions } from './entities/Sessions';

const config = useRuntimeConfig();

const AppDataSource = new DataSource({
  type: config.databaseType,
  host: config.databaseHost,
  port: config.databasePort,
  username: config.databaseUsername,
  password: config.databasePassword,
  database: config.databaseTarget,
  entities: [
    People, Things, Users, People_Ratings, Connections,
    Things_Ratings, Connections_Ratings, Favorites, Sessions,
  ],
  synchronize: true,
  logging: false,
  uuidExtension: 'pgcrypto',
});

AppDataSource.initialize();

export default AppDataSource;
