function fontSize() {
    const rng = document.getElementById('seek1');
    const content = document.querySelectorAll('.mainText')
    const content2 = document.querySelectorAll('p')
    rng.addEventListener("input",
        function () {
            content.forEach((e) => {
                e.style.fontSize = rng.value + 'px'
            })

        });
    rng.addEventListener("input",
        function () {
            content2.forEach((e) => {
                e.style.fontSize = rng.value + 'px'
            })

        });
}

fontSize();

function LetterSpacing() {
    const rng = document.getElementById('seek2');
    const content = document.querySelectorAll('.mainText')
    const content2 = document.querySelectorAll('p')
    rng.addEventListener("input",
        function () {
            content.forEach((e) => {
                e.style.letterSpacing = rng.value + 'px'
            })

        });
    rng.addEventListener("input",
        function () {
            content2.forEach((e) => {
                e.style.letterSpacing = rng.value + 'px'
            })

        });
}

LetterSpacing();
