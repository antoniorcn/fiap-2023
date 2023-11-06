from http.server import HTTPServer, BaseHTTPRequestHandler

contatos = [
    { "nome": "João Silva", "telefone": "(11) 1111-1111" },
    { "nome": "Maria Silva", "telefone": "(11) 2222-2222" }
]


class MeuHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # O que fazer quando chegar uma requisição do tipo GET
        print("Recurso: ", self.path)
        print("Headers: ", self.headers)
        
        self.send_response(200, "Ok")

        resposta = "Recurso não encontrado"
        if "/contatos" in self.path:
            resposta = "Segue a lista de contatos"
        if "/teste" in self.path:
            resposta = "Teste do servidor"

        texto = '{"resposta":"' + resposta + '"}'
        self.send_header("content-type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(texto, 'utf-8'))


print("Iniciando o HTTP Server")
http_server = HTTPServer( ('127.0.0.1', 80), MeuHandler)
http_server.serve_forever()