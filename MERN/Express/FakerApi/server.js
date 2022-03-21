const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

class User {
    constructor() {
      this.firstName = faker.name.firstName();
      this.lastName =  faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
  }

  class Company {
    constructor() {
      this.name = faker.company.companyName();
      this.street =  faker.address.streetName();
      this.city = faker.address.cityName();
      this.zipCode = faker.address.zipCode();
      this.county = faker.address.county();
    }
  }

app.get("/api", (req,res)=>{
    res.json({message: "Super Duper Secret Route"})
})

app.get("/api/user", (req,res)=>{
    res.json(new User())
})

app.get("/api/company", (req,res)=>{
    res.json(new Company())
})

app.get("/api/both", (req,res)=>{
    res.json(new Company(), new User())
})

app.listen(port,()=>console.log("Running!"))
console.log(new Company(), new User())