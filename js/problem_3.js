const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
(function(){
    let count = 0;
    window.clicker = function(){
        count++;
        return count;
    }
})();

clickCountButton.addEventListener('click', () => {
    const clickCount = clicker();
    clickCountButton.textContent = 'You clicked the button ' + clickCount + ' time' + addS(clickCount); 
});
