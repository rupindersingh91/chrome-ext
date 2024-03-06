async function fetchData() {
  const res = await fetch("https://api.weatherapi.com/v1/current.json?key={APIKEY}&q={CITY}");
  const record = await res.json();

  var currentIcon = document.getElementById("current-icon");
  currentIcon.src = "https:" + record.current.condition.icon;

  document.getElementById("current-text").innerHTML = record.current.condition.text;

  document.getElementById("current-city").innerHTML = record.location.name;
  
  document.getElementById("current-state").innerHTML = record.location.region;

  document.getElementById("current-country").innerHTML = record.location.country;
  
  document.getElementById("current-temp_c").innerHTML = record.current.temp_c;
}
fetchData();
