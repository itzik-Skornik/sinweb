import React from 'react'
import Hebcal from 'hebcal';
// function AddZanime(num) {
//     const today = new Hebcal();
//     const zmamin222 = today.find('today')[0].getZemanim()
//     const shkiah2MS = new Date(zmamin222.shkiah).getTime()
//     const fiftyMinutesBeforShkiah = new Date(shkiah2MS + (num * 60 * 1000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     return fiftyMinutesBeforShkiah;
// }
// function ResZanime(day, num) {
//     const today = new Hebcal();
//     const zmamin222 = today.find('today')[0].getZemanim()
//     const shkiah2MS = new Date(zmamin222.shkiah).getTime()
//     console.log(shkiah2MS);
//     const fiftyMinutesBeforShkiah = new Date(shkiah2MS - (num * 60 * 1000) ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     console.log(shkiah2MS);

//     return fiftyMinutesBeforShkiah;
// }

function reduceMinuite(date, minute) {
    let SECENDS_IN_MINUITE = 60
    let MS_IN_SECENDS = 1000
    return new Date(date.getTime() - (minute * SECENDS_IN_MINUITE * MS_IN_SECENDS))
}
function addMinuite(date, minute) {
    let SECENDS_IN_MINUITE = 60
    let MS_IN_SECENDS = 1000
    return new Date(date.getTime() + (minute * SECENDS_IN_MINUITE * MS_IN_SECENDS))
}

function getTimeFromDate(date) {
    let time = date.toLocaleTimeString();
    let prettyTime = (time.length === 8) ? time.substr(0, 5) : '0' + time.substr(0, 4)
    return prettyTime;
}

export { reduceMinuite, addMinuite, getTimeFromDate }