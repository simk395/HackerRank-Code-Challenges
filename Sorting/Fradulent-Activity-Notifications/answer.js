function activityNotifications(e, d) {
  let notices = 0,
    start = 0,
    end = d,
    odd = Math.floor(d / 2),
    even = Math.ceil(d / 2);

  while (end < e.length) {
    let day = e.slice(start, end);
    day.sort((a, b) => a - b);
    if (d % 2 !== 0 && day[odd] * 2 <= e[end]) notices++;
    if (d % 2 === 0) {
      let median = (day[odd] + day[even]) * 2;
      if (median <= e[end]) notices++;
    }
    start++, end++;
  }
  return notices;
}
