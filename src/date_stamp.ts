const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondsDiff = (timestamp: any) => (Date.now() - timestamp) / 1000;

const getUnitAndValueDte = (secondElapsed: any) => {
  console.log('dateEntries ===>',Object.entries(DATE_UNITS))
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondElapsed >= secondsInUnit || unit === "second") {
      const value: any = Math.floor(secondElapsed / secondsInUnit) * -1;

      return { value, unit };
    }
  }
};

const getTimeAgo = (timestamp: any) => {
  const rtf = new Intl.RelativeTimeFormat();
  console.log('rtf ==>', rtf);

  const secondElapsed = getSecondsDiff(timestamp);
  console.log('secondElapsed ==>', secondElapsed);

  const info = getUnitAndValueDte(secondElapsed);
  console.log('info ==>', info)


  return rtf.format(info?.value, (info?.unit) as any);
};


const threeHoursAgoDate = Date.now() - (3 * 60 * 60 * 1000)
console.log(getTimeAgo(threeHoursAgoDate))