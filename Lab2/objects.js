function fn(){
    const constObject = { name: "Dasha" };
    let letObject = { name: "Chafchaf" };

    console.log(constObject);
    console.log(letObject);

    constObject.name = "Egor";
    letObject.name = "Andrew";

    console.log(constObject);
    console.log(letObject);

    letObject = { name: "letName" };

    console.log(letObject);
}

fn();


function createUser(name, city){
    return {name, city};
}

console.log(createUser('Marcus Aurelius', 'Roma' ));
