console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function createPyramid()
{
    var rows = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    if(rows<26){
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}
}
createPyramid()

