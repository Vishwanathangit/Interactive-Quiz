var btn = document.getElementById("btn");
var result = document.getElementById("result")

btn.addEventListener("click", function () {
    var q1 = document.getElementsByName("q1")
    var q2 = document.getElementsByName("q2")
    var q3 = document.getElementsByName("q3")

    function isAnswered(question) {
        for (var i = 0; i < question.length; i++) {
            if (question[i].checked) {
                return true;
            }
        }
        return false;
    }

    function getSelectedValue(question) {
        for (var i = 0; i < question.length; i++) {
            if (question[i].checked) {
                return question[i].value;
            }
        }
        return null;
    }
    if (!isAnswered(q1) || !isAnswered(q2) || !isAnswered(q3)) {
        result.style.color = "red"
        result.textContent = "Attend Quiz";
    }
    else {
        var score = 0
    if(getSelectedValue(q1) === "Paris") {
        score++;
    }
    if (getSelectedValue(q2) === "Mars") {
        score++;
    }
    if (getSelectedValue(q3) === "Blue Whale") {
        score++;
    }
     result.style.color = "Green"
    result.textContent = "Your Score: " + score
}
})