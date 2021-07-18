// Assignment Code
var generateBtn = document.querySelector("#generate");
var textAreaG=document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", function(){
    passLength=window.prompt("Minimum length do you need you password?(select between 8 and 128)");
    alert("Make sure to select yes to one of the following questions");
    charUp=window.prompt("Do you want uppercase leters?(y/n)");
    charLow=window.prompt("Do you want lowercase leters?(y/n)");
    charNum=window.prompt("Do you want numeric characters?(y/n)");
    charSym=window.prompt("Do you want special characters added?(y/n)");
    if (charUp==="y" && charLow ==="y" && charNum==="y" && charSym==="y"){
    for (var i= 0; i <(passLength/4); i++) {
      NumRand= Math.floor(Math.random()*10);
      SymRand= Math.floor(Math.random()* 8);
      LetLRand= Math.floor(Math.random() * 26);
      LetURand= Math.floor(Math.random() * 26);
      var preliminaryP=Num[NumRand] + Sym[SymRand] +LetL[LetLRand] + LetU[LetURand];
      globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="y" && charNum==="y" && charSym==="y"){
        for (var i= 0; i <(passLength/3); i++) {
        SymRand= Math.floor(Math.random()* 8);
        LetLRand= Math.floor(Math.random() * 26);
        NumRand= Math.floor(Math.random()*10);
        var preliminaryP=Num[NumRand] + Sym[SymRand] +LetL[LetLRand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="n" && charNum==="y" && charSym==="y"){
        for (var i= 0; i <(passLength/3); i++) {
        SymRand= Math.floor(Math.random()* 8);
        LetURand= Math.floor(Math.random() * 26);
        NumRand= Math.floor(Math.random()*10);
        var preliminaryP=Num[NumRand] + Sym[SymRand] +LetU[LetURand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="y" && charNum==="n" && charSym==="y"){
        for (var i= 0; i <(passLength/3); i++) {
        SymRand= Math.floor(Math.random()* 8);
        LetURand= Math.floor(Math.random() * 26);
        LetLRand= Math.floor(Math.random() * 26);
        var preliminaryP=Sym[SymRand] +LetU[LetURand]+LetL[LetLRand]
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="y" && charNum==="y" && charSym==="n"){
        for (var i= 0; i <(passLength/3); i++) {
        LetURand= Math.floor(Math.random() * 26);
        NumRand= Math.floor(Math.random()*10);
        LetLRand= Math.floor(Math.random() * 26);
        var preliminaryP=LetU[LetURand]+Num[NumRand]+LetL[LetLRand]
        globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="n" && charNum==="y" && charSym==="y"){
        for (var i= 0; i <(passLength/2); i++) {
        NumRand= Math.floor(Math.random()*10);
        SymRand= Math.floor(Math.random()* 8);
        var preliminaryP=Num[NumRand]+Sym[SymRand]
        globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="y" && charNum==="n" && charSym==="y"){
        for (var i= 0; i <(passLength/2); i++) {
        LetLRand= Math.floor(Math.random() * 26);
        SymRand= Math.floor(Math.random()* 8);
        var preliminaryP=LetL[LetLRand]+Sym[SymRand]
        globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="y" && charNum==="y" && charSym==="n"){
        for (var i= 0; i <(passLength/2); i++) {
        LetLRand= Math.floor(Math.random() * 26);
        NumRand= Math.floor(Math.random()*10);
        var preliminaryP=LetL[LetLRand]+Num[NumRand]
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="n" && charNum==="n" && charSym==="y"){
        for (var i= 0; i <(passLength/2); i++) {
        LetURand= Math.floor(Math.random() * 26);
        SymRand= Math.floor(Math.random()* 8);
        var preliminaryP=Sym[SymRand]+LetU[LetURand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="n" && charNum==="y" && charSym==="n"){
        for (var i= 0; i <(passLength/2); i++) {
        LetURand= Math.floor(Math.random() * 26);
        NumRand= Math.floor(Math.random()*10);
        var preliminaryP=Num[NumRand]+LetU[LetURand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="y" && charNum==="n" && charSym==="n"){
        for (var i= 0; i <(passLength/2); i++) {
        LetURand= Math.floor(Math.random() * 26);
        LetLRand= Math.floor(Math.random() * 26);
        var preliminaryP=LetL[LetLRand]+LetU[LetURand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="y" && charLow ==="n" && charNum==="n" && charSym==="n"){
        for (var i= 0; i <(passLength); i++) {
        LetURand= Math.floor(Math.random() * 26);
        var preliminaryP=LetU[LetURand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="y" && charNum==="n" && charSym==="n"){
        for (var i= 0; i <(passLength); i++) {
        LetLRand= Math.floor(Math.random() * 26);
        var preliminaryP=LetL[LetLRand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="n" && charNum==="y" && charSym==="n"){
        for (var i= 0; i <(passLength); i++) {
        NumRand= Math.floor(Math.random()*10);
        var preliminaryP=Num[NumRand];
        globalP=globalP+preliminaryP;
    }}else if(charUp==="n" && charLow ==="n" && charNum==="n" && charSym==="y"){
        for (var i= 0; i <(passLength); i++) {
        SymRand= Math.floor(Math.random()* 8);
        var preliminaryP=Sym[SymRand];
        globalP=globalP+preliminaryP;
    }
}
    textAreaG.textContent=globalP;
});

var Num=[0,1,2,3,4,5,6,7,8,9];
var Sym=["!","#","$","%","&","/","?","¡"];
var LetL=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var LetU=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

NumRand= Math.floor(Math.random()*10);
SymRand= Math.floor(Math.random()* 8);
LetLRand= Math.floor(Math.random() * 26);
LetURand= Math.floor(Math.random() * 26);

var globalP="";

