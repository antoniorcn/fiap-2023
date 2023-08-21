console.log("Servidor Backend com Node");

const PORT = 8080;
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const lista = [
    {nome: "João Silva", telefone: "(11) - 1111-1111", email: "joao@teste.com"},
    {nome: "Maria Silva", telefone: "(11) - 2222-2222", email: "maria@teste.com"},
    {nome: "Alfredo Silva", telefone: "(11) - 3333-3333", email: "alfredo@teste.com"}
];

const filtroJwt = (request, response, next) => {
    console.log("Filtro JWT Executando");
    let jwtOk = false;
    let token = null;
    const authorization = request.headers['authorization'];
    if (authorization) { 
        token = authorization.split(" ")[1];
        console.log("Token: ", token);
    }

    if (token) { 
        try { 
            jwt.verify(token, "ABC123", (err, payload)=>{
                console.log("Payload: ", payload);
                console.log("Err: ", err);
                if (payload) { 
                    next();
                } else {
                    return response.status(401).send("Token invalido");
                }
            });
        } catch (err) { 
            console.log("Erro ao verificar o Token ", err); 
            return response.status(401).send("Token invalido");
        }
    } else { 
        return response.status(401).send("Falta informações de autorização");
    }
}



app.route("/login").get((request, response) => { 
    const payload = {user: "antonio", profile: "admin"};
    const token = jwt.sign(JSON.stringify(payload), "ABC123", {});
    console.log("Token: ", token);
    const resposta= {usuario: "antonio", token};
    response.status(200).json(resposta);
});

app.route("/").get( filtroJwt , (request, response)=> { 
    console.log("Get executado");
    // console.log("Request: ", request);
    // response.status(200).send("Ola mundo - bem vindo ao servidor Node");
    response.status(200).json(lista);
});


app.route("/").post((request, response) => { 
    const obj = request.body;
    console.log("Body: ", request.body);
    lista.push(obj);
    response.status(200).send("Objeto cadastrado");
});

console.log("O servidor será ativado");
app.listen(PORT, ()=>{
    console.log("Servidor Node Ativo na porta " + PORT);
})
console.log("O servidor foi ativado");