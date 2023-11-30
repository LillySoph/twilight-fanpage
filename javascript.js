// generates random quotes
function generateQuote() {

    var quotes = [
        "Böse endet, wenn... wenn ich die Mahlzeit werde.",
        "Ist sie überhaupt Italienerin?",
        "Ich habe nie groß darüber nachgedacht, wie ich sterben würde. Aber anstelle von jemandem zu sterben, den man liebt, scheint mir ein guter Weg zu sein, um zu gehen.",
        "Ich hatte einen Adrenalinstoß. Das gibt es häufiger, du kannst es googeln.",
        "Sex, Geld, Sex, Geld... die Katze.",
        "Von deinen Launen bekommt man ja ein Schleudertrauma!",
        "Ich suchte nach einer logischen Erklärung für das, was ich gerade erlebt hatte – einer, die nicht darauf hinauslief, dass ich geisteskrank war.",
        "Und so verliebte sich der Löwe in das Lamm.", "Du bist jetzt mein Leben.",
        "Zwing mich nicht zu wählen, denn es wird er sein. Er war es schon immer.",
        "Du wirst immer meine Bella sein … meine Bella, nur weniger zerbrechlich.",
        "Kann er sich kein T-Shirt leisten?", "Wie lange bist du schon siebzehn?",
        "Ich würde lieber sterben als dir fern zu bleiben.",
        "Was hattest du erwartet? Särge und Kerker und Burggräben?",
        "Halt dich gut fest, mein Klammeräffchen!",
        "Aber Du und dein Duft, das ist wie eine Droge für mich… wie meine ganz persönliche Droge!"
    ];

    for (var i = Math.floor(Math.random() * (quotes.length));;) {
        console.log(i, quotes[i])
        return quotes[i];
    }
}

//document.getElementById("quoteContent").innerHTML = "Ich habe nie groß darüber nachgedacht, wie ich sterben würde. Aber anstelle von jemandem zu sterben, den man liebt, scheint mir ein guter Weg zu sein, um zu gehen.";
document.getElementById("quoteContent").innerHTML = generateQuote();

var allContent = ["home", "storyContent", "charContent", "quizContent", "quiz", "trailerContent"];

// if LOGO is clicked:
document.getElementById("logo").onclick = function () {

    if (document.getElementById("bg").style.backgroundImage != "url('bgForestOpacity.jpg')") {

        document.getElementById("bg").style.backgroundImage = "url('bgForestOpacity.jpg')";
    }
    for (var i = 0; i < allContent.length; i++) {
        var x = allContent[i];

        if (x != "home")
            document.getElementById(x).style.display = "none";
    }

    document.getElementById("home").style.display = "flex";

    /* document.getElementById("quoteContent").innerHTML = generateQuote(); */
}

// if menu STORY is clicked:
document.getElementById("storyMenu").onclick = function () {

    document.getElementById("bg").style.backgroundImage = "url('bgDanceOpacity.jpg')";

    for (var i = 0; i < allContent.length; i++) {
        var x = allContent[i];

        if (x != "storyContent")
            document.getElementById(x).style.display = "none";
    }

    document.getElementById("storyContent").style.display = "flex";
}

// if menu CHAR is clicked:
document.getElementById("charMenu").onclick = function () {

    document.getElementById("bg").style.backgroundImage = "url('bgBellaOpacity.jpg')";

    for (var i = 0; i < allContent.length; i++) {
        var x = allContent[i];

        if (x != "charContent")
            document.getElementById(x).style.display = "none";
    }

    document.getElementById("charContent").style.display = "flex";
}

// if menu QUIZ is clicked: 
document.getElementById("quizMenu").onclick = function () {

    document.getElementById("bg").style.backgroundImage = "url('bgCrashOpacity.jpg')";

    for (var i = 0; i < allContent.length; i++) {
        var x = allContent[i];

        if (x != "quizContent")
            document.getElementById(x).style.display = "none";
    }

    document.getElementById("quizContent").style.display = "flex";

    document.getElementById("quizGIF").style.display = "flex";
}

// if menu TRAILER is clicked: 
document.getElementById("trailerMenu").onclick = function () {

    document.getElementById("bg").style.backgroundImage = "url('bgForestOpacity.jpg')";

    for (var i = 0; i < allContent.length; i++) {
        var x = allContent[i];

        if (x != "trailerContent")
            document.getElementById(x).style.display = "none";
    }

    document.getElementById("trailerContent").style.display = "flex";
}

/***** quiz *****/

