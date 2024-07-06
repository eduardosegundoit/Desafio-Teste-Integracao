import knex, { Knex } from 'knex';


class KnexService {
  private static connection: Knex;

  public static obterConexao(): Knex {
    if (!KnexService.connection) {
      KnexService.connection = knex({
        client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'Carlos Eduardo',
        password: '1207Casa*',
        database: 'testednc',
        port: 3306,
    },
      });
    }
    return KnexService.connection;
  }
}

export default KnexService;
