function fn_ValForm(){
    var sMsg = "";
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    var iEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var info;
    var pilihan;
    
    if (nama == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (email == ""){
        sMsg += "\n* Anda belum mengisikan email";
    }else if(!iEmail.test(email)){
        sMsg += "\n* email tidak valid";
    }
    if (umur == ""){
        sMsg += "\n* Anda belum mengisikan umur";
    }
    if (document.getElementById("kategori").value == ""){
        sMsg += "\n* Anda belum mengisikan koleksi favorit";
    }

    if(umur >= 7 && umur <= 70) {
        if(umur <= 17) {
            info =  "Anggota Pelajar";
        } else {
            info =  "Anggota Umum" ;
        }
    } else {
        sMsg += "Umur harus berupa angka dan berada di antara 7 sampai 70 tahun";
    }

    if(sMsg != ""){
        alert("Peringatan: \n" +sMsg);
        return false;
    }

    switch (kategori) {
        case "F":
            pilihan = "Fiksi";
            break;
        case "N":
            pilihan = "Non Fiksi";
            break;
        case "J":
            pilihan = "Jurnal Ilmiah";
            break;
        default:
            pilihan = "Pilihan tidak tersedia";                
    }

    alert("Terima kasih" + nama + "! Anda terdaftar di koleksi " + pilihan + info);
    return true;
    
}

// if(umur >= 7 && umur <= 70) {
//     if(umur <= 17) {
//         sMsg += "Anggota Pelajar";
//     } else {
//         alert("Anggota Umum");
//     }
// } else {
//     alert("Umur harus berupa angka dan berada di antara 7 sampai 70 tahun");
// }

// switch (sInput) {
//     case "F":
//         alert("Fiksi");
//         break;
//     case "N":
//         alert("Non Fiksi");
//         break;
//     case "J":
//         alert("Jurnal Ilmiah");
//         break;
//     default:
//         alert("Pilihan tidak tersedia");                
// }


