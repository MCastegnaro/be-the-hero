const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Teste ong",
                email: "teste@ongmail.com",
                whatsapp: "45000000000",
                city: "Foz do iguacu",
                uf: "PR"
            });

        console.log(response.body.id);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});