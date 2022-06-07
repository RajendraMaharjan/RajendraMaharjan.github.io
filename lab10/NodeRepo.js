function odd(arr) {
    let result = [];
    for (const item of arr) {
        if (item % 2 == 1) {
            result.push(item);
        }
    }
    return result;
}

function even(arr) {
    let result = [];
    for (const item of arr) {
        if (item % 2 == 0) {
            result.push(item);
        }
    }
    return result;
}

function DivisibleBy4(arr) {
    let result = [];
    for (const item of arr) {
        if (item % 4 == 0) {
            result.push(item);
        }
    }
    return result;
}

function SumThem(arrr) {
    let sum = 0;
    for (const item of arrr) {
        if (typeof item == "number") {
            sum += item;
        }
    }
    return sum;
}

function findUniqueArray(arr) {
    let result = [];
    if (arr.length > 0) {
        result.push(arr[0]);
    }

    for (const item of arr) {
        if (result.indexOf(item) < 0) {
            result.push(item);
        }
    }
    return result;
}

function transform(arr) {

    let transformed = [];
    for (const item of arr) {
        let typ = typeof item;
        transformed.push(typ);
    }
    return transformed;
}

function transformUniqueTypeOnly(arr) {

    let transformed = [];

    if (arr.length > 0) {
        let typ = typeof arr[0];
        transformed.push(typ);
    }

    for (const item of arr) {

        let typ = typeof item;
        if (transformed.indexOf(typ) < 0) {
            transformed.push(typ);
        }
    }
    return transformed;
}

function destructiveArray(arr) {

    let dest = {};

    for (let i = 0; i < arr.length; i++) {
        let typ = typeof arr[i];

        let key = typ + i
        dest[key] = arr[i];
    }
    return dest;

}

function findFirstOddIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (typeof item == "number") {
            if (item % 2 == 1) {
                return i;
            }
        }
    }
    return "-1";
}

function convertStringToArray(str) {
    let tmpAR = [];
    for (let i = 0; i < str.length; i++) {
        const element = str.charAt(0);
        tmpAR.push(tmpAR);
    }
    return tmpAR;
}
function convertArrayToString(arr) {
    let tmpST = "";
    for (let i = 0; i < arr.length; i++) {
        tmpST += arr[i];
    }
    return tmpST;
}

//Second part//
function convertObjectToArray(objArr) {
    if (typeof objArr != "object") {
        return [];
    }

    let temp = [];
    for (const key in objArr) {
        let start = objArr[key];
        if (typeof start != "object") {
            temp.push(key + start);
            // console.log("RAJ-Check 1st", typeof start == "object");
        } else if (Array.isArray(start)) {
            temp.push(key + convertArrayToString(start))
        } else if (typeof start == "object") {
            let joinThem = "";
            joinThem += key;

            iteratingObject(temp, joinThem, start)
        }
    }
    return temp;
}

let condition = true;
function iteratingObject(temp, joinThem, start) {
    for (const key in start) {
        let ownKey = joinThem + key;
        let ownValue = start[key];
        if (typeof ownValue != "object") {
            condition = false;
            // console.log("RAJ-check obj", typeof ownValue == "object");
            temp.push(ownKey + ownValue)
        } else {
            condition = true;
            // console.log(ownValue);
            // console.log(joinThem);
            // console.log("RAJ-check obj", typeof ownValue == "object");
            while (condition) {
                iteratingObject(temp, ownKey, ownValue);
            }
        }
    }
}

// 2. Minify Object
function minifyObject(filterKey, array) {
    let collect = [];
    for (const item of array) {
        minifyLoopHelper(collect, item, filterKey)
    }
    return collect;
}

function minifyLoopHelper(collect, item, filterKey) {
    for (const key in item) {
        if (filterKey == key) {
            let injane = {};
            injane[key] = item[key]
            collect.push(injane);
        }
    }
}

// 3. Get the Oldest person age 
function findOldestPerson(array) {

    let temp = {};

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let isObject = (typeof item == "object");

        if (i == 0) {
            for (const key in item) {
                temp[key] = item[key];
            }
        } else {
            // console.log("temp.age", temp.age);
            // console.log("item.age", item.age);
            if (temp.age < item.age) {
                for (const key in item) {
                    temp[key] = item[key];
                }
            }
        }
    }

    return "Oldest Person: " + temp.name + " Age: " + temp.age;
}

// 4. Get the Youngest person age 
function findYoungestPerson(array) {

    let temp = {};

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let isObject = (typeof item == "object");

        if (i == 0) {
            for (const key in item) {
                temp[key] = item[key];
            }
        } else {
            // console.log("temp.age", temp.age);
            // console.log("item.age", item.age);
            if (temp.age > item.age) {
                for (const key in item) {
                    temp[key] = item[key];
                }
            }
        }
    }

    return "Youngest Person: " + temp.name + " Age: " + temp.age;
}


// 5. Find the person whose age is between 16 and 17 years.
function findYounger(array) {

    let list = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        // console.log(item);

        if (item.age > 14 && item.age < 18) {
            let temp = {};
            for (let key in item) {
                temp[key] = item[key];
            }
            // console.log(temp);
            list.push(temp);
        }
    }

    return list;
}

module.exports = {
    OddExp: odd, EvenExp: even, Div4Exp: DivisibleBy4
    , SumExp: SumThem, Unique: findUniqueArray, transform, transformUniqueTypeOnly, convertStringToArray
    , destructiveArray, findFirstOddIndex, convertArrayToString, convertObjectToArray
    , minifyObject, findOldestPerson, findYoungestPerson, findYounger
};
