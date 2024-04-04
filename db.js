let db;
let openRequest = indexedDB.open("myDataBase", 3);
openRequest.addEventListener("success", (e) => {
    console.log("DB Success");
})
openRequest.addEventListener("error", (e) => {
    console.log("DB Error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB upgraded");
})