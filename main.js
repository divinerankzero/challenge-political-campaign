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
                monday: 'none',
                tuesday: 'none',
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
                monday: 'none',
                tuesday: 'none',
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
    images: {
        headShot: './images/headshot.jpg',
        family: './images/family.jpg',
        constituents: './images/constituents.jpg'

    },
    missionStatement: "Paragraphs of text",
    registrationURL: "elizabethsanger.com/register"
}

console.table(elizabeth.volunteers);