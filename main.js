name_of_the_student_array = [];
function submit(){
    var display_student_array=[];
    for (var j=1;j<=4;j++;){
        var student_name=document.getElementById("student_name" +j).value;
        console.log(name_of_the_student_array);
        name_of_the_student_array.push(student_name);
    }
    console.log(name_of_the_student_array);
    var length=name_of_the_student_array.length;
console.log(length);
for (k=0;k<length;k++){
    display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
     console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove=display_student_array.join("");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";



   
}
function sortimg(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];
    var length=name_of_the_student_array.length;
    console.log(length);
    for (k=0;k<length;k++){
        display_student_array_sorting.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
         console.log(display_student_array_sorting);
    }
    var remove=display_student_array_sorting.join("");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    




}