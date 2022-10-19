# Assignment
## Cara Penggunaan Backend

- Buat database dengan nama assignment, atau bila ingin mengganti dapat dilihat pada config.json didalam folder config.
Ubah config pada environment development.


- Lakukan instalasi package dengan command
```cmd
  npm install
```

- Lakukan migration menggunakan perintah
```cmd
npx sequelize-cli db:migrate
```

- Jalankan node server menggunakan perintah
```cmd
node index
```
API yang dibuat atau tersedia.
###API menambahkan account dan menampilkan semua account.
- `GET` `localhost:5000/api/account/`
- `POST` `localhost:5000/api/account/`

###API menambahkan data transaksi dan menampilkan semua data transaksi.
- `GET` `localhost:5000/api/transaction/`
- `POST` `localhost:5000/api/transaction/` Parameter yang diperlukan

###API perhitungan point transaksi setiap account.
- `GET` `localhost:5000/api/point/`

###API menampilkan data sesuai dengan tanggal.
- `GET` `localhost:5000/api/report/`
