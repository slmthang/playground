"use strict";
let user = {
    username: 'Luffy',
    userid: 'luffy23',
    email: 'luffy@gmail.com',
    phone: 3176652175,
    dob: '01/01/2000',
    password: 'luffy123',
    sayHi() {
        console.log(`Hi, I am ${this.username}.`);
    }
};
user.sayHi();
