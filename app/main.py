from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET', 'POST'])
def manejar_solicitud():
    if request.method == 'GET':
        parametro = request.args.get('test')
        # Realiza alguna lógica con el parámetro
        if parametro == 'test':
            resultado = 'ok'
        else:
            resultado = 'no ok'
    elif request.method == 'POST':
        parametro = request.form.get('test')
        # Realiza alguna lógica con el parámetro
        resultado = f'Obtuviste el valor POST: {parametro}'
        print(f'Obtuviste el valor POST: {parametro}')

    # Devuelve una respuesta en formato JSON
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run()
