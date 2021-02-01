const app = document.querySelector('.app');
const tweetTextArea = app.querySelector('#tweetTextArea');
const tweetOutLink = app.querySelector('#tweetOutLink');
const appInfoBtn = document.querySelector('#appInfoBtn');
const maxChars = 140;  

const showInfo = () => {
    const appInfoElem = document.querySelector('#appInfo');

    appInfoElem.classList.toggle('show');
};

const charsRemaining = () => {
    const charsRemaining = maxChars - tweetTextArea.value.length;
    const counter = app.querySelector('#counter');

    if (charsRemaining <= 0) {
        counter.innerText = `Characters left: ${charsRemaining} / ${maxChars}`;
        tweetTextArea.blur();
        tweetOutLink.disabled = true;
    } else if (charsRemaining <= 20) {
        counter.style.color = 'red';
        counter.innerText = `Characters left: ${charsRemaining} / ${maxChars}`;
    } else {
        counter.style.color = 'var(--theme-clr)';
        counter.innerText = `Characters left: ${charsRemaining} / ${maxChars}`;
        tweetOutLink.disabled = false;
    }
};

const tweetOut = () => {
    let typedTweet = tweetTextArea.value;
    const tweetOutLink = app.querySelector('#tweetOutLink');
    const tweeterUrl = 'https://twitter.com/intent/tweet?text=';

    tweetOutLink.setAttribute('href', `${tweeterUrl}${typedTweet}`);

    const tweetImgAnim = tweetOutLink.querySelector('img');
    tweetImgAnim.classList.add('tweetOutAnim');
};

appInfoBtn.addEventListener('click', showInfo);
tweetTextArea.addEventListener('input', charsRemaining);
tweetOutLink.addEventListener('click', tweetOut);