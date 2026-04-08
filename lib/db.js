let users = [];

export function createUser(email, password){
    users.push({email, password, level:1, progress:0});
}

export function findUser(email){
    return users.find(u => u.email === email);
}

export function upgradeUser(email){
    let u = findUser(email);
    if(u) u.level = 2;
}

export function addProgress(email){
    let u = findUser(email);
    if(u) u.progress += 10;
}
