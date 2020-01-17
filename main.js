const elizabeth = {
    congressionalDistrict: "5th Congressional district of Tennessee",
    platform: {
        taxes: "",
        jobs: "",
        infrastructure: "",
        healthCare: "",
        crimeAndEnforcement: "",
    },
    donationURL: 'elizabethsanger.com/donate',
    calendarOfEvents: 'elizabethsanger.com/calendar',
    volunteers: [
        {
            fname: "Laurie",
            lname: "Lovette",
            email: "llovette@yahoo.com",
            phone: "601-430-5117",
            availability: 
            {
                sun: 'none',
                mon: 'none',
                tues: 'none',
                weds: 'evenings',
                thurs: 'mornings',
                fri: 'evenings',
                sat: 'mornings'
            },
            activitiesWillingToPerform: 
            {
                answeringCalls: true,
                takingPolls: false,
                goingDoorToDoor: false
            },

        },
        {
            fname: "Brad",
            lname: "Stone",
            email: "bradstone@yahoo.com",
            phone: "215-960-6488",
            availability: 
            {
                sun: 'evenings',
                mon: 'none',
                tues: 'none',
                weds: 'evenings',
                thurs: 'mornings',
                fri: 'evenings',
                sat: 'mornings'
            },
            activitiesWillingToPerform: 
            {
                answeringCalls: true,
                takingPolls: true,
                goingDoorToDoor: true
            },

        }
    ],
    biography: "Paragraphs of text",
    images: [
        './images/headshot.jpg',
        './images/family.jpg',
        './images/constituents.jpg'
    ],
    missionStatement: "Paragraphs of text",
    registrationURL: "elizabethsanger.com/register"
}

// Advanced Challenge Functions

function addToImageGallery(newImage) {
    elizabeth.images.push(newImage);
    console.log(`${newImage} added to Image Gallery`);
}

function changeBiography (newBiography) {
    elizabeth.biography = newBiography;
    console.log(`New Biography added`);
}

function changePlatform (topic, newPlatformStatement) {
    elizabeth.platform.topic = newPlatformStatement;
    console.log(`Stance on ${topic} added`)
}

function addVolunteer (firstName, lastName, emailAddy, phoneNo) {
    elizabeth.volunteers.push(
        {
            fname: firstName,
            lname: lastName,
            email: emailAddy,
            phone: phoneNo,
        }
    )
} 

function addVolunteerAvailability (firstName, lastName, sundayAvail, mondayAvail, tuesdayAvail, wednesdayAvail, thursdayAvail, fridayAvail, saturdayAvail) {
    for (let i = 0; i < elizabeth.volunteers.length; i ++) {
        if (elizabeth.volunteers[i].fname === firstName && elizabeth.volunteers[i].lname === lastName) {
            elizabeth.volunteers[i].availability = {
                sun: sundayAvail,
                mon: mondayAvail,
                tues: tuesdayAvail,
                weds: wednesdayAvail,
                thurs: thursdayAvail,
                fri: fridayAvail,
                sat: saturdayAvail
            }
        }
    }
}

// Testing Advanced Challenge Functions by adding a new Volunteer & Availability
addVolunteer("Sam", "McNeil", "smcneil@hotmail.com", "405-423-0334");
console.log(elizabeth.volunteers);
addVolunteerAvailability ("Sam", "McNeil", "free", "busy", "busy", "busy", "free", "busy", "busy");
console.log(elizabeth.volunteers[2].availability);

// Testing Previous Functions
addToImageGallery("coolpic.jpg");
console.log(elizabeth.images);
changeBiography("Was born in a house her father built");
console.log(elizabeth.biography);
changePlatform("Guns", "Take them away");
console.log(elizabeth.platform);