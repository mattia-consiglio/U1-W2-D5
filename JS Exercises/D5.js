/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log('Pets in array printed in index descending order')
for (let i = 0; i < pets.length; i++) {
	console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort()
console.log('Pets sorted alphabetically', pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('Pets in array printed in index ascending order')
for (let i = pets.length - 1; i >= 0; i--) {
	console.log(pets[i])
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstPet = pets.shift()
pets.push(firstPet)
console.log('Pets array changed:', pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
	{
		brand: 'Ford',
		model: 'Fiesta',
		color: 'red',
		trims: ['titanium', 'st', 'active'],
	},
	{
		brand: 'Peugeot',
		model: '208',
		color: 'blue',
		trims: ['allure', 'GT'],
	},
	{
		brand: 'Volkswagen',
		model: 'Polo',
		color: 'black',
		trims: ['life', 'style', 'r-line'],
	},
]

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nummbers = '0123456789'

const generateLicensePlate = () => {
	return (
		letters[Math.floor(Math.random() * letters.length)] +
		letters[Math.floor(Math.random() * letters.length)] +
		nummbers[Math.floor(Math.random() * nummbers.length)] +
		nummbers[Math.floor(Math.random() * nummbers.length)] +
		nummbers[Math.floor(Math.random() * nummbers.length)] +
		letters[Math.floor(Math.random() * nummbers.length)] +
		letters[Math.floor(Math.random() * letters.length)]
	)
}

for (let i = 0; i < cars.length; i++) {
	cars[i].licensePlate = generateLicensePlate()
}

console.log('Cars array changed:', cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
	brand: 'Tesla',
	model: 'Model S',
	color: 'black',
	trims: ['autopilot', 'minimal', 'electric'],
	licensePlate: generateLicensePlate(),
})
console.log('Cars array changed, added new car:', cars)

cars[cars.length - 1].trims.pop()
console.log('Cars array changed, removed last value "trims" for the last car:', cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
	justTrims.push(cars[i].trims[0])
}
console.log('Just trims array:', justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
	if (cars[i].color[0] === 'b') {
		console.log('Fizz')
	} else {
		console.log('Buzz')
	}
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105]

let i = 0
while (numericArray[i] !== 32 && i < numericArray.length) {
	console.log(numericArray[i])
	i++
}
console.log(numericArray)

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const charsToIndexes = chars => {
	italianAlphabet = letters.toLocaleLowerCase()
	const charactersArrayIndexes = []
	for (let i = 0; i < chars.length; i++) {
		let letterIndex = -1
		switch (chars[i]) {
			case 'a':
				letterIndex = italianAlphabet.indexOf('a')
				break
			case 'b':
				letterIndex = italianAlphabet.indexOf('b')
				break
			case 'c':
				letterIndex = italianAlphabet.indexOf('c')
				break
			case 'd':
				letterIndex = italianAlphabet.indexOf('d')
				break
			case 'e':
				letterIndex = italianAlphabet.indexOf('e')
				break
			case 'f':
				letterIndex = italianAlphabet.indexOf('f')
				break
			case 'g':
				letterIndex = italianAlphabet.indexOf('g')
				break
			case 'h':
				letterIndex = italianAlphabet.indexOf('h')
				break
			case 'i':
				letterIndex = italianAlphabet.indexOf('i')
				break
			case 'j':
				letterIndex = italianAlphabet.indexOf('j')
				break
			case 'k':
				letterIndex = italianAlphabet.indexOf('k')
				break
			case 'l':
				letterIndex = italianAlphabet.indexOf('l')
				break
			case 'm':
				letterIndex = italianAlphabet.indexOf('m')
				break
			case 'n':
				letterIndex = italianAlphabet.indexOf('n')
				break
			case 'o':
				letterIndex = italianAlphabet.indexOf('o')
				break
			case 'p':
				letterIndex = italianAlphabet.indexOf('p')
				break
			case 'q':
				letterIndex = italianAlphabet.indexOf('q')
				break
			case 'r':
				letterIndex = italianAlphabet.indexOf('r')
				break
			case 's':
				letterIndex = italianAlphabet.indexOf('s')
				break
			case 't':
				letterIndex = italianAlphabet.indexOf('t')
				break
			case 'u':
				letterIndex = italianAlphabet.indexOf('u')
				break
			case 'v':
				letterIndex = italianAlphabet.indexOf('v')
				break
			case 'w':
				letterIndex = italianAlphabet.indexOf('w')
				break
			case 'x':
				letterIndex = italianAlphabet.indexOf('x')
				break
			case 'y':
				letterIndex = italianAlphabet.indexOf('y')
				break
			case 'z':
				letterIndex = italianAlphabet.indexOf('z')
				break
		}
		letterIndex = letterIndex === -1 ? -1 : letterIndex + 1
		charactersArrayIndexes.push(letterIndex)
	}
	return charactersArrayIndexes
}

console.log(charsToIndexes(charactersArray))

const test = letters.toLocaleLowerCase().split('')
test.push('à')
console.log(charsToIndexes(test))

//short version (not requested)
charsToIndexesShort = (chars = []) => {
	return chars.map(char => {
		return letters.toLocaleLowerCase().indexOf(char) !== -1
			? letters.toLocaleLowerCase().indexOf(char) + 1
			: -1
	})
}

console.log(charsToIndexesShort(test))
