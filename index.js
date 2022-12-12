// code your solution here
function saturdayFun(input = 'roller-skate'){
    let target = input;
    return(`This Saturday, I want to ${target}!`)
};

function mondayWork(input = `go to the office`){
    let target = input;
    return(`This Monday, I will ${target}.`);

}
function wrapAdjective(icon ="*"){
    return function (adjective) {
        return `You are ${icon}${adjective}${icon}!`;
    }

};