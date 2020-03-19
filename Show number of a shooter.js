// (I WAS SO CLOSE BUT WAS AFRAID!!!)
function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();
console.log(army);
