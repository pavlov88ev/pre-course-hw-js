let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clonePassport = {};

Object.assign(clonePassport, passport, {name: "Ivan"});

console.log(passport.name);
console.log(clonePassport.name)