const express = require('express');
const path = require('path');
const { person } = require('./person');
const { name } = require('ejs');

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

  let person={
    name:"木谷亘佑",
    nickname:"シロ",
    birthday:"6月19日",
    zodiac:"ふたご座"
  };
 
  console.log("ニックネーム: "+ person.nickname)
  console.log("星座: "+ paymentResponse.zodiac)  
  console.log("誕生日: "+ person.birthday)
  
  
  for(let key in person){
    console.log(key+":"+person[key]);
  }
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})