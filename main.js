function endsWLY(){
    var word = document.getElementById("word").value;
    if (word.length < 2){
        document.getElementById("result").innerHTML = "Word too small to end in LY";
        alert("Word too small to end in LY");
    }else if( word.substring(word.length - 2).toLowerCase().match("ly")){
        document.getElementById("result").innerHTML = "This word ends with ly ";
        alert("This word ends with ly");
    }else{
        document.getElementById("result").innerHTML = "Does not end in LY ";
        alert("This word Does NOT even end with ly");
    }
}