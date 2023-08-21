console.log("Executando o servidor backend")
const PORT = 8080
const SECRET = "ABC123";
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json())

const lista = [
    {titulo: "Super Man", volume: "56", author: "Mark"},
    {titulo: "Spider Man", volume: "33", author: "Stan Lee"},
    {titulo: "Iron Man", volume: "20", author: "Stan Lee"},
]

const filtroJwt = (request, response, next)=>{
    console.log("Filtro JwT acionado");
    const auth = request.headers['authorization'];
    let validado = false;
    if (auth) { 
        console.log("Autorização: ", auth);
        const token = auth.split(" ")[1];
        if (token) { 
            console.log("Token: ", token);
            jwt.verify(token, SECRET, (err, payload) => { 
                console.log("Erro: ", err);
                console.log("Payload: ", payload);
                if (!err && payload && payload.perfil === "admin") {
                    validado = true;
                }
            })
        }
    } else { 
        console.log("Falta autorizacao");
    }
    if (validado) {
        next()
    } else { 
        return response.status(403).send("Token invalido");
    }
}

app.route("/login").post((request, response)=>{
    if ("admin@teste.com" === request.body.email &&
        "123456" === request.body.password) { 
            const obj = {
                "username": request.body.email,
                "fullName": "Antonio Carvalho",
                "perfil": "admin",
            };
            const token = 
                jwt.sign(JSON.stringify(obj), SECRET);
            const respObj = {
                status: "ok",
                token,
            }
        response.status(200).json(respObj);
    } else { 
        response.status(401).send("Acesso negado");
    }
})

app.route("/quadrinhos").get(filtroJwt, (request, response)=>{
    // response.header['content-type'] = 'application/json';
    // response.status(200).send(JSON.stringify(lista))
    response.status(200).json(lista);
})

app.route("/quadrinhos").post(filtroJwt, (request, response)=>{
    console.log("Body: ", request.body);
    lista.push(request.body);
    response.status(201).send("created");
})

app.route("/").get(filtroJwt, (request, response)=>{
    console.log("GET / Executado");
    // console.log("Request: ", request);
    response.status(200).send("<h1>GET / acessado, Bem vindo " + 
                "ao backend com node</h1>");
});

app.listen( PORT, ()=>{
    console.log("Servidor ativo ouvindo a porta " + PORT);
});
console.log("Programa de backend completo")