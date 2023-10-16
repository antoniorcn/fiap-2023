from http.server import HTTPServer, BaseHTTPRequestHandler


lista = [
    {"nome": "João Silva", "telefone": "(11)1111-1111", "email": "joao@teste.com"},
    {"nome": "Maria Silva", "telefone": "(11)2222-2222", "email": "maria@teste.com"}
]


class MeuHandler( BaseHTTPRequestHandler ):
    def do_GET(self):
        print("Path: ", self.path)
        print("Command: ", self.command)
        print("Headers: ", self.headers)
        self.send_response(200, "Ok")
        self.send_header("content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"<html>")
        self.wfile.write(b"<h1>Contatos</h1>")
        self.wfile.write(b"<ul>")
        
        for contato in lista:
            self.wfile.write(bytes("""
                                <li>{}</li>
                                <li>{}</li>
                                <li>{}</li>
                             """.format(contato["nome"], contato["telefone"], contato["email"]), "UTF-8"))
        self.wfile.write(b"</ul>")
        self.wfile.write(b"</html>")

    def do_POST(self):
        print("Path: ", self.path)
        print("Command: ", self.command)
        print("Headers: ", self.headers)
        self.send_response(200, "Ok")
        self.send_header("content-type", "text/html")
        self.end_headers()
        content_len = int(self.headers.get('Content-Length'))
        post_body = self.rfile.read(content_len)
        print("Body: ", post_body)

print("HTTP Server")
http_server = HTTPServer( ('', 80), MeuHandler )
print("Servidor Iniciado - aguardando conexao")

http_server.handle_request()

print("Cliente foi conectado e atendido")
print("Encerrando")