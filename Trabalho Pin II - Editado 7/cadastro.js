var form = document.getElementById("novoCadastrar");

if(form.addEventListener){
    form.addEventListener("submit", validaCadastro);
}else if(form.attachEvent){
    form.attachEvent("onsubmit", validaCadastro);
}



function validaCadastro(evt){
    var nomeUsuario = document.getElementById('nomeUsuario');
    var contato = document.getElementById('contato');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66}(?:\.[a-z]{2})?)$/i;
    var contErro =0;

    var caixa_nomeUsuario = document.querySelector('.msg-nomeUsuario');
    if(nomeUsuario.value == ""){
        caixa_nomeUsuario.innerHTML = 'Favor preencher o nome comepleto';
        caixa_nomeUsuario.style.display = 'block';
        contErro += 1;
    }else{
        caixa_nomeUsuario.style.display = 'none';
    }
    
    // var caixa_contato = querySelector('.msg-contato');
    // if(contato == ""){
    //     caixa_contato.innerHTML = 'Favor informar seu número de contato';
    //     caixa_contato.style.display = 'block';
    //     contErro += 1;
    // }else{
    //     caixa_contato.style.display = 'none';
    // }

    var caixa_email = document.querySelector('.msg-email');
    if(email.value == ""){
        caixa_email.innerHTML = 'Favor preencher o E-mail';
        caixa_email.style.display = 'block';
        contErro += 1;
    }else if(filtro.test(email.value)){
        caixa_email.style.display = 'none';
    }else{
        caixa_email.innerHTML = 'Formato do E-mail inválido';
        caixa_email.style.display = 'block';
        contErro += 1;
    }

    var caixa_password = document.querySelector('.msg-password');
    if(password.value == ""){
        caixa_password.innerHTML = 'Favor preencher a senha';
        caixa_password.style.display = 'block';
        contErro += 1;
    }else if(password.value.length < 6){
        caixa_password.innerHTML = 'Favor preencher a senha com minimo de 6 caracteres';
        caixa_password.style.display = 'block';
        contErro += 1;
    }else{
        caixa_password.style.display = 'none';
    }

    /* Validação do campo repita a senha */
	var caixa_password2 = document.querySelector('.msg-password2');
	if(password2.value == ""){
		caixa_password2.innerHTML = "Favor preencher o campo Repita a Senha";
		caixa_password2.style.display = 'block';
		contErro += 1;
	}else if(password2.value.length < 6){
		caixa_password2.innerHTML = "Favor preencher o campo Repita a Senha com o mínimo de 6 caracteres";
		caixa_password2.style.display = 'block';
		contErro += 1;
	}else{
		caixa_password2.style.display = 'none';
	}
 
	/* Valida se a senha é igual ao campo repita a senha */
	if(password.value != "" && password2.value != "" && password.value != password2.value){
		caixa_password2.innerHTML = "O campo Repita a Senha é diferente do campo Senha";
		caixa_password2.style.display = 'block';
		contErro += 1;
	}

    if(contErro > 0){
        evt.preventDefault();
    }
    
    alert("Castro enviado com sucesso!!!");
}

nomeUsuario.addEventListener('focus', ()=>{
    nomeUsuario.style.borderColor = "#3B065E"; 
})

nomeUsuario.addEventListener('blur', ()=>{
    nomeUsuario.style.borderColor = "#ccc"; 
})

dataNascimento.addEventListener('focus', () =>{
    dataNascimento.style.borderColor = "#3B065E";
})

dataNascimento.addEventListener('blur', ()=>{
    dataNascimento.style.borderColor = "#ccc"; 
})

    
contato.addEventListener('focus', ()=>{
    contato.style.borderColor = "#3B065E"; 
})

contato.addEventListener('blur', ()=>{
    contato.style.borderColor = "#ccc"; 
})

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#3B065E"; 
})

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc"; 
})

password.addEventListener('focus', ()=>{
    password.style.borderColor = "#3B065E"; 
})

password.addEventListener('blur', ()=>{
    password.style.borderColor = "#ccc"; 
})

password2.addEventListener('focus', ()=>{
    password2.style.borderColor = "#3B065E"; 
})

password2.addEventListener('blur', ()=>{
    password2.style.borderColor = "#ccc"; 
})