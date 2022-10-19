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
- `GET` `localhost:5000/api/account/`
- `POST` `localhost:5000/api/account/`

- `GET` `localhost:5000/api/transaction/`
- `POST` `localhost:5000/api/transaction/`

- `GET` `localhost:5000/api/point/`

- `GET` `localhost:5000/api/report/`
