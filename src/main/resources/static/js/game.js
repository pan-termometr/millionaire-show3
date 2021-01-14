const disabled = "disabled"
const transparent = 'transparent'
const guaranteed = 'guaranteed'
const fifty = 'fifty'
const fiftyStatus = 'fiftyStatus'
const fiftyButton = 'fiftyButton'
const phone = 'phone'
const phoneStatus = 'phoneStatus'
const phoneButton = 'phoneButton'
const audience = 'audience'
const audienceStatus = 'audienceStatus'
const audienceButton = 'audienceButton'
const playerEnd = 'playerEnd'
const formFinish = 'formFinish'
const opacity = '0.3'
const opacity2 = '0.7'
const used = 'used'
const pink = 'pink'
const answers = document.getElementsByName("playerAnswer");
let disabledAnswer1;
let disabledAnswer2;
let fiftyUsed = false;
let audienceDivs = document.getElementsByName("audienceGraphAnswer")
let wrongAnswers = {};
let randomAudienceNumbersForBadAnswer = {};
let randomNumberForCorrectAnswer;
let randomFourNumbersForBadAnswer = {};
let randomOneNumberForOneBadAnswer;
const singleAnswerDivHeight = 220;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkAnswer(correctAnswer, playerAnswer) {
    const div = document.getElementById(playerAnswer);
    const correctDiv = document.getElementById(correctAnswer);
    const greenColor = "rgba(35, 203, 167, 0.7)";
    const redColor = "rgba(217, 30, 24, 0.7)";
    blockButtons();
    opacityButtons(div);
        if (correctAnswer === playerAnswer) {
            color(div, correctDiv, greenColor, true);
        } else {
            color(div, correctDiv, redColor, false);
        }
}

function opacityButtons(div){
    if (div.id !== "A")
        document.getElementById('A').style.opacity=opacity2;
    if (div.id !== "B")
        document.getElementById('B').style.opacity=opacity2;
    if (div.id !== "C")
        document.getElementById('C').style.opacity=opacity2;
    if (div.id !== "D")
        document.getElementById('D').style.opacity=opacity2;
}
function blockButtons() {
    $('#A').prop(disabled, true);
    $('#B').prop(disabled, true);
    $('#C').prop(disabled, true);
    $('#D').prop(disabled, true);
    disableButton(fiftyButton);
    disableButton(phoneButton);
    disableButton(audienceButton);
    disableButton(playerEnd);
}

async function color(div, correctDiv, color, win) {
    const blinkingColor = "rgba(244, 179, 80, 0.7)";
    const greenColor = "rgba(35, 203, 167, 0.7)";
    div.style.backgroundColor = blinkingColor;
    await sleep(1500);
        for(let i = 0; i < 4; i++){
            await sleep(500);
            div.style.backgroundColor = transparent;
            await sleep(500);
            div.style.backgroundColor = blinkingColor;
        }
    div.style.backgroundColor = color;
    correctDiv.style.backgroundColor = greenColor;
    await sleep(1500);
        if (win) {
            sendFormWin();
        } else {
            sendFormLost();
        }
    }

function sendFormLost() {
    document.getElementById("form").action="/badAnswer";
    document.getElementById("form").submit();
}

function sendFormWin() {
    const form = document.getElementById("form");
    form.submit();
}

function highlightLevel() {
    const pinkOpacity = "rgba(255, 192, 203, 0.5)"
    const level = 13 - $('#currentLevel').val();
    document.getElementById("11").className = guaranteed;
    document.getElementById("6").className = guaranteed;
    document.getElementById("1").className = guaranteed;
    document.getElementById(level.toString()).style.backgroundColor = pink;
    for (let i = level + 1; i <= 12; i++) {
        document.getElementById(i.toString()).style.backgroundColor = pinkOpacity;
    }
}

function endGame() {
    document.getElementById(formFinish).submit();
}

