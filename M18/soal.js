//! soal 2
let buahFav = ["apel","manggo","jeruk"];
buahFav.push("pisang");
console.log(buahFav);


buahFav.splice(2,1,"anggur");
console.log(buahFav)

buahFav.pop(3);

console.log(buahFav)

//! soal 4
let koleksiBuku = new Set(["laskar pelangi","bumi","hujan"])

koleksiBuku.add("filosofi teras")
console.log(koleksiBuku)

koleksiBuku.add("bumi")
console.log(koleksiBuku)
//gaada cuy...

koleksiBuku.delete("hujan")

console.log(koleksiBuku)

//! soal 1
let penduduk = {
    namaDepan : "slamet",
    namaBelakang : "santoso",
    umur : 45,
    pekerjaan : "petani",
}
 
 penduduk.kota = "yogyakarta"
 console.log(penduduk)
 
 let {namaBelakang} = penduduk
 console.log(namaBelakang)
 
 console.log(penduduk.pekerjaan)

 //! soal 5
 let pakaianPria = ["kemeja","celana jeans","jaket"];
 let pakaianWanita = ["blouse","rok","cardigan"];
 
 let pakaianToko = [...pakaianPria, ...pakaianWanita]
 
 pakaianToko.push("kaos")
 console.log(pakaianToko)

 //! soal 6
  function pesanMakanan(...params){
    console.log(params)
  }
  pesanMakanan("nasi goreng","ayam goreng","es teh manis");

  
 //! Soal 3
let makanEnak = new Map([
    ['Nasi Goreng', 15000],
    ['Mie Ayam', 13000],
    ['Es Teh Manis', 5000]
])
makanEnak.set('Ayam Bakar', 20000)
console.log(makanEnak.get('Mie Ayam'))
makanEnak.delete('Es Teh Manis')
console.log(makanEnak)












