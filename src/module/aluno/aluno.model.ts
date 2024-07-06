import { Aluno, AlunoCreate } from './aluno.d';
import KnexService from '../../service/knex';

export const getAll = async ():Promise<Aluno[]> => {
  const knex = KnexService.obterConexao();
  return knex<Aluno>('aluno').select('*');
};

export const store = async (params: AlunoCreate): Promise<void> => {
  const knex = KnexService.obterConexao();
  await knex<AlunoCreate>('aluno').insert(params);
};