function doFifty(correctAnswer) {
    disableButton(fiftyButton);
    changeStatus(fifty);
    chooseFifty(correctAnswer);
}

function chooseFifty(correctAnswer) {
    const correctDiv = document.getElementById(correctAnswer);
    let previousDiv;
    let randomDiv;
    let i;
    for (i = 0; i < 2;) {
        randomDiv = chooseRandomDiv();
        if (randomDiv !== correctDiv && randomDiv !== previousDiv) {
            previousDiv = randomDiv;
            disableAnswer(randomDiv, i);
            i++;
        }
    }
}

function chooseRandomDiv() {
    const randomLength = answers.length;
    const randomNo = Math.floor(Math.random() * randomLength);
    const randomDiv = answers.item(randomNo);
    return randomDiv;
}

function disableAnswer(randomDiv, i) {
    randomDiv.innerHTML = "";
    randomDiv.style.opacity = opacity;
    randomDiv.onclick='';
    fiftyUsed = true;
    if (i===0) {
        disabledAnswer1 = randomDiv;
    }
    if (i===1) {
        disabledAnswer2 = randomDiv;
    }
}

function callFriend(correctAnswer, currentLevel) {
    disableButton(phoneButton);
    changeStatus(phone);
    friendAnswer(correctAnswer, currentLevel);
}

function friendAnswer(correctAnswer, currentLevel) {
    const friendAnswerDiv = document.getElementById("friendAnswer");
    const correctDiv = document.getElementById(correctAnswer);
    const level = currentLevel;
    if (fiftyUsed) {
        chooseForTwo(friendAnswerDiv, correctDiv, level);
    } else {
        chooseForFour(friendAnswerDiv, correctDiv, level);
    }
    friendAnswerDiv.style.visibility="visible";
}

function chooseForTwo(friendAnswerDiv, correctDiv, level) {
    let randomDiv;
    const friendAnswerIntro = "Wydaje mi się, żę poprawna odpowiedź to ";
    const percentageStart = 90;
    const percentageLevelDifference = 3;
    const maximum = 100;
    const minimum = 1;
    const currentLevelPercentageChance = percentageStart - (level * percentageLevelDifference)
    const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    if (randomNumber <= currentLevelPercentageChance) {
        friendAnswerDiv.innerText=(friendAnswerIntro + correctDiv.innerText.charAt(0));
    } else {
        randomDiv = getRandomDivFromTwo(correctDiv);
        friendAnswerDiv.innerText=(friendAnswerIntro + randomDiv.innerText.charAt(0));
    }
}

function getRandomDivFromTwo(correctDiv) {
    let chosenDiv;
    let found = false
    do {
        let temporaryDiv = chooseRandomDiv();
        if (temporaryDiv.id !== disabledAnswer1.id && temporaryDiv.id !== disabledAnswer2.id && temporaryDiv.id !== correctDiv.id) {
            chosenDiv = temporaryDiv;
            found = true;
        }
    } while (!found);
    return chosenDiv;
}

function chooseForFour(friendAnswerDiv, correctDiv, level) {
    let randomDiv;
    const percentageStart = 85;
    const percentageLevelDifference = 4;
    const maximum = 100;
    const minimum = 1;
    const currentLevelPercentageChance = percentageStart - (level * percentageLevelDifference)
    const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    if (randomNumber <= currentLevelPercentageChance) {
        friendAnswerDiv.innerText=("Wydaje mi się, żę poprawna odpowiedź to " + correctDiv.innerText.charAt(0));
    } else {randomDiv = getRandomDivFromFour(correctDiv);
        friendAnswerDiv.innerText=("Wydaje mi się, żę poprawna odpowiedź to " + randomDiv.innerText.charAt(0));
    }
}

function getRandomDivFromFour(correctDiv) {
    let chosenDiv;
    let found = false
    do {
        let temporaryDiv = chooseRandomDiv();
        if (temporaryDiv.id !== correctDiv.id) {
            chosenDiv = temporaryDiv;
            found = true;
        }
    } while (!found);
    return chosenDiv;
}

