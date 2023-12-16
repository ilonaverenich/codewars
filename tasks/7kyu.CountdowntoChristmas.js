/* Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.
The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.
Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.
Watch out for leap years! */

function daysUntilChristmas(currentDate) {
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // December is 11
    if (currentDate > christmasDate) {
      const nextChristmasDate = new Date(currentDate.getFullYear() + 1, 11, 25);
      const daysUntilNextChristmas = Math.ceil((nextChristmasDate - currentDate) / (1000 * 60 * 60 * 24));
      return daysUntilNextChristmas;
    } else {
      const daysUntilChristmas = Math.ceil((christmasDate - currentDate) / (1000 * 60 * 60 * 24));
      return daysUntilChristmas;
    }
  }