//==============
//Galery grid
//==============
const gallery = document.getElementById('gallery-grid');
const paginationContainer = document.getElementById('pagination');

const fotoPerHalaman = 12;
const totalSemuaFoto = 188;
const totalHalaman = Math.ceil(totalSemuaFoto / fotoPerHalaman);

function tampilkanHalaman(halaman) {
    gallery.innerHTML = "";

    let start = (halaman - 1) * fotoPerHalaman + 1;
    let end = start + fotoPerHalaman;

    for (let i = start; i < end; i++) {
        if (i > totalSemuaFoto) break;

        const div = document.createElement('div');
        div.className = 'gallery-item-grid';
        
        const img = document.createElement('img');
        img.src = `folfoto/foto (${i}).jpg`;
        img.loading = "lazy";
        
        div.appendChild(img);
        gallery.appendChild(div);
    }

    updateButtons(halaman);
}

        function closeLightbox() {
            document.getElementById("lightbox").classList.add("hidden");
        }
        

function buatTombol() {
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalHalaman; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = 'page-btn w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-purple-600 hover:text-white transition-all text-sm font-medium shadow-sm';
        btn.onclick = () => {
            tampilkanHalaman(i);
            window.scrollTo({ top: gallery.offsetTop - 100, behavior: 'smooth' });
        };
        paginationContainer.appendChild(btn);
    }
}

function updateButtons(halamanAktif) {
    const buttons = document.querySelectorAll('.page-btn');
    buttons.forEach((btn, index) => {
        if (index + 1 === halamanAktif) {
            // Warna saat aktif: Biru
            btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
            btn.classList.remove('bg-white', 'text-black');
        } else {
            // Warna saat tidak aktif: Putih
            btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
            btn.classList.add('bg-white', 'text-black');
        }
    });
}
function updateButtons(halamanAktif) {
    const buttons = document.querySelectorAll('.page-btn');
    buttons.forEach((btn, index) => {
        if (index + 1 === halamanAktif) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

buatTombol();
tampilkanHalaman(1);

// ============================
// LIGHTBOX SCRIPT (FIXED)
// ============================

document.addEventListener("DOMContentLoaded", function(){

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Klik gambar di gallery
    gallery.addEventListener("click", function(e){
        if(e.target.tagName === "IMG"){
            lightbox.style.display = "block";
            lightboxImg.src = e.target.src;
        }
    });

    // Tombol close (X)
    closeBtn.addEventListener("click", function(){
        lightbox.style.display = "none";
    });

    // Klik background untuk tutup
    lightbox.addEventListener("click", function(e){
        if(e.target === lightbox){
            lightbox.style.display = "none";
        }
    });

});
        // Fungsi tambahan khusus untuk SPA
        function closeLightbox() {
            document.getElementById("lightbox").classList.add("hidden");
        }
        
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("nav-overlay");

    if (navLinks.classList.contains("-translate-x-full")) {
        navLinks.classList.remove("-translate-x-full");
        navLinks.classList.add("translate-x-0");
        overlay.classList.remove("hidden");
    } else {
        navLinks.classList.remove("translate-x-0");
        navLinks.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
    }
}


//================
//fitur tambhan
//================
function toggleAboutDetail() {
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("btn-more");

    if (moreText.classList.contains("hidden")) {
        // Tampilkan teks
        moreText.classList.remove("hidden");
        btnText.innerText = "Sembunyikan";
    } else {
        // Sembunyikan kembali
        moreText.classList.add("hidden");
        btnText.innerText = "Selengkapnya...";
    }
}

//=================
//pop up notifikasi
//=================
// Fungsi untuk memproses "pengiriman" pesan
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh
    
    const popup = document.getElementById('contact-popup');
    popup.classList.remove('hidden'); // Memunculkan pop-up
    
    this.reset(); // Mengosongkan kembali isi form setelah "dikirim"
});

// Fungsi untuk menutup pop-up
function closeContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.classList.add('hidden');
}
