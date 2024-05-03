// Open a database
// Create objectstore
// Make Transaction
let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e) => {
    console.log("DB Success");
    db = openRequest.result;
})
openRequest.addEventListener("error", (e) => {
    console.log("DB Error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB  and also for initial DB creation");
    db = openRequest.result;

    console.log(db);

    db.createObjectStore("video", { keyPath: "id"});
    db.createObjectStore("image", { keyPath: "id"});
})