const getAgeYear = (age) => {
    let t = age;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneYear = 12 * 30 * 24 * 60 * 60 * 1000;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    // let days = t / oneDay;
    // days = Math.floor(days);
    let year = Math.floor(t / oneYear);
    let month = Math.floor((t % oneYear) / oneMonth);
    let day = Math.floor((t % oneMonth) / oneDay);``
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    return { year, month, day, hours, minutes, seconds };
  };
  const calculateAge = () => {
    let age = new Date().getTime() - time.t;
    let ageYear = getAgeYear(age);
    console.log(ageYear);

    let text = Your Age is ${ageYear.year} year ${ageYear.month} month ${ageYear.day} days ${ageYear.hours} hour ${ageYear.minutes} minutes ${ageYear.seconds} seconds  ;
    setInText(text);
  };