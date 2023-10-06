from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET', 'POST'])
def manejar_solicitud():
    if request.method == 'GET':
        parametro = request.args.get('test')
        resultado = test(parametro)
    elif request.method == 'POST':           #        .args.                     ---> como esta ahora
        parametro = request.args.get('test') # request.form.get('test') no se que hace exactamente :)
        resultado = test(parametro)
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run()


def test(parametro):
    if parametro == 'test':
        resultado = 'ok'
        return resultado
    else:
        resultado = 'no ok'
        return resultado