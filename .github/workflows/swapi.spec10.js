const request = require('supertest')

test('Deve visualizar informação de cadastro, quando buscar por uma pessoa existente', async ()=> {
    // https://swapi.dev/api
    // /people/1
    const resposta = await request('https://swapi.dev/api').get('/planets/9');

    //verificar se o status da requisição está retornando verdadeira com status 200
    expect(resposta.status).toBe(200);
    // verificando a garantia de essas informações existem, não sendo indefinida
    expect(resposta.body.films).toBeDefined();
    // verificando se recupera um conteúdo específico, por exemplo o nome da primeira pessoa
    expect(resposta.body.name).toBe('Coruscant');

});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999');
    // verifica se o status da requisição está retornando falso com status 400
    expect(resposta.status).toBe(404);
    // verifica o valor do corpo vazio não encontrado
    expect(resposta.body.detail).toBe('Not found');
    // podemos verificar também o corpo vazio como objeto
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});
