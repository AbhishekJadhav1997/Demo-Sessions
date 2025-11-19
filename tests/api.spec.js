import { test, expect } from '@playwright/test';
let userid;

test('get user', async ({ request }) => {

   const response= await request.get('https://reqres.in/api/users?page=2')
   console.log(await response.json())
   expect(response.status()).toBe(200)
 
});


test('create user', async ({ request }) => {
 
     const response=await request.post('https://reqres.in/api/users',{
        data:{
                "name":"test1",
                "job":"manager"
        },
        headers :{
           "x-api-key": "reqres-free-v1"
        }
     })
     console.log(await response.json())
     expect(await response.status()).toBe(201)

     const res=await response.json()
     userid=res.id
});

test('update user', async ({ request }) => {
 const response=await request.put('https://reqres.in/api/users/'+ userid,{
        data:{
                "name":"test1",
                "job":"Test Enginner"
        },
        headers :{
           "x-api-key": "reqres-free-v1"
        }
     })
     console.log(await response.json())
     expect(await response.status()).toBe(200) 

});

test('delete user', async ({ request }) => {
 
  const response= await request.delete('https://reqres.in/api/users/'+userid ,{

     headers :{
           "x-api-key": "reqres-free-v1"
        }
  })
   expect(response.status()).toBe(204)
});
