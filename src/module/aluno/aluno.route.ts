import * as alunoModel from './aluno.model';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoModel.store(req.body);
  return res.status(201).json({ data });
});

router.get('/teste', async (_: Request, res: Response) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({data});
});

router.post('/teste', async (req: Request, res: Response) => {
  const data = await alunoModel.store(req.body);
  return res.status(201).json({data});
});
 

export default router;
