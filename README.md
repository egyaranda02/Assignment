# Assignment
## Cara Penggunaan Backend

- Buat database dengan nama `assignment` atau bila ingin mengganti dapat dilihat pada config.json didalam folder config.
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
## API yang dibuat atau tersedia.
API dapat dicoba menggunakan aplikasi Postman atau sejenisnya.
### API menambahkan account dan menampilkan semua account.
- `GET` `localhost:5000/api/account/`
```cmd
Response :
{
    "success": true,
    "data": [
        {
            "accountId": 1,
            "name": "Jubaedah"
        },
        {
            "accountId": 2,
            "name": "Malika"
        }
    ]
}
```
- `POST` `localhost:5000/api/account/`
```cmd
Request Body:
1. name

Response :
{
    "success": true,
    "message": "Account added!",
    "data": {
        "accountId": 3,
        "name": "Hanif"
    }
}
```

### API menambahkan data transaksi dan menampilkan semua data transaksi.
- `GET` `localhost:5000/api/transaction/`
```cmd
Response :
{
    "success": true,
    "data": [
        {
            "transactionId": 1,
            "accountId": 2,
            "description": "Bayar Listrik",
            "debitCreditStatus": "D",
            "amount": 111000,
            "transactionDate": "2022-11-19T00:00:00.000Z"
        },
        {
            "transactionId": 2,
            "accountId": 1,
            "description": "Bayar Listrik",
            "debitCreditStatus": "D",
            "amount": 115000,
            "transactionDate": "2022-11-19T00:00:00.000Z"
        },
        {
            "transactionId": 3,
            "accountId": 1,
            "description": "Bayar Listrik",
            "debitCreditStatus": "D",
            "amount": 115000,
            "transactionDate": "2022-12-19T00:00:00.000Z"
        }
    ]
}
```
- `POST` `localhost:5000/api/transaction/`
```cmd
Request Body :
1. accountId
2. transactionDate
3. description
4. debitCreditStatus
5.amount

Response :
{
    "success": true,
    "message": "Transaction added!",
    "data": {
        "transactionId": 4,
        "accountId": "1",
        "transactionDate": "2022-12-19T00:00:00.000Z",
        "description": "Bayar Listrik",
        "debitCreditStatus": "D",
        "amount": "115000"
    }
}
```

### API perhitungan point transaksi setiap account.
- `GET` `localhost:5000/api/point/`
```cmd
Response : 
{
    "success": true,
    "data": [
        {
            "account": 1,
            "name": "Jubaedah",
            "totalPoint": 120
        },
        {
            "account": 2,
            "name": "Malika",
            "totalPoint": 36
        },
        {
            "account": 3,
            "name": "Hanif",
            "totalPoint": 0
        }
    ]
}
```

### API menampilkan data sesuai dengan tanggal.
- `GET` `localhost:5000/api/report/`
```cmd
Request Query :
1. accountId
2. StartDate
3. EndDate
example : `localhost:5000/api/report/?StartDate=2022-10-1&EndDate=2022-12-30&accountId=1`

Response :
{
    "success": true,
    "data": [
        {
            "transactionId": 2,
            "accountId": 1,
            "description": "Bayar Listrik",
            "debitCreditStatus": "D",
            "amount": 115000,
            "transactionDate": "2022-11-19T00:00:00.000Z"
        },
        {
            "transactionId": 3,
            "accountId": 1,
            "description": "Bayar Listrik",
            "debitCreditStatus": "D",
            "amount": 115000,
            "transactionDate": "2022-12-19T00:00:00.000Z"
        },
        {
            "transactionId": 4,
            "accountId": 1,
            "description": "Bayar Listrik",
            "debitCreditStatus": "D",
            "amount": 115000,
            "transactionDate": "2022-12-19T00:00:00.000Z"
        }
    ]
}
```
