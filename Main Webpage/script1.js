let grade = document.getElementById("mark");

let checkGradeBtn = document.getElementById("checkGrade");

let declarationPara = document.getElementById("declaration")

checkGradeBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    checkGrade();
});

function checkGrade() {
    try {
        if (grade.value > 100) {
            declarationPara.innerText = "Number is too big, please input a number less than 100";
        } 
        else if (grade.value < 0) {
            declarationPara.innerText = "Number is too small, please input a positive number";
        } 
        else if (isNaN(grade.value)) {
            declarationPara.innerText = "Please input a number";
        } 
        else if (grade.value >= 90 && grade.value <= 100) {
            declarationPara.innerText = "Your Grade is an A. Excellent";
        } 
        else if (grade.value >= 80 && grade.value <= 89) {
            declarationPara.innerText = "Your Grade is a B. Good";
        } 
        else if (grade.value >= 70 && grade.value <= 79) {
            declarationPara.innerText = "Your Grade is a C. Average";
        } 
        else if (grade.value >= 50 && grade.value <= 69) {
            declarationPara.innerText = "Your Grade is a D. Pass";
        } 
        else /*(grade.value > 50)*/ {
            declarationPara.innerText = "Your Grade is an F.";
        } 
    } catch (err) {
        // Handle any exceptions (though currently, there won't be any thrown)
        declarationPara.innerText = err;
    }
}