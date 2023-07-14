const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');
const signUpButton = document.querySelector('.sign-up-btn');
const signInButton = document.querySelector('.sign-in-btn');

signUpButton.addEventListener('click', signUp);
signInButton.addEventListener('click', signIn);

//validar el formulario de registro
function signUp(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    //valores de los campos de entrada
    const nombre = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    // Validar los campos requeridos
    if (!nombre || !email || !password) {
        alert('Por favor causa , complete todos los campos');
        return;
    }

    // Enviar el formulario si todas las validaciones pasan
    signUpForm.submit();
}

//validar el formulario de inicio de sesión
function signIn(event) {
    event.preventDefault(); // Evitar envío del formulario por defecto

    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Validar campos
    if (!email || !password) {
        alert('Por favor causa , complete todos los campos');
        return;
    }

    // Enviar el formulario si todas las validaciones pasan
    signInForm.submit();
}
