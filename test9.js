//créer un objet qui prendra en propriété (en clé)les mots d'une chaîne de charactère et la fréquence, donc le nombre de fois qu'ils apparaissent puis enlever les caractères spéciaux

console.log("Erxercice 9: trouver le nombre d'occurence de mots dans un texte")
const text = "Aujourd'hui c'est décidé, Roger va mettre sa pétée à la Monique, mais la Monique, elle a une bite! Aujourd'hui c'est décidé, Roger va mettre sa pétée à la Monique, mais la Monique, elle a une bite!"

let freqObject = {}
function wordFreq(str){
    const splitText = text.replace(',', '').split(' ')
    splitText.forEach(function(w){
        if (!freqObject[w] && w.length >= 4){
            freqObject[w] = 0
        }
        freqObject[w] += 1
    })
    return freqObject
}

console.log(wordFreq(text))

const freqArray = []
for (let k in freqObject){
    freqArray.push({
        word: k,
        count: freqObject[k]
    })
}
//cette méthode avec une fonction fléchée suffit à mettre le taleau dans l'ordre
freqArray.sort((a, b) => b.count - a.count)

console.log(`les mots les plus fréquents sont "${freqArray[0].word}" (${freqArray[0].count}) , "${freqArray[1].word}" (${freqArray[1].count}) et "${freqArray[2].word}" (${freqArray[2].count})`)

//autre manière de remplacer tous les caractères spéciaux sans devoir répéter .replace c'est de créer une variable contenant un tableau avec les caractères à remplacer, et créer une boucle pour remplacer chque caractère.

ignored= [',', ':', '!', '...']
let cleanedPhrase = text
for(let characters of ignored){
    cleanedPhrase = cleanedPhrase.replaceAll(characters, '')
}
//ensuite on split directement la cleanedPhrase au lieu de splitText

//text.split(/\s/g) \s means match all whitespace and g means global so all of them,not just the first. >COmme .replaceAll c'est pareil que g

//pourquoi utiliser toLowerCase alors que par défaur, il va considérer un mot en maj et un en min comme deux mots différents?