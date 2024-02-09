import "reflect-metadata"
import { DataSource } from "typeorm";
import { People } from "./entities/People";
import { Things } from "./entities/Things";
import { Users } from "./entities/Users";
import { People_Ratings } from "./entities/People_Ratings";
import { Connections } from "./entities/Connections";
import { Things_Ratings } from "./entities/Things_Ratings";
import { Connections_Ratings } from "./entities/Connections_Ratings";
import { Favorites } from "./entities/Favorites";
import { Sessions } from "./entities/Sessions";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 54321,
    username: "web",
    password: "defekacja",
    database: "mongo",
    entities: [
        People, Things, Users, People_Ratings, Connections, 
        Things_Ratings, Connections_Ratings, Favorites, Sessions
    ],
    synchronize: true,
    logging: false,
    uuidExtension: "pgcrypto",
});

AppDataSource.initialize();

export default AppDataSource
