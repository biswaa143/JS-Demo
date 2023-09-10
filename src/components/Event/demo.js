const radius = [1,2,3,4,5];

const area = (radius) => {
    return Math.PI * radius * radius;
}

function calculate(radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};
const res = calculate(radius, area);
console.log(res);