const request = require('supertest')
const { app } = require('./index')


describe('Hello World Test', () => {
  test('should be return a hello world', async () => {
    const response = await request(app).get('/').set('Content-Type', 'text/html')


    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
  })
})

describe('Regex Test', () => {
  test('should be return a input value', async () => {
    const response = await request(app).get(`/regex/ab7cd`)
    
    expect(response.status).toBe(200)
    expect(response.text).toBe('Voce digitou ab7cd')
  })

  test('should not be return a string input value', async () => {
    const response = await request(app).get(`/regex/abxcd`)
    
    expect(response.status).toBe(404)
  })
})

describe('Users Test', () => {
  test('should be return a new user', async () => {
    const response = await request(app).post(`/users`).send({
      id: 1,
      name: 'John Doe'
    })

    expect(response.status).toBe(201)
    expect(response.body.id).toBe(1)
    expect(response.body.name).toBe('John Doe')
  })

  test('should be return a existent user', async () => {
    const response = await request(app).get(`/users/1`)

    expect(response.status).toBe(200)
    expect(response.body.id).toBe(1)
    expect(response.body.name).toBe('John Doe')
  })

  test('should not be return a not found user', async () => {
    const response = await request(app).get(`/users/99`)

    expect(response.status).toBe(404)
  })

  test('should be return a list of users', async () => {
    await request(app).post(`/users`).send({
      id: 2,
      name: 'Mary Jane'
    })

    const response = await request(app).get(`/users`)

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(2)
  })

  test('should be able to delete a user', async () => {
        const response = await request(app).delete(`/users/1`)

    expect(response.status).toBe(204)
  })

  test('should not be able to delete a not found user', async () => {
    const response = await request(app).delete(`/users/1`)

    expect(response.status).toBe(404)
})
})