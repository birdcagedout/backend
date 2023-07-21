// npm install express
// express 모듈: https://www.npmjs.com/package/express


// 1. 아래는 npm 사이트의 예제
/* 
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000); 
*/


// 2. express 공식사이트 예제 + json 보내기로 변형
/* 
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/dog', (req, res) => {
  res.json({'sound': '멍멍'});
});

app.get('/cat', (req, res) => {
  res.json({'sound': '냐옹'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/


// 3. GET에서 request의 정보 이용하기 1부 ==> params 이해하기
/* 
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// 파라미터 1개
app.get('/user/:id', (req, res) => {		// 파라미터이름 앞에는 ':'을 붙인다 ==> id라는 이름으로 주소창에 입력한 문자열값이 들어온다
	const p = req.params;
	console.log(p);												// { id: 'muzom9723' }

  res.json({'userID': p.id});
});

// 파라미터 2개
app.get('/user/:id/password/:pw', (req, res) => {
	const p = req.params;
	console.log(p);												// { id: 'muzom9723', pw: '1234' }

  res.json({'userID': p.id, 'password': p.pw});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
 */




// 4. GET에서 request의 정보 이용하기 2부 ==> query 이해하기
/* 
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// 쿼리를 사용할 때는 '?' 뒷부분만 관심있고, 파라미터(id부분)값은 관심없으므로 /user/ 라우팅으로 들어온 요청이면 해당됨
app.get('/user/:id', (req, res) => {		// 파라미터이름 앞에는 ':'을 붙인다 ==> id라는 이름으로 주소창에 입력한 문자열값이 들어온다
	const q = req.query;									// 만약 http://localhost:3000/user/fsfdfs?q=muzom97&name=kim&age=45 라고 입력했다면
	console.log(q);												// { q: 'muzom97', name: 'kim', age: '45' }
  res.json({'q': q.q, 'name': q.name, 'age': q.age});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 */



// 5. POST에서 param
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// 쿼리를 사용할 때는 '?' 뒷부분만 관심있고, 파라미터(id부분)값은 관심없으므로 /user/ 라우팅으로 들어온 요청이면 해당됨
app.get('/user/:id', (req, res) => {		// 파라미터이름 앞에는 ':'을 붙인다 ==> id라는 이름으로 주소창에 입력한 문자열값이 들어온다
	const q = req.query;									// 만약 http://localhost:3000/user/fsfdfs?q=muzom97&name=kim&age=45 라고 입력했다면
	console.log(q);												// { q: 'muzom97', name: 'kim', age: '45' }
  res.json({'q': q.q, 'name': q.name, 'age': q.age});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});