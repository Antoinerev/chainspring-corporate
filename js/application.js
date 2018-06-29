function convertMS( milliseconds ) {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds
  };
}
var start = convertMS((new Date("2018-09-01T09:00:00") - new Date(Date.now())))
var g1, g2, g3, g4;

document.addEventListener("DOMContentLoaded", function(event) {
  g1 = new JustGage({
    id: "g1",
    value: start.day,
    min: 0,
    max: 365,
    donut: true,
    label: "jours",
    valueFontColor: "#FFFFFF",
    relativeGaugeSize: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: true
  });
  g2 = new JustGage({
    id: "g2",
    value: start.hour,
    min: 0,
    max: 24,
    donut: true,
    label: "heures",
    valueFontColor: "#FFFFFF",
    relativeGaugeSize: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: true
    });
  g3 = new JustGage({
    id: "g3",
    value: start.minute,
    min: 0,
    max: 60,
    donut: true,
    label: "minutes",
    valueFontColor: "#FFFFFF",
    relativeGaugeSize: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: true,
    refreshAnimationTime: 1,
    refreshAnimationType: "linear"
    });
  g4 = new JustGage({
    id: "g4",
    value: start.seconds,
    min: 0,
    max: 60,
    donut: true,
    label: "secondes",
    valueFontColor: "#FFFFFF",
    relativeGaugeSize: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: true,
    refreshAnimationTime: 1,
    refreshAnimationType: "linear"
    });

  setInterval(function() {
      g1.refresh(convertMS((new Date("2018-09-01T09:00:00") - new Date(Date.now()))).day);
  }, 360000);

  setInterval(function() {
      g2.refresh(convertMS((new Date("2018-09-01T09:00:00") - new Date(Date.now()))).hour);
  }, 360000);

  setInterval(function() {
      g3.refresh(convertMS((new Date("2018-09-01T09:00:00") - new Date(Date.now()))).minute);
  }, 1000);

  setInterval(function() {
      g4.refresh(convertMS((new Date("2018-09-01T09:00:00") - new Date(Date.now()))).seconds);
  }, 1000);
});
