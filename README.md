# Cifrado César

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Introducción

Para cifrar el mensaje que desees vamos a utilizar el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), que es uno de los
primeros métodos de cifrado conocidos históricamente. Es de tipo 
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


## Objetivos

El objetivo de esta aplicación web es tener una interfaz que es capaz de cifrar y descifrar 
mensajes para que el usuario pueda comunicarse con alguien sin que una tercera persona sepa lo que está diciendo.

## Definición del producto

Mi proceso para definir el producto final a nivel de experiencia e interfaz comenzó con conocer 
las características del usuario. Los principales usuarios del producto son jóvenes.
Pensé en los usuarios como personas jóvenes y entusiastas que necesitan un medio para comunicarse en caso de que quieran mandar mensajes cifrados para que alguien más no pueda leer lo que se habla en ese medio. 

Al cifrar los mensajes se resuelve el problema de mantener como sorpresa la fiesta, que es lo que se quiere en el caso mostrado en el preámbulo. Con este producto ellos podrán comunicarse sin que haya la opción de que el cumpleañero se entere. Así como el ejemplo de la fiesta sorpresa, con esta interfaz se puede resolver muchos problemas de ese tipo.


## Introducción a la aplicación

 Para hacer esta aplicación, primero investigué los temas necesarios para empezar a hacer la página. Luego definí el producto de acuerdo a las bases estipuladas en el proyecto. En experiencia de usuario, hice un análisis junto a mi squad sobre las personas que usarían el producto, además de algunas preguntas que hice a amigos. 
 
 Utilicé dos html, el primero para la página incial, que linkea a la página donde se va a cifrar y descifrar el mensaje que el usuario quiera. 

 Después de algunos ajustes en el diseño, continué con JavaScript para realizar las funciones que harían posible desencriptar los mensajes.


## Funcionalidad
 
Para ver esta aplicación web se ingresa con un link, en el que aparecerá una ventana donde te preguntan si quieres cifrar o descifrar un mensaje y un botón que sale en la parte posterior para poder continuar a la página de encriptación.
