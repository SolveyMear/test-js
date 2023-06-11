//calculer la moyenne des notes de plusieurs élèves puis classer les élèves par ordre de moyenne puis on affiche le podium

console.log("Exercice 8: Calculer la moyenne et faire le podium")
const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

function calcAverage(){
    let sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue)
}

//on crée une fonction pour calculer la moyenne de chaque élève
//on crée une boucle dans la fonction pour additionner chaque note et incrémenter la somme à chaque boucle puis retourner la moyenne
const calcMoyenne = (notes) => {
    let sum = 0
    for (let note of notes){
        sum = sum + note
    }
    return (sum/notes.length)
}

//on crée une boucle pour faire le tour des élèves dans le tableau students. en créant une variable student.
//on modifie la variable student en ajoutant une propriété moyenne à chaque objet du tableau students
//on appelle la fonction en passat en paramètre la propriété notes de chaque élève
//COMMENT ON SAIT QUE LA VARIABLE STUDENT VA PRENDRE CHAQUE OBJET DU TABLEAU?????? 

for (let student of students){
    student.moyenne = calcMoyenne(student.notes)
    student.worst = Math.min(...student.notes)
    student.best = Math.max(...student.notes)
}

//on crée une fonction qui va comparer les moyennes de chaque étudiant, en soustrayant la moyenne de b à la moyenne de a, on obtient un résultat négatif,positif ou 0 ce qui signifiera si b est plus grand, plus petit ou égal et va déplacer b dans le tableau par rapport à a

function compareStudent(a, b){
    return b.moyenne - a.moyenne
}
//on appelle la fonctionen la passant en paramètre de la méthode sort au tableau students
students.sort(compareStudent)

//fonction pour sortir le podium

const formatStudent = (student) => {
  return `${student.name} avec une moyenne de ${student.moyenne} note minimale: ${student.worst} note maximale: ${student.best}` //POURQUOI STUDENT ET PAS STUDENTS???? CA ME SORT UNDEFINED SANS LE S
}
console.log(`Top 3 des étudiants:
1: ${formatStudent(students[0])}
2: ${formatStudent(students[1])}
3: ${formatStudent(students[2])}`)

    

//----------TEST---------------------------------

//let array = [1, 2, 3, 4, 1]

//let initialValue = 0 why didn't change anything to remove the initialValue???
//let sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue) //used to be accumulator + currentValue, initialValue)


//console.log(sumWithInitial/array.length)
//-----------------------------------------------