function askAudience(correctAnswer, currentLevel) {
    disableButton(audienceButton);
    changeStatus(audience);
    audienceAnswer(correctAnswer, currentLevel)
}

function audienceAnswer(correctAnswer, currentLevel) {
    const audienceAnswerDiv = document.getElementById("audienceAnswer");
    const level = currentLevel;
    setBadAnswers(correctAnswer);
    if (fiftyUsed) {
        chooseAudienceForTwoOptions(audienceAnswerDiv, correctAnswer, level);
    } else {
        chooseAudienceForFourOptions(audienceAnswerDiv, correctAnswer, level);
    }
    audienceAnswerDiv.style.visibility="visible";
}

function setBadAnswers(correctAnswer) {
    let j = 0;
    for (let i = 0; i < 4; i++) {
        if(audienceDivs[i].id.charAt(14) !== correctAnswer) {
            wrongAnswers[j] = audienceDivs[i];
            j++
        }
    }
}

function chooseAudienceForTwoOptions(audienceAnswerDiv, correctAnswer, level) {
    const percentageStart = 99;
    const percentageLevelDifference = 4;
    const maximum = 100;
    const minimum = 1;
    const needToKnowAnswer = percentageStart - (level * percentageLevelDifference)
    const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    const audienceKnowTheAnswer = randomNumber <= needToKnowAnswer
    if (audienceKnowTheAnswer) {
        getAudienceTwoRandomNumbersIfAnswerIsGood(level);
        setGraphForAnswersIfFiftyWasUsed(correctAnswer);
    } else {
        getAudienceTwoRandomNumbersIfAnswerIsBad();
        setGraphForAnswersIfFiftyWasUsed(correctAnswer);
    }
}

function getAudienceTwoRandomNumbersIfAnswerIsGood(level) {
    const percentageLevelDifferenceOfChance = 5;
    let minimumValueOfCorrectAnswer = 90 - (level * percentageLevelDifferenceOfChance);
    let maximum = 100;
    do {
        randomNumberForCorrectAnswer = Math.floor(Math.random() * (maximum - minimumValueOfCorrectAnswer + 1)) + minimumValueOfCorrectAnswer;
        randomOneNumberForOneBadAnswer = maximum - randomNumberForCorrectAnswer;
    } while (randomOneNumberForOneBadAnswer > randomNumberForCorrectAnswer)
    console.log(randomNumberForCorrectAnswer);
    console.log(randomOneNumberForOneBadAnswer);
}

function setGraphForAnswersIfFiftyWasUsed(correctAnswer) {
    let size;
    const sizeZero = 0;
    for (let i = 0; i < 4; i++) {
        if(audienceDivs[i].id.charAt(14) !== correctAnswer) {
            if (audienceDivs[i].id.charAt(14) !== disabledAnswer1.id && audienceDivs[i].id.charAt(14) !== disabledAnswer2.id) {
                size = singleAnswerDivHeight * (randomOneNumberForOneBadAnswer / 100);
                audienceDivs[i].style.height = size.toString() + "px";
            } else {
                audienceDivs[i].style.height = sizeZero.toString() + "px";
            }
        } else {
            size = singleAnswerDivHeight * (randomNumberForCorrectAnswer / 100);
            audienceDivs[i].style.height = size.toString() + "px";
            audienceDivs[i].style.marginTop = (singleAnswerDivHeight - size + 30).toString() + "px";
        }
    }
}

function getAudienceTwoRandomNumbersIfAnswerIsBad() {
    const maximum = 100;
    const minimum = 0;
    randomNumberForCorrectAnswer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    randomOneNumberForOneBadAnswer = maximum - randomNumberForCorrectAnswer;
}

