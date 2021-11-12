function total() {
	var manggis = '15000' * parseInt(document.getElementById('harga_manggis').value);
	var jeruk = '20000' * parseInt(document.getElementById('harga_jeruk').value);
	var salak = '18000' * parseInt(document.getElementById('harga_salak').value);
	var rambutan = '15000' * parseInt(document.getElementById('harga_rambutan').value);

	var jumlah_harga = manggis + jeruk + salak + rambutan;

	document.getElementById('total').value = jumlah_harga;
}

