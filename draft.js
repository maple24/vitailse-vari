const user = {
    name: 'maple',
    age: 24
}

function renderuser(app, { name, age }) {
    console.log(app);
    console.log(`${name}: ${age}`);
}

renderuser('app', { name: 'maple', age: 22 })