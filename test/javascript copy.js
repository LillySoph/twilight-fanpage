// generates random quote for footer
function generateQuote() {

    var quotes = ["Böse endet, wenn... wenn ich die Mahlzeit werde.", "Ist sie überhaupt Italienerin?", "Ich habe nie groß darüber nachgedacht, wie ich sterben würde. Aber anstelle für jemanden zu sterben, den man liebt, scheint mir ein guter Weg zu sein, um zu gehen.", "Ich hatte einen Adrenalinstoß. Das gibt es häufiger, du kannst es googeln.", "Sex, Geld, Sex, Geld... die Katze.", "Von deinen Launen bekommt man ja ein Schleudertrauma!", "Ich suchte nach einer logischen Erklärung für das, was ich gerade erlebt hatte – einer, die nicht darauf hinauslief, dass ich geisteskrank war.", "Und so verliebte sich der Löwe in das Lamm.", "Du bist jetzt mein Leben.", "Zwing mich nicht zu wählen, denn es wird er sein. Er war es schon immer.", "Du wirst immer meine Bella sein … meine Bella, nur weniger zerbrechlich.", "Kann er sich kein T-Shirt leisten?", "Wie lange bist du schon siebzehn? ~ Eine Weile...", "Ich würde lieber sterben als dir fern zu bleiben.", "Was hattest du erwartet? Särge und Kerker und Burggräben?", "Halt dich gut fest, mein Klammeräffchen!", "Aber Du und dein Duft, das ist wie eine Droge für mich… wie meine ganz persönliche Droge!"];

    for (var i = Math.floor(Math.random() * (quotes.length));;) {
        return quotes[i];
    }
}

document.getElementById("quote").innerHTML = generateQuote();

// unhide current menu point and hide rest 
document.getElementById("storyMenu").onclick = function () {

    document.getElementById("storyContent").style.display = "block";
    document.getElementById("charContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("funfactContent").style.display = "none";
    document.getElementById("bg-bella").style.display = "block";

    document.getElementById("storyContent").scrollIntoView();
}
document.getElementById("charMenu").onclick = function () {

    document.getElementById("storyContent").style.display = "none";
    document.getElementById("charContent").style.display = "block";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("funfactContent").style.display = "none";
    document.getElementById("bg-bella").style.display = "block";


    document.getElementById("charContent").scrollIntoView();
}
document.getElementById("quizMenu").onclick = function () {

    document.getElementById("storyContent").style.display = "none";
    document.getElementById("charContent").style.display = "none";
    document.getElementById("quizContent").style.display = "block";
    document.getElementById("funfactContent").style.display = "none";
    document.getElementById("bg-bella").style.display = "block";

    document.getElementById("quizContent").scrollIntoView();
}
document.getElementById("funfactMenu").onclick = function () {

    document.getElementById("storyContent").style.display = "none";
    document.getElementById("charContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("funfactContent").style.display = "block";
    document.getElementById("bg-bella").style.display = "block";

    document.getElementById("funfactContent").scrollIntoView();
}
document.getElementById("logo").onclick = function () {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.getElementById("storyContent").style.display = "none";
    document.getElementById("charContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("funfactContent").style.display = "none";
    document.getElementById("bg-bella").style.display = "none";

}

// content for story
story = Twilight = "Biss zum Morgengrauen (Originaltitel: Twilight) ist ein US-amerikanischer Vampir-Film der Regisseurin Catherine Hardwicke in Zusammenarbeit mit der US-Filmgesellschaft Coryworle. Er basiert auf dem Roman Bis(s) zum Morgengrauen von Stephenie Meyer und lief in Deutschland am 15. Januar 2009 in den Kinos an. Die Premiere war in Los Angeles am 17. November 2008. Am Startwochenende konnte der Film in 3419 Kinos insgesamt 70,6 Millionen US-Dollar einspielen.";
document.getElementById("storyContent").innerHTML = story;

document.getElementById("storyContent").onclick = function () {
    document.getElementById("bg").style.background = "url('bgBella.jpg')";
}