function hitungLuasPersegi(sisi: number): number{
    return sisi*sisi
}
function hitungKelilingPersegi(sisi: number): number{
    return sisi**4
}
function hitungLuasSegitiga(alas: number, tinggi: number): number{
    return 0.5*alas*tinggi
}

console.log(hitungLuasPersegi(5));
console.log(hitungKelilingPersegi(5));
console.log(hitungLuasSegitiga(2,5));