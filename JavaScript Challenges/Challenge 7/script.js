const container=document.createElement('div');
const login=document.createElement('div');
const signin=document.createElement('div');
const signinNow=document.createElement('div');
const h1=document.createElement('h1');
const h3=document.createElement('h3');
const form=document.createElement('form');
const label1=document.createElement('label');
const email=document.createElement('input');
const label2=document.createElement('label');
const pass=document.createElement('input');
const label3=document.createElement('label');
const confirmPass=document.createElement('input');
const submit=document.createElement('button');

container.className='container';
login.className='login__container';
signin.className='login__signin';
signinNow.className='login__signin-now';
email.className='input-field';
pass.className='input-field';
confirmPass.className='input-field';
submit.className='filled-btn';

email.nodeType='email';
pass.nodeType='password';
confirmPass.nodeType='cPassword';

email.placeholder='Email';
pass.placeholder='Password';
confirmPass.placeholder='Confirm Password'

submit.id='submit-btn';

h1.innerText='Sign up Now!';
h3.innerText='Enter your details';
label1.innerText='Email:';
label1.innerText='Password:';
label1.innerText='Confirm Password:';
submit.innerText='Submit';

label1.appendChild(email);
label2.appendChild(pass);
label3.appendChild(confirmPass);
form.appendChild(label1);
form.appendChild(label2);
form.appendChild(label3);
form.appendChild(submit);
signinNow.appendChild(h1);
signinNow.appendChild(h3);
signinNow.appendChild(form);
signin.appendChild(signinNow);
login.appendChild(signin);
container.appendChild(login);
document.body.appendChild(container);
