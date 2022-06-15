// Problem 1:Ana To Vori Converting
function anaToVori(ana) {
    if (typeof ana === "number" && ana >= 0) {
        return ana / 16;
    }
    return "please give a positive number type value";
}


// Problem 2: Panda Cost
function pandaCost(singara, somucha, jilapi) {
    if (
        typeof singara === "number" &&
        typeof somucha === "number" &&
        typeof jilapi === "number" &&
        singara >= 0 &&
        somucha >= 0 &&
        jilapi >= 0
    ) {
        return singara * 7 + somucha * 10 + jilapi * 15;
    }

    return "please give positive number type value";
}


// Problem 3:Picnic budget Calculating
function picnicBudget(persons) {
    if (typeof persons === "number" && persons >= 0) {
        let totalBudget = 0;
        for (let i = 1; i <= persons; i++) {
            if (i <= 100) {
                totalBudget += 5000;
            } else if (i > 100 && i <= 200) {
                totalBudget += 4000;
            } else {
                totalBudget += 3000;
            }
        }
        return totalBudget;
    }

    return "please give a positive number type value";
}


// Problem 4:oddFriend Finding
function oddFriend(names) {
    if (Array.isArray(names)) {
        let oddFriendName = "";
        for (let name of names) {
            if (typeof name === "string") {
                if (name.length % 2 === 1) {
                    oddFriendName = name;
                    break;
                }
            } else {
                return "Each Array value type must be string";
            }
        }
        return oddFriendName;
    }

    return "please give an array type value";
}
