#import openai
#openai.api_key = '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'
chatgpt = input("Escribe puto: ...")
response = openai.ChatCompletion.create( #Los dos parametros son el modelo y el mensaje
    model="gpt-3.5-turbo",
    messages = [ #Creamos un diccionario de mensajes
        {"role": "system", "content": "Respuesta de una sola linea y no puedo salir de la tematica del espacio"},
        {"role": "user", "content": chatgpt}]
)
message = response["choices"][0]["message"]
result = ""
for choice in response.choices:
    result += choice.message.content
print(result)