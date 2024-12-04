const stepOneBtn = document.getElementById('one');
const stepTwoBtn = document.getElementById('two');
const stepThreeBtn = document.getElementById('three');
const stepFourBtn = document.getElementById('four');
// const activeBtn = document.querySelectorAll('.step')

// activeBtn.forEach(btn => 
    
//     btn.addEventListener('click', () => {
//         activeBtn.forEach(btn => btn.classList.remove('active'));
//         btn.classList.add('active');
//     })
// );

const stepOneForm = document.getElementById('stepOneForm');
const stepTwoPage = document.getElementById('stepTwoPage')

stepOneForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const phoneInput = document.getElementById('phoneInput').value.trim(); 
    const nameInput = document.getElementById('nameInput').value.trim();
    const emailInput = document.getElementById('emailInput').value.trim();

    const emailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (!emailValid(emailInput) || emailInput.length === 0) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailInput').focus();
        document.getElementById('emailInput').style.border = '2px solid hsl(354, 84%, 57%)';
    } else {
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('emailInput').style.border = '1px solid hsl(228, 100%, 84%)';
        document.getElementById('phoneInput').style.backgroundColor = 'none';
    }

    if (phoneInput.length < 10 && !phoneInput.includes('+')) {
        document.getElementById('phoneError').style.display = 'block';
        document.getElementById('phoneInput').focus();
        document.getElementById('phoneInput').style.border = '2px solid hsl(228, 100%, 84%)';
    } else {
        document.getElementById('phoneError').style.display = 'none';
        document.getElementById('phoneInput').style.border = '1px solid hsl(228, 100%, 84%)';
        document.getElementById('phoneInput').style.backgroundColor = 'none';
    }

    if (nameInput.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameInput').focus();
        document.getElementById('nameInput').style.border = '2px solid hsl(354, 84%, 57%)';
    } else {
        document.getElementById('nameError').style.display = 'none';
        document.getElementById('nameInput').style.border = '1px solid hsl(228, 100%, 84%)';
        document.getElementById('nameInput').style.backgroundColor = 'none';
    }

    // alert('Form Submission Completed');

    stepOneForm.style.display = 'none';
    stepTwoPage.style.display = 'flex';
    stepOneBtn.classList.remove('active');
    stepTwoBtn.classList.add('active');


});


// -------------------------step 2 ---------------------------
const monthlyText = document.getElementById('monthly');
const yearlyText = document.getElementById('yearly');
const togglePlan = document.getElementById('togglePlan');
const arcadePrice = document.getElementById('arcadePrice');
const advancedPrice = document.getElementById('advancedPrice');
const proPrice = document.getElementById('proPrice');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');



togglePlan.addEventListener('click', ()=>{
    const btn = togglePlan.getAttribute('class');

    if (btn !== 'fa-solid fa-toggle-off') {
        togglePlan.setAttribute('class', 'fa-solid fa-toggle-off');
        monthlyText.classList.remove('inactive');
        yearlyText.classList.add('inactive');
        arcadePrice.textContent = '$9/mo';
        advancedPrice.textContent = '$12/mo';
        proPrice.textContent = '$15/mo';
        d1.style.display = 'none';
        d2.style.display = 'none';
        d3.style.display = 'none';
    }else{
        togglePlan.setAttribute('class', 'fa-solid fa-toggle-on');
        monthlyText.classList.add('inactive');
        yearlyText.classList.remove('inactive');
        arcadePrice.textContent = '$90/yr';
        advancedPrice.textContent = '$120/yr';
        proPrice.textContent = '$150/yr';
        d1.style.display = 'block';
        d2.style.display = 'block';
        d3.style.display = 'block';
    }


});

const plans = document.querySelectorAll('.plan');

plans.forEach(plan => {
    plan.addEventListener('click', () => {
        plans.forEach(item => item.classList.remove('activePlan'));
        plan.classList.add('activePlan');
    });
});

const toPageOne = document.getElementById('toPage1');
const toPageThree = document.getElementById('toPage3');

toPageOne.addEventListener('click', () => {
    stepTwoPage.style.display = 'none';
    stepOneForm.style.display = 'flex';
    stepOneBtn.classList.add('active');
    stepTwoBtn.classList.remove('active');
});

toPageThree.addEventListener('click', () => {
    stepTwoPage.style.display = 'none';
    stepThreeBtn.classList.add('active');
    stepTwoBtn.classList.remove('active');
}) 


