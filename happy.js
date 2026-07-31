
        const quotes = [
            "ស្នេហ៍ល្អត្រូវការពេលវេលា... មិនមែនប្រញាប់ប្រញាល់ទេ!",
            "Single មានន័យថាអ្នកកំពុងសន្សំស្នេហ៍សម្រាប់មនុស្សត្រឹមត្រូវ! 💖",
            "កុំបារម្ភ! ព្រះអាទិត្យនៅតែរះ ហើយស្នេហ៍នឹងមកដល់! 🌅",
            "អ្នកមិនមែន Single ទេ... អ្នកគឺជា 'មនុស្សមានសេរីភាព'! 😎",
            "ស្នេហ៍ខ្លួនឯងជាមុនសិន ស្នេហ៍អ្នកដទៃនឹងមកតាមក្រោយ! ❤️",
            "ជីវិត Single គឺដូចជាភាពយន្ត... អ្នកជាតួឯង! 🎬"
        ];

        let quoteIndex = 0;

        function rotateQuote() {
            const display = document.getElementById('quoteDisplay');
            if (display) {
                display.textContent = `"${quotes[quoteIndex]}"`;
                quoteIndex = (quoteIndex + 1) % quotes.length;
            }
        }

        setInterval(rotateQuote, 5000);
        rotateQuote();

        // =============================================
        // COUNTDOWN
        // =============================================
        function updateCountdown() {
            const now = new Date();
            let nextValentine = new Date(now.getFullYear(), 1, 14);

            if (now > nextValentine) {
                nextValentine.setFullYear(now.getFullYear() + 1);
            }

            const diff = nextValentine - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // =============================================
        // NAVIGATION
        // =============================================
        function hasGirlfriend(answer) {
            if (answer === true) {
                document.getElementById('step1').classList.add('hidden');
                document.getElementById('step3').classList.remove('hidden');
            } else {
                document.getElementById('step1').classList.add('hidden');
                document.getElementById('step2').classList.remove('hidden');
            }
        }

        function showCelebration() {
            const myName = document.getElementById('myName').value.trim();
            const gfName = document.getElementById('gfName').value.trim();
            const duration = document.getElementById('duration').value.trim();

            if (myName === '' || gfName === '' || duration === '') {
                alert('សូមបំពេញព័ត៌មានឲ្យបានពេញលេញ! 😊');
                return;
            }

            const message = `
                <strong>${myName}</strong> និង <strong>${gfName}</strong> 🥰<br><br>
                អ្នកទាំងពីរបានទាក់ទងគ្នាអស់រយៈពេល <strong>${duration}</strong> ហើយ!<br><br>
                សូមអបអរសាទរថ្ងៃនេះជាថ្ងៃពិសេសរបស់អ្នកទាំងពីរ! 🌹<br>
                សូមឱ្យស្នេហ៍របស់អ្នកកាន់តែរឹងមាំ និងផ្អែមល្ហែមជានិច្ច! 💕
            `;

            document.getElementById('celebrationMessage').innerHTML = message;

            document.getElementById('step3').classList.add('hidden');
            document.getElementById('step4').classList.remove('hidden');
        }

        function resetAll() {
            document.getElementById('step1').classList.add('hidden');
            document.getElementById('step2').classList.add('hidden');
            document.getElementById('step3').classList.add('hidden');
            document.getElementById('step4').classList.add('hidden');

            document.getElementById('myName').value = '';
            document.getElementById('gfName').value = '';
            document.getElementById('duration').value = '';

            document.getElementById('step1').classList.remove('hidden');
        }

        document.getElementById('step1').classList.remove('hidden');