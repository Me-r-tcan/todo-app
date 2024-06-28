const request = require('supertest');
const app = require("../app");

const url = "/api/todos";

describe('TODO API', () => {
  let todoId;

  describe('CREATE', () => {
    it('should create a new TODO item', async () => {
        const response = await request(app)
          .post(`${url}`)
          .send({
            title: 'Test TODO',
            description: 'Test description',
            status: 'PENDING'
          });
    
          console.log(response.body)
        
        expect(response.statusCode).toEqual(201);
        expect(response.body.title).toEqual('Test TODO');
        todoId = response.body.id;
      });
    
      it('should return validation error on invalid data', async () => {
        const response = await request(app)
          .post(`${url}`)
          .send({
            description: 'Test description',
            status: 'PENDING'
          });
      
        expect(response.statusCode).toEqual(400); 
        expect(response.body.error).toBeTruthy(); 
      });
  });

  describe('GET', () => {
    it('should fetch the created TODO item', async () => {
        const response = await request(app).get(`${url}/${todoId}`);
        
        expect(response.statusCode).toEqual(200);
        expect(response.body.title).toEqual('Test TODO');
      });

      it('should get all TODO items', async () => {
        const response = await request(app).get(url);
        
        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body.some(todo => todo.id === todoId)).toBeTruthy();
      });
  });

  describe('UPDATE', () => {
    it('should update the TODO item', async () => {
        const response = await request(app)
          .put(`${url}/${todoId}`)
          .send({
            title: 'Updated Test TODO',
            status: 'COMPLETED'
          });
        
        expect(response.statusCode).toEqual(200);
        expect(response.body.title).toEqual('Updated Test TODO');
        expect(response.body.status).toEqual('COMPLETED');
      });

      it('should return not found error on invalid id', async () => {
        const response = await request(app)
        .put(`${url}/${Number.MAX_SAFE_INTEGER}`)
        .send({
          title: 'Updated Test TODO',
          status: 'COMPLETED'
        });
      
        expect(response.statusCode).toEqual(404); 
        expect(response.body.error).toBeTruthy(); 
      });
  });

  describe('DELETE', () => {
    it('should delete the TODO item', async () => {
        const response = await request(app).delete(`${url}/${todoId}`);
        
        expect(response.statusCode).toEqual(200);
    
        // Check if the item is really deleted
        const getResponse = await request(app).get(`${url}/${todoId}`);
        expect(getResponse.statusCode).toEqual(404);
      });

      it('should return not found error on invalid id', async () => {
        const response = await request(app).delete(`${url}/${Number.MAX_SAFE_INTEGER}`)
      
        expect(response.statusCode).toEqual(404); 
        expect(response.body.error).toBeTruthy(); 
      });
  });
});
