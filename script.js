document.getElementById("qris").addEventListener("touchstart", function (event) {
    let teksAkhir = document.getElementById("teksAkhir");
    let qris = document.getElementById("qris");
    
    // Ubah warna teks akhir jadi merah
    teksAkhir.style.color = "red";
    
    // Tambah efek membesar sedikit
    qris.style.transform = "scale(1.1)";

    for (let i = 0; i < 20; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        
        // Warna partikel merah atau biru
        particle.style.backgroundColor = Math.random() > 0.5 ? "red" : "blue";

        document.body.appendChild(particle);

        // Posisi acak di sekitar QRIS
        let rect = qris.getBoundingClientRect();
        let x = rect.left + rect.width / 2 + (Math.random() * 100 - 50);
        let y = rect.top + rect.height / 2 + (Math.random() * 100 - 50);

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        // Hapus partikel setelah animasi selesai
        setTimeout(() => {
            particle.remove();
        }, 700);
    }

    // Kembalikan ke kondisi awal setelah animasi selesai
    setTimeout(() => {
        teksAkhir.style.color = "black";
        qris.style.transform = "scale(1.0)";
    }, 500);
});