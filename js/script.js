const num = 266219;
const arr=[];
const reducer = (accumulator, currentValue) => accumulator * currentValue;
for(let temp = num;Math.round(temp)!=0;temp/=10,temp = Math.floor(temp)){
  arr.unshift(temp%10);
}
let prov = (arr.reduce(reducer))
prov = prov ** 3;
prov = String(prov);
document.write(prov.substr(0, 2));
