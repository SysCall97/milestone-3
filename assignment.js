function feetToMile(feet) {
    if(feet<0) {
        return "Warning: Distance can not be negative.";
    }
    //5280 feet = 1 mile
    //1 feet = (1/5280) mile
    let mile = (feet / 5280);
    return mile.toFixed(9); //for return the value with 9 decimal value
}


function woodCalculator(chair, table, bed) {
    if(chair<0 || table<0 || bed<0) {
        return "Number of chair, table and bed can not be less than zero.";
    }
    let woodForChair = (chair * 1);
    let woodForTable = (table * 3);
    let woodForBed = (bed * 5);
    let totalWood = (woodForChair + woodForTable + woodForBed);
    return totalWood;
}


function brickCalculator(numberOfFloors) {
    if(numberOfFloors<0) {
        return "Number of floors can not be negative.";
    }
    const bricksPerFeet = 1000;
    let buildingHeight = numberOfFloors*10; //In general 10 feet for every floor

    //5 feet extra for 1st 10 floors
    if(numberOfFloors<=10) {
        buildingHeight += (numberOfFloors*5);
    } else {
        buildingHeight += 50;
    }

    //2 feet extra for 2nd 10 floors
    numberOfFloors -= 10; //subtracting the first 10 floors
    if(numberOfFloors>0) {
        if(numberOfFloors<=10) {
            buildingHeight += (numberOfFloors*2);
        } else {
            buildingHeight += 20;
        }
    }

    const totalBricks = (buildingHeight * bricksPerFeet);
    return totalBricks;
}


function tinyFriend(friendNames) {
    if(friendNames.length == 0) {
        return "Warning: No names in the array."
    }
    let ans = friendNames[0];

    for(let i=1; i<friendNames.length; ++i) {
        //these conditions is to handle if there are strings with length=0 and the lexicography smallest in case of there are several names with same length.
        if(friendNames[i].length>0 && (ans.length==0 || ans.length > friendNames[i].length || (ans.length == friendNames[i].length && ans > friendNames[i]))) {
            ans = friendNames[i];
        }
    }
    return ans;
}





// Test function-1
// console.log(feetToMile(1));
// console.log(feetToMile(10));
// console.log(feetToMile(-10));//string
// console.log(feetToMile(5280));


// Test function-2
// console.log(woodCalculator(3, 6, 4)) //3*1 + 6*3 + 4*5 = 3 + 18 + 20 = 41
// console.log(woodCalculator(6, 4, 9)) //6*1 + 4*3 + 9*5 = 6 + 12 + 45 = 63


// Test function-3
// console.log(brickCalculator(-1)); //string
// console.log(brickCalculator(0)); //0
// console.log(brickCalculator(5)); //75000
// console.log(brickCalculator(10)); //150000
// console.log(brickCalculator(17)); //234000
// console.log(brickCalculator(20)); //270000
// console.log(brickCalculator(31)); //380000


// Test function-4
// console.log(tinyFriend(["abed", "babul", "kabul", "jabul", "sabul", "abi"])); //abi
// console.log(tinyFriend(["jamal", "kamal", "samal", "jamil", "aamal"])); //aamal
// console.log(tinyFriend(["", "jamal", "kamal", "samal", "jamil", "aamal", ""])); //aamal
// console.log(tinyFriend(["", "", "jamal", "", "", "", ""])); //jamal