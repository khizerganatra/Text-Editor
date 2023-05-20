var textBoxtext = document.getElementById("textBox");

var boldButton = document.getElementById("boldBtn");

var italicButton = document.getElementById("italicBtn");

var underlineButton = document.getElementById("underlineBtn");

var backgroundButton = document.getElementsByClassName("backgroundColorBtn");

var textColorButton = document.getElementsByClassName("textColorBtn");

var textLeftAlignButton = document.getElementById("textLeftAlignBtn");

var boldtextCenterAlignButtonButton = document.getElementById("textCenterAlignBtn");

var textRightAlignButton = document.getElementById("textRightAlignBtn");

var delButton = document.getElementById("delBtn");

var BackgroundColor = document.getElementById("backgrondColor");

var TextColor = document.getElementById("textColor");

// -------------------

var boldTF = false;
var italicTF = false;
var underlineTF = false;
var backgroungColorTF = false;
var textColorTF = false;
var leftAlignTF = "left";
var centerAlignTF = "center";
var rightAlignTF = "right";
var delTF = false;



// --------------

boldButton.addEventListener("click", bold )

italicButton.addEventListener("click", italic )

underlineButton.addEventListener("click", underline )

BackgroundColor.addEventListener("click", bgColor)

TextColor.addEventListener("click", txtColor)

// backgroundButton.addEventListener("click", backgronundColor )

// textColorButton.addEventListener("click", textColor )

// textLeftAlignButton.addEventListener("click", leftAlign )

// boldtextCenterAlignButtonButton.addEventListener("click", centerAlign )

// textRightAlignButton.addEventListener("click", rightAlign)

// delButton.addEventListener("click", del )

// -----------------

function bgColor(){
    
    textBoxtext.style.backgroundColor = BackgroundColor.value;
}

function txtColor(){
    
    textBoxtext.style.color = TextColor.value;

}

function bold(){

    if(boldTF==false){
        
        textBoxtext.style.fontWeight = 900;
        boldButton.style.fontWeight = 900;
        boldTF = true

    }else{

        textBoxtext.style.fontWeight = 500;
        boldButton.style.fontWeight = 500;
        boldTF = false
    }

}

function italic(){

    if(italicTF==false){
        
        textBoxtext.style.fontStyle ="italic";
        italicButton.style.fontStyle = "italic";
        italicTF = true

    }else{

        textBoxtext.style.fontStyle ="normal";
        italicButton.style.fontStyle = "normal";
        italicTF = false
    }


}

function underline(){

    if(underlineTF==false){
        
        textBoxtext.style.textDecoration ="underline";
        
        underlineTF = true

    }else{

        textBoxtext.style.textDecoration ="none";
        
        underlineTF = false
    }

}

function backgronundColor(){

}

function textColor(){

}

function leftAlign(){
 
    textBoxtext.style.textAlign="start";     
    
}

function centerAlign(){

    textBoxtext.style.textAlign ="center";

}

function rightAlign(){

    textBoxtext.style.textAlign ="end";

}

function del(){

    
    textBoxtext.value ="";
}




