export interface IpData {
  ip: string
}

export interface AsnData {
  asn: string,
  domain: string,
  name: string,
  route: string,
  type: string
}

let li = document.getElementsByTagName('li');

/**
 * General Http function with type request
 * @param url URl for the http request
 */
async function http<T>(url: string): Promise<T>{
  const data = await fetch(url)
  return data.json() as Promise<T>
}


async function getSignal() {
  try {
    // const asn = await http<AsnData>(`http://localhost:8080/`);
    const asn = await http<AsnData>(`https://a67f29cbaeff.ngrok.io/`);
    await setAttr(asn)
    console.log('getasn', asn)
  } catch (e) {
    console.log('GetErroVerify',e);
  }
}

async function setAttr(data: AsnData) {
  li[0].innerHTML = `<p id="connection"> Connection type: ${data.type}</p>`;
  li[1].innerHTML = `<p id="hostname"> Hostname: ${data.domain}</p>`;
  li[2].innerHTML = `<p id="ip"> IP: ${data.route}</p>`;
  li[3].innerHTML = `<p id="org"> Carrier: ${data.name}</p>`;
}

getSignal();