// ["question", "correctAnswer", "otherAnswer1", "otherAnswer2"]
var allQuestions = [
    ["Wie lautet Bellas vollständiger Name?", "Isabella Marie Swan", "Isabell Sophie Swan", "Isabella Rose Swan"],
    ["Von wem wurde Edward in einen Vampir verwandelt?", "Carlisle", "James", "Charlie"],
    ["Was spielen die Vampire bei Donner?", "Baseball", "Basketball", "Brennball"],
    ["Welcher der Cullens ist der 'jüngste' Vegetarier und greift Bella an?", "Jasper", "Esme", "Rosalie"],
    ["Wie heißt der Freund von Rosalie?", "Emmett", "Viktor", "Mike"],
    ["Wie heißen die drei Vampire, die vor dem Finale auftauchen?", "Laurant, Victoria und James", "Laurant, Elizabeth und James", "Laurant, Victoria und Charles"],
    ["Was ist Edwards besondere Fähigkeit?", "Gedanken lesen", "Zukunft vorhersehen", "Telekinesis"],
    ["Was ist Carlisles Beruf?", "Arzt", "Polizist", "Professor"],
    ["Wie heißt der Indiana-Stamm, zu dem Jacob gehört?", "Quileute", "Catawba", "Quapaw"],
    ["Wie heißen Bellas Schulfreunde?", "Eric, Jessica, Mike und Angela", "Mike, Jane, Dustin und Lucas", "Clay, Hannah, Tony und Justin"],
    ["Wie heißt der Vater von Jacob?", "Billy", "Boris", "Bill"],
    ["Wie werden Vampire von dem Indianer-Stamm genannt?", "'Kalte Wesen'", "'Glitzergesichter'", "'Schattenwesen'"],
    ["Warum fährt Bella mit ihren Schulfreundinnen nach Port Angeles?", "Um Kleider für den Abschlussball zu kaufen", "Um Geschenke für die Jungs zu kaufen", "Um zu IKEA zu gehen"],
    ["Was bedeutet es, wenn sich ein Vampir als 'Vegetarier' bezeichnet?", "Trinkt ausschließlich Tierblut", "Trinkt Blut ohne zu töten", "Isst nur Gemüse"],
    ["Was macht Bellas Vater beruflich?", "Polizist", "Koch", "KFZ-Mechaniker"],
    ["Wie heißt das Stück, welches Bella von Edward auf dem Klavier vorgespielt bekommt?", "Bellas Lullaby", "I Like Chopin", "Let Me Sign"],
    ["Welche Pflanze bringt Bella von Zuhause mit?", "Kaktus", "Orchidee", "Ahorn-Baum"],
    ["Wer rettet Bella vor den Männern in Port Angeles?", "Edward", "Jacob", "Erik und Mike"],
    ["Wie alt ist Edward?", "17 Jahre seit 1918", "17 Jahre seit 1928", "17 Jahre seit 1938"],
    ["Was muss Edward tun, um Bellas Leben zu retten?", "Gift aus dem Arm saugen", "Ihr Bein brechen", "Sie in einen Vampir verwandeln"],
    ["Wohin geht Bella, um ihre Mutter zu retten?", "In das Ballettstudio", "In den Wald", "In den Bus mit den Leuten, die es interessiert"],
    ["Was gibt Bellas Vater ihr als Wilkommensgeschenk?", "Ein Truck", "Ein Motorrad", "Ein Laptop"],
    ["In welchem Schulfach unterhalten sich Bella und Edward zum ersten Mal?", "Biologie", "Mathematik", "Chemie"],
    ["Wer fühlt sich noch zu Edward hingezogen?", "Jessica", "Eric", "Alice"],
    ["Was für einen Gegenstand hat Edward nicht in seinem Zimmer?", "Bett", "Klavier", "CDs"],
    ["Was für Essen kochen die Cullens, als Bella zum ersten Mal zu Besuch kommt?", "Italienisch", "Asiatisch", "Griechisch"],
    ["Wer gewinnt die goldene Zwiebel?", "Bella und Edward", "Jessica und Angela", "Alice und Jasper"],
    ["Was ist Bellas Liebelingsnachtisch?", "Beerenauflauf", "Brownies", "Sahnetorte"]
    ["Was ist das Motto des Abschlussballs?", "Casino Monte Carlo", "Helden der Kindheit", "Die wilden 70er"],
    ["Was ist die einzige Möglichkeit einen Vampir zutöten?", "In Stücke zerreißen und diese verbrennen", "Mit Knoblauch und Kruzifixen bewerfen", "Einen Holzpflock durch das Herz stoßen"],
    ["Was machen die Cullens, laut Jessica, bei schönem Wetter immer?", "Sie gehen Wandern oder Campen", "Sie machen Ferien im Ferienhaus", "Sie gehen schwimmen im Badesee"]
]

function newQuestion(number) {

    // generates random order for answers
    var random1 = Math.floor(Math.random() * 3) + 1;
    var random2 = Math.floor(Math.random() * 3) + 1;
    while (random2 == random1) {
        var random2 = Math.floor(Math.random() * 3) + 1;
    }
    var random3 = Math.floor(Math.random() * 3) + 1;
    while (random3 == random1 || random3 == random2) {
        var random3 = Math.floor(Math.random() * 3) + 1;
    }

    // newQuestion = [question, correctAnswer, answer1, answer2, answer3]  
    var newQuestion = {
        question: allQuestions[number][0],
        correctAnswer: allQuestions[number][1],
        answer1: allQuestions[number][random1],
        answer2: allQuestions[number][random2],
        answer3: allQuestions[number][random3]
    }

    return newQuestion
}

