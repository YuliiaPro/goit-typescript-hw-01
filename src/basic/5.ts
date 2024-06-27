// Завдання 5
// Виконуйте це завдання у файлі src/basic/5.ts.
// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }
// const isWeekend = (day) => {
// }

enum DayOfWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek): boolean => { 
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
}



