//Импорт http модуля 
const http = require('http');

const PORT = 3000;

//Создание сервера
//req - объект запроса. Хранит информацию, которую можем использовать на сервере
//res - формируемый объект, который отправляем в браузер
const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    //Ответ
    res.write('<head><link rel="stylesheet" href="#"></head>')

    res.write('<h1>Hello world!</h1>');
    res.write('<p>My name is Galus</p>');
    res.end();
});

//Создание хоста
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});


