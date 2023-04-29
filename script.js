let kesavanresume = {
    basics: {
        name: "KESAVAN.J",
        email: "kesavankishore3@gmail.com",
        phone: 6384211299,
        degree: "b.com",
        location: {
            address: "120/140 Muthu mari amman kovil steet periyar nagar thiruttani",
            postalCode: 631209,
            city: "thiruttani",
            state: "Tamilnadu",
            country: "India"
        },

        "work": [
            {
                company: "AQUATECH PVT LTD",
                position: "operational process",
                startDate: "15-12-2021",
                endDate: "29-4-2023",
            },
        ],

        education: [
            {
                institution: "jaya arakkonma arts & science college",
                department: "commerce",
                studyType: "fulltime",
                batchstartyear: 2018,
                batcendyear: 2021,
                gpa: 7.3,
            }
        ],
        skills: [
            {
                name: "javascript",
                level: "beginer",
            }
        ],
        languages: [
            {
              language: "Tamil,Enlish",
            }
          ],
    }
}



// For the given JSON iterate over all for loops (for, for in, for of, forEach)

var detailes = [{
    name : "raja1", 
    dob   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    address : "zen portal task",
    mail: "kesavankishore3@gmail.com"
}]

//for loop
for(var i = 0; i < detailes.length; i++) {
    console.log(detailes)
}
//for Each
json.forEach(function(detailes) { console.log(detailes.dob); });

//for In
for (var key in detailes) {
if (detailes.hasOwnProperty(key)) {
  console.log(detailes[key].address);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of detailes[key].mail) {
 text += x; 
}
 console.log(text);