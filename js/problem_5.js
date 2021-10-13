const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
showRhymesButton.addEventListener('click', () => {
    rhymesOutput.innerHTML = '';
    const word = wordInput.value;
    getRhymes(word, (data) => {
        for (const key in data) {
            const res_word = document.createElement('li');
            res_word.classList.add('list-group-item');
            res_word.textContent = data[key].word;
            rhymesOutput.append(res_word);
        }
    });
});

clearButton.addEventListener('click', () => {
    rhymesOutput.innerHTML = '';
    wordInput.value = '';
});