//1st javascript class

//console.log("Hello World");

//let firstName = "Francisco";
//let age = 28;

//console.log ("Francisco");
//console.log (firstName);

//let firstName = "Pedro";
//firstName = "Francisco";
//let age = 28;
//let nickname = "Comboio";

//console.log("Hello, meu nome é " + firstName + " e tenho " + age +" anos e em 10 anos terei " +(age +10) + " mas gosto de ser chamado de " + nickname);

//let year = 1983;
//console.log (year);

//year = 2025
//console.log (year);

let name = "Maria";
// r String
let age = 25;
// r Int
let height = 1.68;
//

//5>3 true check
//10 < 7 false check
//4 == "4" false X true converte string para numero
//4 === "4" false X check nao converte a string
//true != false true check
//0 == false false X zero igual false WebTransportDatagramDuplexStream
//0 === false true X FALSE
//"2" > "10" false X TRUE compara somente o digito 
//100 != "100" FALSE
//"a" > "A" false X 97 > 65 TRUE


//console.log(10 % 3);
//console.log(10 % 3);
//console.log(10 % 3);
//console.log(10 % 3);
//console.log(10 % 3);

//console.log(2+3*4);
//console.log((2+3)*4);
//console.log(10/2+3);
//console.log(8-3+2);
//console.log(2**3);
//console.log(10%3);

//let a = "Ola";
//let b = "Mundo";
//let space = " ";
//c = a + space + b;

//console.log(c);

//let a = "O meu nome é ";
//let b = "e tenho ";
//let myName = "Marcus";
//let myAge = 41;
//let greetings = a + myName + " "+ b + myAge + " anos.";

//console.log(greetings);

//let num = 100;
//let str = "100";

//oma = num + str;

//console.log(soma);

//str = 100;

//console.log(soma);

//let nota1 = 8.5
//let nota2 = 6
//let nota3 = 8
//let nota4 = 7
//let passed = "You passed"
//let failed = "You failed"

//media = (nota1 + nota2 + nota3 + nota4)/4;

//console.log(media);

//if (media > 7){
//    console.log(passed)}
//    else{
//    console.log(failed);
//}

//let base = 5; 
//let alt = 12;

////triArea = (base*alt)/2;

//console.log(triArea);

let numero = 10;

console.log(numero);

if (numero === 0){
    console.log("O número é zero")
}else{
    if (numero>0) {
        console.log("O número é positivo");
    }else{
        console.log("O número é negativo");
    }
}

//let idade = 12;
//let maior = "Maior de idade";
//let menor = "Menor de idade";

//if (idade > 17){
 //   console.log(maior);
//}
//else{
//    console.log(menor);
//}


//let number = 2;
//let module = (number % 2) === 0; 

 //if (module = 0){
 //   console.log("Even");
 //}else{
 //   console.log("Odd");
 //}

let dscore1 = 96;
let dscore2 = 108;
let dscore3 = 89;

let kscore1 = 88;
let kscore2 = 91;
let kscore3 = 110;
  
let scoreDolphins = (dscore1 + dscore2 + dscore3)/3;
let scorekoalas = (kscore1 + kscore2 + kscore3)/3;

if(scoreDolphins === scorekoalas) {
    console.log("Ambos ganham o trofeu");
} else if (scoreDolphins>scorekoalas) {
    console.log("Dolphins ganham o trofeu");
} else {
    console.log ("Koalas ganham o trofeu");
}

let score = 98

if (score <= 49) {
    console.log ("F");
}else if (score >= 50 && score <= 59) {
    console.log ("D");
}else if(score >= 60 && score <= 69) {
    console.log ("C");
}else if(score >= 70 && score <= 89) {
    console.log ("B");
}else{
    console.log ("A");
}

let keypressed = 8;

switch (keypressed) {
    case 1:
      month = "Janeiro";
      break;
    case 2:
      month = "fevereiro";
      break;
    case 3:
       month = "Março";
      break;
    case 4:
      month = "Abril";
      break;
    case 5:
      month = "Maio";
      break;
    case 6:
      month = "Junho";
      break;
    case 7:
      month = "Julho";
      break;
    case 8:
      month = "Agosto";
      break;
    case 9:
      month = "Setembro";
      break;
    case 10:
      month = "Outubro";
      break;
    case 11:
     month = "Novembro";
      break;
    case 12:
       month = "Dezembro";
  }