function randomGenerator() {

    // generate 8 different random numbers for questions
    var first = Math.floor(Math.random() * 30);

    var second = Math.floor(Math.random() * 30);
    while (second == first) {
        var second = Math.floor(Math.random() * 30);
    }

    var third = Math.floor(Math.random() * 30);
    while (third == first || third == second) {
        var third = Math.floor(Math.random() * 30);
    }

    var fourth = Math.floor(Math.random() * 30);
    while (fourth == first || fourth == second || fourth == third) {
        var fourth = Math.floor(Math.random() * 30);
    }

    var fifth = Math.floor(Math.random() * 30);
    while (fifth == first || fifth == second || fifth == third || fifth == fourth) {
        var fifth = Math.floor(Math.random() * 30);
    }

    var sixt = Math.floor(Math.random() * 30);
    while (sixt == first || sixt == second || sixt == third || sixt == fourth || sixt == fifth) {
        var sixt = Math.floor(Math.random() * 30);
    }

    var seventh = Math.floor(Math.random() * 30);
    while (seventh == first || seventh == second || seventh == third || seventh == fourth || seventh == fifth || seventh == sixt) {
        var seventh = Math.floor(Math.random() * 30);
    }

    var eight = Math.floor(Math.random() * 30);
    while (eight == first || eight == second || eight == third || eight == fourth || eight == fifth || eight == sixt || eight == seventh) {
        var eight = Math.floor(Math.random() * 30);
    }

    return array = [first, second, third, fourth, fifth, sixt, seventh, eight]

}

function evaluateQuestion(questionArray, clickedAnswer, score) {

    var correctAnswer = questionArray.correctAnswer;
    if (correctAnswer == document.getElementById(clickedAnswer).innerHTML) {
        score++;
    }

    return score;

}

function askQuestion(index, score, randomArray, questionCounter) {

    var score;

    if (questionCounter > 0) {
        // get random number from array
        var index;
        var randomNumber = randomArray[index];
        index++;
        var questionCounter;
        var score;

        // get set of question and answers
        var question = newQuestion(randomNumber);

        // change content to current question and answers
        document.getElementById("question").innerHTML = question.question;
        document.getElementById("answer1").innerHTML = question.answer1;
        document.getElementById("answer2").innerHTML = question.answer2;
        document.getElementById("answer3").innerHTML = question.answer3;

        questionCounter--;

        // evaluate question
        document.getElementById("answer1").onclick = function () {
            score = evaluateQuestion(question, "answer1", score);
            askQuestion(index, score, randomArray, questionCounter)
        }

        document.getElementById("answer2").onclick = function () {
            score = evaluateQuestion(question, "answer2", score);
            askQuestion(index, score, randomArray, questionCounter)
        }

        document.getElementById("answer3").onclick = function () {
            score = evaluateQuestion(question, "answer3", score);
            askQuestion(index, score, randomArray, questionCounter)
        }

    } else {

        document.getElementById("exitQuiz").style.display = "flex";
        document.getElementById("answer1").style.display = "none";
        document.getElementById("answer2").style.display = "none";
        document.getElementById("answer3").style.display = "none";
        document.getElementById("question").innerHTML = "Quiz abgeschlossen!";

        document.getElementById("exitQuiz").onclick = function () {
            document.getElementById("quiz").style.display = "none";
            document.getElementById("quizContent").style.display = "flex";
            document.getElementById("quizButton").innerHTML = "Quiz neustarten";
            document.getElementById("quizGIF").style.display = "flex";

            if (score == 8) {
                document.getElementById("quizTitle").innerHTML = "Volle Punktzahl!";
                document.getElementById("quizGIF").src = "smile.gif";
            } else if (score == 0) {
                document.getElementById("quizTitle").innerHTML = "Versuchs lieber nochmal!";
                document.getElementById("quizGIF").src = "disappointed.gif";
            } else if (score > 4) {
                document.getElementById("quizTitle").innerHTML = "Du hast " + score + " von 8 Punkten erreicht!";
                document.getElementById("quizGIF").src = "jake.gif";
            } else if (score < 4 && score > 0) {
                document.getElementById("quizTitle").innerHTML = "Du hast " + score + " von 8 Punkten erreicht!";
                document.getElementById("quizGIF").src = "study.gif";
            } else {
                document.getElementById("quizTitle").innerHTML = "Du hast " + score + " von 8 Punkten erreicht!";
            }
        }
    }
}

document.getElementById("quizButton").onclick = function () {

    // hide old quiz-content
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("quizGIF").style.display = "none";

    // show new quiz-content
    document.getElementById("quiz").style.display = "flex";
    document.getElementById("exitQuiz").style.display = "none";
    document.getElementById("answer1").style.display = "block";
    document.getElementById("answer2").style.display = "block";
    document.getElementById("answer3").style.display = "block";

    // initialize quiz
    var index = 0;
    var score = 0;
    var randomArray = randomGenerator();
    var questionCounter = 8;

    //var stuff = 
    askQuestion(index, score, randomArray, questionCounter)

}