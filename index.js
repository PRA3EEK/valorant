fetch('https://valorant-api.com/v1/weapons', {
  method: 'GET',

  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }

})
  .then(function (response) {
    return response.json();
  })
  .then(function (body) {
    console.log(body);
    display(body);
  })

let display = (body) => {

  let data = body.data;
  let parent = document.getElementById("weapons");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.style.border = "2px solid black";
    let img = document.createElement("img");
    let title = document.createElement("p");
    let descDiv = document.createElement("div");
    let equipTimeSeconds = document.createElement("p");
    equipTimeSeconds.innerText = 'Equip Time Seconds: ' + data[i].weaponStats.equipTimeSeconds;
    let fireRate = document.createElement("p");
    fireRate.innerText = 'Fire Rate: ' + data[i].weaponStats.fireRate;
    let firstBulletAccuracy = document.createElement("p");
    firstBulletAccuracy = 'First Bullet Accuracy: ' + data[i].weaponStats.firstBulletAccuracy;
    let magazineSize = document.createElement("p");
    magazineSize.innerText = 'Magazine Size: ' + data[i].weaponStats.magazineSize;
    let reloadTimeSeconds = document.createElement("p");
    reloadTimeSeconds.innerText = 'Reload Time Seconds: ' + data[i].weaponStats.reloadTimeSeconds;
    let runSpeedMultiplier = document.createElement("p");
    runSpeedMultiplier = 'Run Speed Multiplier: ' + data[i].weaponStats.runSpeedMultiplier;
    let shotgunPelletCount = document.createElement("p");
    shotgunPelletCount.innerText = 'Shotgun Pellet Count: ' + data[i].weaponStats.shotgunPelletCount;
    let wallPenetration = document.createElement("p");
    wallPenetration.innerText = 'Wall Penetration: ' + data[i].weaponStats.wallPenetration.split(":")[2];
    descDiv.append(equipTimeSeconds, fireRate, firstBulletAccuracy, magazineSize, reloadTimeSeconds, runSpeedMultiplier, shotgunPelletCount, wallPenetration);
    title.innerText = data[i].displayName;
    img.src = data[i].displayIcon;
    div.append(img, title, descDiv);
    parent.appendChild(div);
  }
}
