import http.server
import socketserver
import os
import mimetypes
from functools import partial

PORT = 8082
DIRECTORY = "www.alcantara.com"

# Register MIME types
mimetypes.add_type('font/woff', '.woff')
mimetypes.add_type('font/woff2', '.woff2')
mimetypes.add_type('font/ttf', '.ttf')
mimetypes.add_type('application/vnd.ms-fontobject', '.eot')
mimetypes.add_type('image/webp', '.webp')

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header("Access-Control-Allow-Origin", "*")
        # Disable caching
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

print(f"Serving {DIRECTORY} on port {PORT}")

# Use partial to pass directory argument to the handler
Handler = partial(CustomHandler, directory=DIRECTORY)

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()

