console.log("HI")
let app_id = '6dcbf5d4-6a78-4fe2-8efd-3d9d55a28378';
let version = '1.0';
let protocol = Photon.ConnectionProtocol["Ws"]; //No idea what this is
console.log(Photon)
let client = Photon.LoadBalancing.LoadBalancingClient(protocol, app_id, version);
console.log(client);