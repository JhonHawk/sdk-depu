let singler = window.navigator.connection;
console.log(singler, "network api");
let connection = document.getElementById('connection')?.innerHTML;
let hostname = document.getElementById('hostname');
let ip = document.getElementById('ip');
let org = document.getElementById('org');
let li = document.getElementsByTagName('li')

try {
    // fetch("https://ipinfo.io/json")
    // fetch('https://ipinfo.io/201.175.134.151/carrier?token=18f2517246b11b')
    fetch('http://ip-api.com/json')
    // fetch('https://api.ipify.org/?format=json')
    // fetch("https://ipinfo.io/json?token=18f2517246b11b")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setAttr(data, singler)
        });
} catch (e) {
    console.log(e);
}

/**
 * with https://ipinfo.io/json?token=18f2517246b11b
 */
// function setAttr(data: any, network: any){
//   console.log(data)
//   li[0].innerHTML = `<p id="connection"> Connection type: ${network.type}</p>`;
//   li[1].innerHTML = `<p id="hostname"> Hostname: ${data.hostname}</p>`;
//   li[2].innerHTML = `<p id="ip"> IP: ${data.ip}</p>`;
//   li[3].innerHTML = `<p id="org"> Carrier: ${data.org}</p>`;
//   console.log(li)
// }

/**
 * with http://ip-api.com/json
 */
function setAttr(data: any, network: any = 'NO ENCONTRADP'){
  li[0].innerHTML = `<p id="connection"> Connection type: ${network.type}</p>`;
  li[1].innerHTML = `<p id="hostname"> Hostname: ${data.isp}</p>`;
  li[2].innerHTML = `<p id="ip"> IP: ${data.query}</p>`;
  li[3].innerHTML = `<p id="org"> Carrier: ${data.as}</p>`;
  console.log(li)
}
