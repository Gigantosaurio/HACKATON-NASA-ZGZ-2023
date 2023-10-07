from flask import Flask, request, jsonify
from flask_cors import CORS
from ia import *

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET', 'POST'])
def manejar_solicitud():
    if request.method == 'GET':
                                  
        parametro = request.args.get('pregunta')

        resultado = llamadaGPT(parametro)

    elif request.method == 'POST':

        parametro = request.args.get('pregunta')

        resultado = llamadaGPT(parametro)

    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run()
