import request from 'supertest';

describe('Int - Alunos Suite', () => {
    it('##GET /aluno', async () => {
        const response = await request ('http://localhost:8080')
        .get('/aluno');
    

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(response.body.data[0].nome).toBe('Teste1');
        expect(response.body.data[0].cpf).toBe('12345678900');
        expect(response.body.data[1].nome).not.toBe('Teste3');
        expect(response.body.data[1].cpf).not.toBe('12345678901');
        expect(response.body.data[0].nome).not.toBe('Teste2');
        expect(response.body.data[0].cpf).not.toBe('12345678901');
        expect(response.status).not.toBe(404);

    })


    it('##POST /aluno', async () => {
        const response = await request ('http://localhost:8080')
        .post('/aluno')
        .send({
            nome: 'teste2',
            cpf: '123456789'
        });
    
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(response.body).not.toBe('Aluno cadastrado com sucesso');
        expect(response.body).toEqual({})
        expect(response.status).not.toBe(404);
    })
})



