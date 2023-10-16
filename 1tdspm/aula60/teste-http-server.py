from http.server import HTTPServer, BaseHTTPRequestHandler
import json

lista = [
    {"nome": "João Silva", "telefone": "(11)1111-1111", "email": "joao@teste.com"},
    {"nome": "Maria Silva", "telefone": "(11)2222-2222", "email": "maria@teste.com"}
]


class MeuHandler( BaseHTTPRequestHandler ):
    def do_GET(self):
        print("Path: ", self.path)
        print("Command: ", self.command)
        print("Headers: ", self.headers)

        # Gerando a resposta da requisição
        self.send_response(200, "Ok")
        self.send_header("content-type", "application/json")
        self.end_headers()
        txt_lista_json = json.dumps(lista)
        self.wfile.write(bytes(txt_lista_json, "utf-8"))

    def do_POST(self):
        print("Requisição POST recebida")
        print("Command: ", self.command)
        print("Headers: ", self.headers)

        # Lendo o cabecalho e o corpo da requisição (request)
        size = int(self.headers.get("content-length"))
        corpo = self.rfile.read(size)
        print("Corpo: ", corpo)
        txt_corpo = str(corpo, "utf-8")
        obj = json.loads(txt_corpo)
        lista.append(obj)

        # Gerando a resposta (response)
        self.send_response(200, "OK")
        self.send_header("content-type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"resposta": "ok"}')

print("HTTP Server")
http_server = HTTPServer( ('', 80), MeuHandler )
print("Servidor Iniciado - aguardando conexao")

http_server.serve_forever()

print("Cliente foi conectado e atendido")
print("Encerrando")