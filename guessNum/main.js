        //宣告DOM
        const guessInput = document.getElementById('guess_input');
        const hintArea = document.querySelector('.hint');
        const guessBtn = document.getElementById('guess_btn');
        const restartBtn = document.getElementById('restart_btn');
        const showAnswerBtn = document.querySelector('#show_answer_btn');

        // 宣告變數
        let minNum, maxNum, answerNum, guessNum;

        //DOM事件掛載
        showAnswerBtn.addEventListener('click', function () {
            alert(answerNum)
        })

        restartBtn.addEventListener('click', function () {
            init();
        })

        guessBtn.addEventListener('click', guess)

        window.onload = function () {
            init();
        }


        isInValidNumRange()

        function guess(event) {
            console.log(event)
            const val = guessInput.value.trim();
            if (val === '' || isNaN(val) || val[0] === '0') {

                console.log('請輸入正確的數字');
                // alert('請輸入正確的數字');
                guessInput.value = '';
                return;
            }

            guessNum = parseInt(val)

            if(isInValidNumRange()){
                return;
            }

            // if (guessNum < minNum || guessNum > maxNum) {
            //     // showHint();
            //     hintArea.textContent = `請輸入正確的數字, 請輸入${minNum} ~ ${maxNum}之間的數字`
            //     guessInput.value = '';
            //     // alert('請確認輸入範圍')
            //     return;
            // }

            if (guessNum === answerNum) {
                // alert(`win 答案是${answerNum}`)
                hintArea.textContent = `win 答案是${answerNum}`;
                // init();
                return;
            } else if (guessNum < answerNum) {
                minNum = guessNum
            } else if (guessNum > answerNum) {
                maxNum = guessNum
            }
            guessInput.value = '';
            showHint();
        }

        function isInValidNumRange() {
            if (guessNum < minNum || guessNum > maxNum) {
                // showHint();
                hintArea.textContent = `請輸入正確的數字, 請輸入${minNum} ~ ${maxNum}之間的數字`
                guessInput.value = '';
                // alert('請確認輸入範圍')
                return true;
            
            }
        return false
        }


            function showHint() {
                hintArea.textContent = `請輸入${minNum} ~ ${maxNum}之間的數字`
                // alert(`請輸入${minNum} ~ ${maxNum}之間的數字`)
                console.log(`請輸入${minNum} ~ ${maxNum}之間的數字`);
            }

            /**
             * 預設值處裡
             * **/
            function init() {
                guessInput.value = '';
                minNum = 1;
                maxNum = 100;
                answerNum = generateAnswer();
                showHint();
            }


            //產生遊戲開始的數字
            function generateAnswer() {
                return getRandomInt(minNum, maxNum);
            }

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
            }