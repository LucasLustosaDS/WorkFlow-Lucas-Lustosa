const request = require('supertest') 

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async ()=> {
    // https://swapi.dev/api
    // /people/1
    const resposta = await request('https://swapi.dev/api').get('/planets/5');

    // Verificar se o status da requisição está retornando com status 200
    expect(resposta.status).toBe(200);
    // Verificando a garantia de essas informações existem, não sendo indefinida
    expect(resposta.body.films).toBeDefined();
    // Verificando se recupera um conteúdo específico, por exemplo o nome da primeira pessoa
    expect(resposta.body.name).toBe('Dagobah');

});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');
    // Verifica se o status da requisição está retornando falso com status 400
    expect(resposta.status).toBe(404);
    // Verifica o valor do corpo vazio não encontrado
    expect(resposta.body.detail).toBe('Not found');
    // Podemos verificar também o corpo vazio como objeto
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });

});
