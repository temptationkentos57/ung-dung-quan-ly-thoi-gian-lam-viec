const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/ung_dung_quan_ly_thoi_gian', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Đã kết nối tới MongoDB'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API đang hoạt động!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${PORT}`);
});
