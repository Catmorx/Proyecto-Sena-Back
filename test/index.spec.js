import index from '../index.js';
import request from 'supertest';

describe('Data /api/economyActivity', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/economyActivity').send()
        expect(response.statusCode).toBe(200)
    })
    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/economyActivity').send({
            'name': '2394832 - test',
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/economyActivity/${id}`).send({
            'name': '2394832 - test2',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/economyActivity/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/economyActivity/${id}`).send()
        expect(response.statusCode).toBe(200)
    })

})

describe('Data /api/healthEntity', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/healthEntity').send()
        expect(response.statusCode).toBe(200)
    })
    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/healthEntity').send({
            'name': 'Sanitaz'
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/healthEntity/${id}`).send({
            'name': 'Sanitas'
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/healthEntity/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/healthEntity/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
})

describe('Data /api/bloodType', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/bloodType').send()
        expect(response.statusCode).toBe(200)
    })

    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/bloodType').send({
            'name': 'O-'
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/bloodType/${id}`).send({
            'name': 'O+',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/bloodType/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/bloodType/${id}`).send()
        expect(response.statusCode).toBe(200)
    })

})

describe('Data /api/entity', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/entity').send()
        expect(response.statusCode).toBe(200)
    })
    let idEntity = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/entity').send({
            'foreigner': 1,
            'typeIdentification': 'Cedula',
            'email': 'catauwu@gmail.com',
            'phone': '3135351234',
            'firstName': 'Catalina',
            'lastName': 'Rodriguez',
            'entityType': '1',
            'numberIdentification': '1155203490',
            'verificationDigit': null,
            'companyName': 'MRC TESX'
        })
        idEntity = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/entity/${idEntity}`).send({
            'companyName': 'MRC TESX SA',
            'phone': '3135351235',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/entity/${idEntity}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/entity/${idEntity}`).send()
        expect(response.statusCode).toBe(200)
    })
})



describe('Data /api/order', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/order').send()
        expect(response.statusCode).toBe(200)
    })
    let idEntity = 2
    // test('POST -> should respond with a 201 status code', async () => {
    //     const response = await request(index).post('/api/entity').send({
    //         'foreigner': 1,
    //         'typeIdentification': 'Cedula',
    //         'email': '124@gmail.com',
    //         'phone': '124235',
    //         'firstName': 'Catalina',
    //         'lastName': 'Rodriguez',
    //         'entityType': '1',
    //         'numberIdentification': '1341234',
    //         'verificationDigit': null,
    //         'companyName': 'MRC 124124'
    //     })
    //     idEntity = JSON.parse(response.text).id
    //     expect(response.statusCode).toBe(201)
    // })
    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/order').send({
            'transactionNumber': 'PS134',
            'salesRep': 'Maria',
            'taxAmount': 11,
            'memo': 'test',
            'discountAmount': 0,
            'entityId': idEntity
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/order/${id}`).send({
            'salesRep': 'Jose',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/order/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/order/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
})

describe('Data /api/adress', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/adress').send()
        expect(response.statusCode).toBe(200)
    })
    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/adress').send({
            "adressDr1": "Cra 100B",
            "adressDr2": "Cra 100B",
            "country": "Colombia",
            "town": "Cali",
            "zip": "770054",
            "memoAdress": "Prueba",
            "entityId": 2
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/adress/${id}`).send({
            'adressDr2': 'Calle 20 # 2',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/adress/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/adress/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
})

describe('Data /api/technicalData', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/technicalData').send()
        expect(response.statusCode).toBe(200)
    })
    let idFabric = 2
    // test('POST -> should respond with a 201 status code', async () => {
    //     const response = await request(index).post('/api/typeFabric').send({
    //         'name': 'punto a punto',
    //     })
    //     idFabric = JSON.parse(response.text).id
    //     expect(response.statusCode).toBe(201)
    // })
    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/technicalData').send({
            "description": "Prueba",
            "composition": "100% algodon",
            "madeYarn": "Algodón",
            "printedFabric": "0",
            "typeFabric": idFabric,
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/technicalData/${id}`).send({
            'printedFabric': '1',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/technicalData/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('DELETE -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/technicalData/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
})

describe('Data /api/item', () => {
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get('/api/item').send()
        expect(response.statusCode).toBe(200)
    })
    let idItemType = 2
    // test('POST -> should respond with a 201 status code', async () => {
    //     const response = await request(index).post('/api/itemType').send({
    //         'name': 'Servicio',
    //     })
    //     idItemType = JSON.parse(response.text).id
    //     expect(response.statusCode).toBe(201)
    // })
    let idTech = 14
    // test('POST -> should respond with a 201 status code', async () => {
    //     const response = await request(index).post('/api/technicalData').send({
    //         "description": "Prueba",
    //         "composition": "100% algodon",
    //         "madeYarn": "Algodón",
    //         "printedFabric": "0",
    //         "typeFabric": 2,
    //     })
    //     idTech = JSON.parse(response.text).id
    //     expect(response.statusCode).toBe(201)
    // })
    let id = ''
    test('POST -> should respond with a 201 status code', async () => {
        const response = await request(index).post('/api/item').send({
            "upc": 112414,
            "description": "Servicio Técnico",
            "foreinger": 0,
            "comercialName": 'Servicio Técnico',
            "cost": 2000,
            "rate": 5000,
            "itemTypeId": idItemType,
            "technicalDataId": idTech
        })
        id = JSON.parse(response.text).id
        expect(response.statusCode).toBe(201)
    })
    test('PUT -> should respond with a 202 status code', async () => {
        const response = await request(index).put(`/api/item/${id}`).send({
            'upc': '00014593AS',
        })
        expect(response.statusCode).toBe(202)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).get(`/api/item/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
    test('GET -> should respond with a 200 status code', async () => {
        const response = await request(index).delete(`/api/item/${id}`).send()
        expect(response.statusCode).toBe(200)
    })
})