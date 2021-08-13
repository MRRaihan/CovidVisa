
const NotificationData =[
    {
        title: "Covid Visa",
        statusDetails: "Your antibody is about to expire in a month ",
        time: "3:55PM  10 May 2021",
    },
    {
        title: "UTTPS",
        statusDetails: "Your vaccine shedule is activated. Please come to center at 12 May.",
        time: "10:15PM  5 May 2021",
    },
    {
        title: "Government",
        statusDetails: "Please follow the rules to avoid COVID spread. Stay home and stay safe. ",
        time: "3:55PM  1 May 2021",
    },
    {
        title: "Kuet Moitri Hospital",
        statusDetails: "Congratulations! Your  PCR result is negative. This result is valid for next 48 hours.",
        time: "12:30PM  20 May 2021",
    },
];

export default NotificationData;


// // Try to pass the value using mapping
// {
//                     NotificationData.map((val, ind) =>{
//                     return <Card 
//                               key={ind} 
//                               title={val.title}
//                               statusDetails={val.statusDetails}
//                               time={val.time}
//                               />
//                     })
//           }