"strict mode"
//! soal 1

let umur = 25; 
console.log(umur); 

//! soal 2

x = 10;
console.log(x);

//! soal 3

let data = "Halo";
console.log(typeof data); // Apa outputnya?

data = 42;
console.log(typeof data); // Apa outputnya?

data = true;
console.log(typeof data); // Apa outputnya?

//! soal 4

let name = prompt("masukkan nama anda")
alert("halo" + name + "selamat datang di pondok");

//! soal 5

let result = confirm("apakah pengguna ingin melanjutkan ke halaman lain?")
console.log(result)
if(result == true){
    alert("anda memilih untuk melanjutkan") 
}else{
    alert("Anda membatalkan tindakan")
}
