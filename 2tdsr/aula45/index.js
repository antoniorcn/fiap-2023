console.log("Servidor Backend Node JS");
const PORT = 8080;
const SECRET_KEY = "ABC123";
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const lista = [
    {titulo: "Come as you are", autor: "Nirvana", ano: 1991},
    {titulo: "Sweet Child O'mine", autor: "Guns and Roses", ano: 1991},
    {titulo: "Keep the faith", autor: "Bon Jovi", ano: 1990},
];

const filtroJwt = (request, response, next) => { 
    const authorization = request.headers['authorization'];
    if (authorization) { 
        const authParts = authorization.split(" ");
        const token = authParts[1];
        if (token) { 
            jwt.verify(token, SECRET_KEY, (err, payload) => { 
                if (!err) { 
                    console.log("Payload: ", payload);
                    console.log("Usuario: ", payload.userName);
                    next();
                } else { 
                    return response.status(401).send("Token invalido");    
                }
            });
        } else { 
            return response.status(401).send("Token não encontrado"); 
        }
    } else { 
        return response.status(401).send("Informações de authorização insuficientes");
    }
}


app.route("/login").post( (request, response) => { 
    const payload = {userName: "antonio", perfil: "admin"};
    const token = jwt.sign( JSON.stringify(payload) , SECRET_KEY);
    console.log(token);
    const resposta = {mensagem: "ok", token}
    response.status(200).json(resposta);
})

app.route("/musicas").get(filtroJwt, (request, response)=>{
    console.log("/musicas GET acionado");

    // console.log("Request: ", request);

    // response.status(200).send("Lista Musicas");
    response.status(200).json( lista );
});

app.route("/musicas").post(filtroJwt, (request, response)=>{
    const musica = request.body;
    lista.push( musica );
    response.status(200).send("Cadastrada com sucesso");
});


app.listen(PORT, () => { 
    console.log("Servidor ouvindo a porta ", PORT);
});