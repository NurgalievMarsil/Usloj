let num = 266219;
num = String(num);
let prov = num[0] * num[1] * num[2] * num[3] * num[4] * num[5];
prov = prov ** 3;
prov = String(prov);
document.write(prov.substr(0, 2));
