const calcular = document.getElementById('calcular');

function imc(){ /*{"O imc do meu amigo é " + imcAmigo); function calculaImc() var imc = peso / (altura* altura)*/
    const altura = document.getElementById('altura').value;/* serve para retornar um elemento do DOM que é identificado por um ID específico.*/
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !=='' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';/*é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML*/
    if (valorIMC < 18.5){ /* pode ser usado para estilizar um documento muito básico de texto */
        classificacao = 'abaixo do peso';
    } else if(valorIMC <25){
          classificacao = 'peso ideal';
    }else if(valorIMC <30){
        classificacao = 'sobrepeso';
    }else if(valorIMC <40){/*muito obeso (também conhecido como obeso mórbido). A BBC News Brasil criou uma calculadora para você descobrir qual o seu IMC.*/
        classificacao = 'Obesidade';
    }else{/*else permite maior controle sobre o fluxo de código que o comando mais básico if, por permitir múltiplos testes serem agrupados juntos. */
        classificacao = 'Obesidade Grave, Cuidado!!';
    }
     


    resultado.textContent = `Seu IMC é ${valorIMC} e sua classificacao é: ${classificacao}.`;



   /* SE Altura for diferente de em branco e peso 
   for diferente de em branco faça
   !== diferente
   == igual
   >maior
   <menor
   */

    }
    else{
        resultado.textContent = `Preencha todos os campos!!`;
    }

}
calcular.addEventListener('click', imc)