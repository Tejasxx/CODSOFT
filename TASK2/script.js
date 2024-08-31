document.addEventListener('DOMContentLoaded', () => {
    const skillsButton = document.getElementById('toggle-skills');
    const skillsContainer = document.getElementById('skills-container');
    const resumeButton = document.getElementById('resume-button');
    const resumeContainer = document.getElementById('resume-container');
    const introContainer = document.getElementById('intro-container');

    skillsButton.addEventListener('click', () => {
        introContainer.classList.add('hidden');
        skillsContainer.classList.remove('hidden');
        resumeContainer.classList.add('hidden');
    });

    resumeButton.addEventListener('click', () => {
        introContainer.classList.add('hidden');
        skillsContainer.classList.add('hidden');
        resumeContainer.classList.remove('hidden');
    });

    document.getElementById('qualifications-button').addEventListener('click', () => {
        // Empty for now
    });

    document.getElementById('certifications-button').addEventListener('click', () => {
        // Empty for now
    });

    // Typing effect for hero text
    const textElement = document.querySelector('.input');
    const textArray = ['Frontend Developer', 'UX Designer', 'Web Developer', 'Backend Developer'];
    let textIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < textArray[textIndex].length) {
            textElement.textContent += textArray[textIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            textElement.textContent = textArray[textIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 200);
        }
    }

    type();
});
