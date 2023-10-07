
import openai
openai.api_key = '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'

def llamadaGPT(pregunta):
    response = openai.ChatCompletion.create( #Los dos parametros son el modelo y el mensaje
        model="gpt-3.5-turbo",
        messages = [ #Creamos un diccionario de mensajes
            {"role": "system", "content": "Respuesta de una sola línea, y solamente de temática de espacio, si no es del espacio di que no puedes responder"},
            {"role": "user", "content": pregunta}]
    )
    message = response["choices"][0]["message"]
    result = ""
    for choice in response.choices:
        result += choice.message.content
    print(result)
    return result