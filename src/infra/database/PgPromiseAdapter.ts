import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";

export default class PgPromiseAdapter implements DatabaseConnection {
    connection: any;

    constructor() {
        this.connection = pgp()("postgres://postgres:postgres@localhost:5432/anthony");
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

    close(): Promise<void> {
        return this.connection.$pool.end();
    }
}
