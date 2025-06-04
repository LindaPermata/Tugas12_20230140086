document.getElementById('peminatanForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const nim = document.getElementById('nim').value.trim();
  const peminatan = document.querySelector('input[name="peminatan"]:checked');
  const alamat = document.getElementById('alamat').value.trim();
  const angkatan = document.getElementById('angkatan').value;
  const tanggal = document.getElementById('tanggal').value;

  if (!peminatan) {
    alert('Silakan pilih peminatan terlebih dahulu!');
    return;
  }

  if (!angkatan || !tanggal) {
    alert('Silakan pilih angkatan dan tanggal terlebih dahulu!');
    return;
  }

  alert(`Data berhasil dikirim!\n\nNama: ${nama}\nNIM: ${nim}\nPeminatan: ${peminatan.value}\nAlamat: ${alamat}\nAngkatan: ${angkatan}\nTanggal: ${tanggal}`);

  const outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';
  outputDiv.innerHTML = `<strong>Data yang Anda kirim:</strong><br>
                         Nama: ${nama}<br>
                         NIM: ${nim}<br>
                         Peminatan: ${peminatan.value}<br>
                         Alamat: ${alamat}<br>
                         Angkatan: ${angkatan}<br>
                         Tanggal: ${tanggal}`;
});
