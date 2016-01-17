var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarEmpleado = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  var randomArea = faker.name.jobArea();
  var randomType = faker.name.jobType();
  var randomPhone = faker.phone.phoneNumber();
  var randomContratado = faker.random.boolean();
  var randomDateOfBirth = faker.date.past();
  var randomCountry = faker.address.country();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage,
    area : randomArea,
    tipo : randomType,
    telefono : randomPhone,
    estado_contratado : randomContratado,
    fecha_nacimiento : randomDateOfBirth,
    pais : randomCountry
  };
};

app.get('/empleados', function (req, res) {
  var cantidad = _.random(5,10);
  var usuarios = _.times(cantidad, generarEmpleado);
  res.json(usuarios);
});

var generarEmpresa = function () {
  var randomName = faker.company.companyName();
  var randomEslogan = faker.company.catchPhrase();
  var randomAdjective = faker.company.bsAdjective();
  var randomAccount = faker.finance.account();
  var randomDate = faker.date.past();
  return {
    nombre: randomName,
    eslogan: randomEslogan,
    adjetivo: randomAdjective,
    cuenta: randomAccount,
    fecha_creacion: randomDate
  };
};

app.get('/empresas', function (req, res) {
  var cantidad = _.random(5,10);
  var empresas = _.times(cantidad, generarEmpresa);
  res.json(empresas);
});


app.listen(3000);