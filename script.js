let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice=document.querySelector("#voice")
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Welcome back sir all systems for gaming will be perpared in few minutes for now feel free to grap a cup of coffee and have a good day.");
    } else if (hours >= 12 && hours < 16) {
        speak("Welcome back sir all systems for gaming will be perpared in few minutes for now feel free to grap a cup of coffee and have a good day.");
    } else {
        speak("Welcome back sir all systems for gaming will be perpared in few minutes for now feel free to grap a cup of coffee and have a good day.");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript);
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
});

function takeCommand(message) {
    // Fixed the spelling of "includes"
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("Hello") || message.includes("Hi")) {
        speak("Hello sir, What can I help you?");
    }
    else if(message.includes("Who are you")){
        speak("I am Jarvis created by Aryan sir ")
    }
    else if(message.includes("How are you, Jarvis?")){
        speak("I am good and you sir")
    }
    else if(message.includes("I am good, Jarvis.") || message.includes("I'm good, Jarvis.")){
        speak("it's very good sir ")
    }
    else if(message.includes("Let's focus on work") || (message.includes("Jarvis, focus on work"))){
        speak("what I can open sir")
    }
    else if(message.includes("I am very upset today") || message.includes("I'm very upset today")){
        speak("ok sir then I open the song")
        window.open("https://www.youtube.com/watch?v=DAYszemgPxc&list=RDDAYszemgPxc&start_radio=1")
    }
    else if(message.includes("Open YouTube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("Open Google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("Open ChatGPT")){
        speak("opening chatgpt")
        window.open("https://www.chatgpt.com/")
    }else if(message.includes("Open DSA")||(message.includes("Open DSA sheet"))){
        speak("opening a striver A to Z DSA Shhet")
        window.open("https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/")
    }
    else if(message.includes("Open calculator")){
        speak("opening Calculator")
        window.open("calculator:\\")
    }
    else if(message.includes("Open WhatsApp")){
        speak("opening Whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("Open Setting Jarvis")){
        speak("setting is loading sir")
        window.open("Settings://")
    }

    else if(message.includes("Time")){
       let time=new Data().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date=new Data().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
    else{
        let finalText="This is what i found on internet regarding..."+ message.replace("jarvis","") || message.replace("Jarvis","") 
        speak(finalText)
        window.open(`https://www.google.co.in/search?q=${message.replace("jarvis","")}`,"_blank")
    }

}

