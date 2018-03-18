// Challenge 1 - Print out the objects
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for ( let item in students) {
    n = students[item].name;
    c = students[item].cohort;
    console.log("Name:", n, ", Cohort:", c);
}
// Challenge 2 - Print out new objects.
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 for ( let x in users) {
     console.log(x.toString().toUpperCase());
     for (let y in users[x]) {
        first = users[x][y].first_name;
        last  = users[x][y].last_name;
        count = first.length + last.length;
        let itemnum = Number(y) + 1;
        console.log(itemnum + ' - ' + last + ', ' + first + ' - ' + count)
     }
 }