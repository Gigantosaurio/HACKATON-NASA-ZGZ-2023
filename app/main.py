from flask import Flask, request, jsonify
from flask_cors import CORS
from ia import *

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET', 'POST'])
def manejar_solicitud():

    if request.method == 'GET':
        parametro1 = request.args.get('pregunta_asistente')
        parametro2 = request.args.get('planeta_origen')
        parametro3 = request.args.get('planeta_destino')

        if parametro1 == None:
            resultado = planetas(parametro2, parametro3)
        else:
            resultado = asistente(parametro1)

    elif request.method == 'POST':

        parametro1 = request.args.get('pregunta_asistente')
        parametro2 = request.args.get('planeta_origen')
        parametro3 = request.args.get('planeta_destino')

        if parametro1 == None:
            resultado = planetas(parametro2, parametro3)
        else:
            resultado = asistente(parametro1)

    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run()