function chooseAudienceForFourOptions(audienceAnswerDiv, correctAnswer, level){
    const percentageStart = 99;
    const percentageLevelDifference = 4;
    const maximum = 100;
    const minimum = 1;
    const needToKnowAnswer = percentageStart - (level * percentageLevelDifference)
    const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    const audienceKnowTheAnswer = randomNumber <= needToKnowAnswer
    if (audienceKnowTheAnswer) {
        getAudienceFourRandomNumbersIfAnswerIsGood(level);
        setGraphForCorrectAnswer(correctAnswer);
    } else {
        getAudienceFourRandomNumbersIfAnswerIsBad();
        setGraphForBadAnswer();
    }
}

function getAudienceFourRandomNumbersIfAnswerIsGood(level) {
    const percentageLevelDifferenceOfChance = 5;
    let minimumValueOfCorrectAnswer = 81 - (level * percentageLevelDifferenceOfChance);
    let maximum = 100;
    const minimum = 0;
    randomNumberForCorrectAnswer = Math.floor(Math.random() * (maximum - minimumValueOfCorrectAnswer + 1)) + minimumValueOfCorrectAnswer;
    maximum = maximum - randomNumberForCorrectAnswer;
    do {
        do {
            randomAudienceNumbersForBadAnswer[0] = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        } while (randomAudienceNumbersForBadAnswer[0] > randomNumberForCorrectAnswer);
        maximum = maximum - randomAudienceNumbersForBadAnswer[0];
        do {
            randomAudienceNumbersForBadAnswer[1] = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        } while (randomAudienceNumbersForBadAnswer[1] > randomNumberForCorrectAnswer);
        maximum = maximum - randomAudienceNumbersForBadAnswer[0];
        randomAudienceNumbersForBadAnswer[2] = maximum;
    } while (randomAudienceNumbersForBadAnswer[2] > randomNumberForCorrectAnswer)
}

function setGraphForCorrectAnswer(correctAnswer) {
    let size;
    let j = 0;
    for (let i = 0; i < 4; i++) {
        if(audienceDivs[i].id.charAt(14) !== correctAnswer) {
            size = singleAnswerDivHeight * (randomAudienceNumbersForBadAnswer[j] / 100);
            audienceDivs[i].style.height = size.toString() + "px";
            j++;
        } else {
            size = singleAnswerDivHeight * (randomNumberForCorrectAnswer / 100);
            audienceDivs[i].style.height = size.toString() + "px";
            audienceDivs[i].style.marginTop = (singleAnswerDivHeight - size + 30).toString() + "px";
        }
    }
}

function getAudienceFourRandomNumbersIfAnswerIsBad() {
    let maximum = 100;
    const minimum = 0;
    for (let i = 0; i < 4; i++) {
        if (i < 3) {
            randomFourNumbersForBadAnswer[i] = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            maximum = maximum - randomFourNumbersForBadAnswer[i];
        } else {
            randomFourNumbersForBadAnswer[i] = maximum;
        }
    }
}

function setGraphForBadAnswer() {
    let size;
    for (let i = 0; i < 4; i++) {
        size = singleAnswerDivHeight * (randomFourNumbersForBadAnswer[i] / 100);
        audienceDivs[i].style.height = size.toString() + "px";
        audienceDivs[i].style.marginTop = (singleAnswerDivHeight - size + 30).toString() + "px";
    }
}

function checkLifelines() {
    checkButton(fiftyStatus, fiftyButton);
    checkButton(phoneStatus, phoneButton);
    checkButton(audienceStatus, audienceButton);
}

function checkButton(lifelineStatusId, buttonId) {
    const element = document.getElementById(lifelineStatusId).textContent;
    if (element==="false"){
        disableButton(buttonId);
    }
}

function changeStatus(elementId) {
    const element = document.getElementById(elementId);
    element.value=used;
}

function disableButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.opacity = opacity;
    button.disabled = true;
    button.onclick = '';
}