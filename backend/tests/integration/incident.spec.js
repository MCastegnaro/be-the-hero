const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENT', () => {
    let ong_id, incident_id;

    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();

        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Teste ong",
                email: "teste@ongmail.com",
                whatsapp: "45000000000",
                city: "Foz do iguacu",
                uf: "PR"
            });

        ong_id = response.body.id;
    });


    it('shoud be able to create a new INCIDENT', async () => {
        expect(ong_id).toHaveLength(8);

        const response = await request(app)
            .post('/incidents')
            .set('Authorization', ong_id)
            .send({
                title: "Caso teste",
                description: "Descricao teste",
                value: 100
            });


        expect(response.body).toHaveProperty('id');
        expect(typeof response.body.id).toBe('number');

        incident_id = response.body.id;
    });

    it('shoud be able to delete a INCIDENT', async () => {

        expect(typeof incident_id).toBe('number');

        const response = await request(app)
            .delete(`/incidents/${incident_id}`)
            .set('Authorization', ong_id);


        expect(response.status).toBe(204);
        expect(typeof response.body).toBe('object');
    })

    afterAll(async () => {
        await connection.destroy();
    });
});