//declare all the type of var use in object (it act like a schema)

type objtype={name:string;age:number;email:string}

const person:objtype={
    name:'sanjeev Kumar',
    age:27,
    email:"sanjeev@123"
}

const user:objtype={
    name:'Ashu kumar',
    age:27,
    email:'ashu@gmail.com'
}

console.warn(`Person Details => \n${person.name} \n Age = ${person.age} \n email = ${person.email}\n`);
console.warn(`USer Details => \n${user.name} \n Age = ${user.age} \n email = ${user.email}`);

