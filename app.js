//Импорт http модуля 
const http = require('http');

const PORT = 3000;

//Создание сервера
//req - объект запроса. Хранит информацию, которую можем использовать на сервере
//res - формируемый объект, который отправляем в браузер
const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'application/json');

    const data = JSON.stringify ([
        {name: 'Artyom', age: 19},
        {name: 'Pavel', age: 25}
    ]);

    res.end(data);
});

//Создание хоста
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});


