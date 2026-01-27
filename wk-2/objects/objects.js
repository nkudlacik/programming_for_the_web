const nicolesCar = {
    color: 'black',
    pistons: 4
};
console.log(nicolesCar);

// mutate: add date (properties)
nicolesCar.fuelInjection = true;
console.log(nicolesCar);    
nicolesCar['4-wheel-drive'] = true;

// display single item with dot
console.log('nicoles car is', nicolesCar.color);

// display single item with array notation
console.log('is it 4-wheel-drive?', nicolesCar['4-wheel-drive']);

// using toString (works w arrays, too)
console.log(nicolesCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

//mutate: remove properties\
delete nicolesCar.pistons;
console.log('nicoles car without pistons', nicolesCar); 

//merge two objects
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'nissan'
}

const newJuke = Object.assign({}, basicJuke, nicolesCar)
console.log('new juke:', newJuke);

// objects in arrays; think tables and spreadsheets
const cars = [
    { make: 'nissan', model: 'rogue', color: 'orange' }, 
    { make: 'nissan', model: 'altima', color: 'blue' },
    { make: 'dodge', model: 'viper', color: 'blue' },
    { make: 'vw', model: 'beetler', color: 'pink' },
    { make: 'chevy', model: 'blazer', color: 'black' },
    { make: 'dodge', model: 'charger', color: 'green' }   
]
console.log('index 0 of car colors', cars[0].color);
//choosing random car from array of cars
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('my car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);