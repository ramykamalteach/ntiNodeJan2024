arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

arabicDays = ["الأحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

const arabicDate = (theDate) => {
    const ourDate = new Date(theDate);
    dayNameInArabic = arabicDays[ourDate.getDay()];
    dayNumberInMonth = ourDate.getDate();
    monthNameInArabic = arabicMonths[ourDate.getMonth()];
    yearNumber = ourDate.getFullYear();

    fullArabicDateFormate = dayNameInArabic + " " + dayNumberInMonth + " " + monthNameInArabic + " " + yearNumber;

    return fullArabicDateFormate;
}

module.exports = {
    arabicDate
}