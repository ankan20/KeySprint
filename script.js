const paragraphs = [
    "In the quiet of the early morning, the city was a sleeping giant, its streets empty and its buildings dark, except for the occasional flicker of a streetlamp. The sound of distant traffic was a faint hum in the background, barely audible over the rustle of leaves in the breeze. A lone figure walked down the sidewalk, the click of their heels echoing off the concrete walls, the only sign of life in an otherwise deserted landscape.",

    "As the sun set behind the mountains, the sky turned a brilliant shade of orange, casting long shadows across the valley. The air was still, the only movement the gentle sway of the trees in the evening breeze. In the distance, the sound of a river rushing over rocks could be heard, a constant reminder of the passage of time. The world was bathed in a golden light, everything touched by its warmth and beauty.",
    
    "The old manor house stood on the hill, its windows dark and its doors closed, as if it were holding its breath. The gardens, once lush and vibrant, were now overgrown with weeds and vines, the flowers long since faded. The air was thick with the scent of earth and decay, the only sound the distant call of a bird. It was a place forgotten by time, a relic of a past long gone.",
    
    "In the heart of the forest, a small cabin stood in a clearing, its walls made of weathered wood and its roof covered in moss. The fire inside crackled and popped, the only source of light in the darkening woods. Outside, the wind howled through the trees, sending leaves and branches dancing across the forest floor. It was a place of solitude, where the noise of the world could not reach.",
    
    "The train station was a hub of activity, with people coming and going, their footsteps echoing off the stone floor. The sound of trains arriving and departing filled the air, a constant reminder of the passage of time. The smell of coffee and pastries wafted through the air, mingling with the scent of engine oil and metal. It was a place of movement and energy, where everyone was always on their way to somewhere else.",
    
    "The beach was deserted, the sand cool beneath the feet of the lone walker. The sound of the waves crashing against the shore was a soothing rhythm, a reminder of the vastness of the ocean. The sky was a deep blue, the sun just beginning to set, casting long shadows across the sand. It was a place of peace and tranquility, where the cares of the world seemed to melt away with each passing wave.",
    
    "The city skyline was a jagged line against the sky, the buildings reaching up towards the clouds. The streets below were a maze of cars and people, all moving with a purpose. The sound of horns honking and people shouting filled the air, a constant cacophony that never seemed to stop. It was a place of energy and life, where every corner held something new to discover.",
    
    "In the desert, the heat was oppressive, the sun beating down relentlessly on the dry earth. The air was still, the only sound the distant call of a bird. The landscape was barren, the ground cracked and dry, the only signs of life the occasional cactus or scrub bush. It was a place of extremes, where the beauty of the landscape was matched only by its harshness.",
    
    "The old library was a place of quiet and calm, the only sound the soft rustle of pages being turned. The shelves were lined with books, their spines worn from years of use. The air was thick with the scent of old paper and leather, a comforting smell that seemed to fill the entire room. It was a place of knowledge and history, where every book held a story waiting to be discovered.",
    
    "The mountain trail was steep and narrow, the path winding its way up through the trees. The air was cool and crisp, the scent of pine needles and earth filling the air. The sound of birds chirping and leaves rustling was a constant companion, a reminder of the life that thrived in the forest. It was a place of challenge and reward, where the journey was as important as the destination.",
    
    "The old farmhouse sat at the end of a long, winding road, its paint peeling and its windows cracked. The fields surrounding it were overgrown, the crops long since harvested and forgotten. The air was thick with the scent of earth and grass, the only sound the distant moo of a cow. It was a place of memories, where every creak of the floorboards and every whisper of the wind seemed to hold a story.",
    
    "The rain poured down in sheets, the sound of it hitting the roof a constant roar. The streets were flooded, the water rushing down the gutters in torrents. The air was cool and damp, the scent of wet earth and rain filling the air. It was a place of chaos, where the power of nature was on full display, and the world seemed to hold its breath in anticipation of what might come next.",
    
    "The garden was a riot of color, the flowers blooming in a symphony of reds, yellows, and purples. The air was thick with the scent of roses and jasmine, the sweet smell almost overwhelming. The sound of bees buzzing and birds chirping filled the air, a reminder of the life that thrived in this small corner of the world. It was a place of beauty and peace, where every flower and every leaf seemed to hold a secret.",
    
    "The old theater was a place of magic, its velvet seats and ornate walls a reminder of a bygone era. The stage was set, the curtains drawn, the air thick with anticipation. The smell of popcorn and old wood filled the air, a comforting scent that brought back memories of childhood. It was a place of stories, where the line between reality and fantasy blurred, and anything seemed possible.",
    
    "The snow fell silently, blanketing the world in a layer of white. The air was cold and crisp, the sound of footsteps muffled by the snow. The trees stood tall and silent, their branches heavy with snow. It was a place of stillness and peace, where the world seemed to slow down and the only sound was the soft whisper of snowflakes falling to the ground.",
    
    "The river flowed steadily, its surface smooth and calm, reflecting the blue sky above. The sound of the water rushing over rocks was a constant companion, a soothing melody that filled the air. The banks were lined with trees, their leaves rustling softly in the breeze. It was a place of tranquility, where the cares of the world seemed to melt away with the flow of the water.",
    
    "The old barn was a place of memories, its walls filled with the echoes of the past. The air was thick with the scent of hay and old wood, a comforting smell that seemed to fill the entire space. The floor was covered in dust, the sunlight filtering through the cracks in the walls, casting long shadows across the room. It was a place of history, where every beam and every board had a story to tell.",
    
    "The market square was alive with activity, the stalls overflowing with goods from all corners of the world. The sound of people haggling and laughing filled the air, a constant hum of energy and life. The smell of spices and fresh produce mingled with the scent of roasting meats, creating a tantalizing aroma that drew people in from all directions. It was a place of commerce and connection, where every transaction was a story waiting to be told.",
    
    "The lighthouse stood tall and proud on the edge of the cliff, its beam of light cutting through the darkness of the night. The sound of the waves crashing against the rocks below was a constant roar, a reminder of the power of the sea. The air was thick with the scent of salt and seaweed, a smell that seemed to permeate everything. It was a place of safety and guidance, where the light of the lighthouse was a beacon of hope in the storm.",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);