let details = [{
    name: "Diana Beki",
    height: "5.6ft",
    country: "Kenya"
}];

details.forEach(details => {
    for(let key in details){
        console.log(`${key}: ${details[key]}`);
    }
});

