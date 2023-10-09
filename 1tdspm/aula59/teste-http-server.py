from http.server import HTTPServer, BaseHTTPRequestHandler


lista = [
    {"nome": "João Silva", "telefone": "(11)1111-1111", "email": "joao@teste.com"},
    {"nome": "Maria Silva", "telefone": "(11)2222-2222", "email": "maria@teste.com"}
]


class MeuHandler( BaseHTTPRequestHandler ):
    def do_GET(self):
        self.send_response(200, "Ok")
        self.send_header("content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"<html>")
        self.wfile.write(b"<h1>Ola bem vindo</h1>")
        self.wfile.write(b"<h2>ao servidor feito em python</h2>")
        self.wfile.write(b"</html>")
        # print("Path: ", self.path)
        # print("Command: ", self.command)
        # request = self.rfile.readlines()
        # print("Headers: ", self.headers)

print("HTTP Server")
http_server = HTTPServer( ('', 80), MeuHandler )
print("Servidor Iniciado - aguardando conexao")

http_server.handle_request()

print("Cliente foi conectado e atendido")
print("Encerrando")