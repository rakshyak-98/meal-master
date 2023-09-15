DB_PREFIX="meal-master"
let request = indexedDB.open(DB_PREFIX, 1)

request.onupgradeneeded = function(event){
    let db = event.target.result;
    let objectstore = db.createObjectStore('contacts', {keyPath: 'id', autoIncrement: true})
    objectstore.createIndex('name', 'name', {uique: false})
}


request.onsuccess = function(event){
    let db = event.target.result
    console.log(event)
}

request.onerror = function(event){
    console.log(event)

}

