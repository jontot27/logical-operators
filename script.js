let age = 15;
let isRegistered = false;

console.log(`Age: ${age}
Registered?: ${isRegistered}`)

if(isRegistered){
    if(age >= 18) console.log(`Valid Voter!`);
    else console.log(`Invalid Voter!`);
}else{
    if (age >=18) console.log(`Register First!`);
    else console.log(`Non voter!`);
}

//Another way:
//if (isRegistered && age >= 18) console.log(`Valid Voter`);
//else if (!isRegistered && age >= 18) console.log(`Register First!`);
//else if (isRegistered && age < 18) console.log(`Invalid Voter!`);
//else if (!isRegistered && age < 18) console.log(`Non Voter!`);
