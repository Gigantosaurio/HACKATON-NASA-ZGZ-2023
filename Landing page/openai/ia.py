
import openai
openai.api_key = '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'

def llamadaGPT(pregunta):
    response = openai.ChatCompletion.create( #Los dos parametros son el modelo y el mensaje
        model="gpt-3.5-turbo",
        messages = [ #Creamos un diccionario de mensajes
            {"role": "system", "content": "Respuesta de una sola línea, y solamente de temática de espacio"},
            {"role": "user", "content": pregunta}]
    )
    message = response["choices"][0]["message"]
    result = ""
    for choice in response.choices:
        result += choice.message.content
    print(result)
    return result