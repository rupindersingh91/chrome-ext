async function fetchData() {
  const res = await fetch("https://api.weatherapi.com/v1/current.json?key=3139c695e43d4fc5baf51437240603&q=ludhiana");
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
