# microservice_vaale
Hola me llamo Jaider Valencia, esta es mi prueba técnica para Vaale, trata de un microservicio el cual puede recibir un archivo CSV por post con la siguiente estructura:

- **supplier_id ->** Un entero que identifica el proveedor.
- **commerce_cell_phone ->** Un string que contiene el número de celular de
un comercio

y registra los datos en una base de datos **MySQL** de acuerdo a lo que hay en el archivo.


# Tecnologías usadas
- NodeJS
- TypeScript
- Sequelize
- csv-parse
- dotenv
- multer


# Cómo usar el proyecto
Puedes descargar postman o el programa que gustes para hacer peticiones http, luego ve al proyecto y configura las variables de entorno:
  1. Crea un archivo .env tomando de referencia el .env.example.
  2. Establece el **PORT**(puerto) en el cual quieres ejecutar el proyecto.
  3. Establece el nombre del campo en el cual quieres subir el archivo CSV, si no le pones valor, por defecto tendrá el nombre de **csvField**.
  4. Establece las variables requeridas para la base de datos como: nombre de la base de datos, usario, contraseña, puerto, host.
  5. Crea la base de datos en MySQL
  6. Usa los scripts que están en la carpeta src/database/tables para generar las tablas
  7. Usa el script que está en la carpeta src/database/example_data para generar unos suppliers de prueba en el caso que lo quisieras hacer

Una vez hecho eso puedes usar esta colleción de postman para probarlo: https://drive.google.com/file/d/1GEE7TiMVcqHZSBH_wuuioPu2peu-6m2h/view?usp=sharing

# ¿Dónde puedo generar un archivo CSV?
He visto que en la herramienta **hoja de cálculo** de google se puede guardar el archivo como CSV, aquí te dejo un archivo de ejemplo para que lo puedas clonar y modificar: https://docs.google.com/spreadsheets/d/1rsgDwx8YIHEK9rsPXJbJy09lsxcnrBGbrdRr-ByQc_g/edit?usp=sharing
Para descargar el archivo CSV le das en Archivo/Descargar/Valores separados por coma (CSV), y listo.

# Muchas gracias
Gracias por leerme y tomarte el tiempo de probar mi proyecto, me encantaría recibir recomendaciones o sugerencias. Me puedes encontrar en:
- linkedin: linkedin.com/in/jaider-valencia-164053209/
- discord: jaiderxiaomi
