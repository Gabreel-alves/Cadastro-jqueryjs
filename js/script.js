$(function(){
    //funcao para abrir e fechar o formulario
    abrirJanela();
    fecharModal();    
    function abrirJanela(){

        $('.btn').click(function(e){
            e.stopPropagation()
            $('.bg').fadeIn();
        })
    }

    function fecharModal(){
        var el = $('body, .closeBtn');

       el.click(function(){
           $('.bg').fadeOut();
       })
        $('.form').click(function(e){
            e.stopPropagation();
        
        })

    }
    ///
    //eventos do formulario
    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this))
    })

   $('form#form1').submit(function(e){
       e.preventDefault()
       var nome = $('input[name=nome]').val();
       var telefone = $('input[name=telefone]').val();
       var email = $('input[name=email]').val();

    if(verificarNome(nome) == false){
        aplicarCampoInvalido($('input[name=nome]'))
    }else if(verificarTelefone(telefone) == false ){
        aplicarCampoInvalido($('input[name=telefone]'))

    } else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'))
    
    }else{
        alert('formulario enviado com sucesso')
    }
   })
   
   
   
   //funcoes para estilizar o campo do formulario


   function aplicarCampoInvalido(el){
    el.css('color', 'red')
    el.css('border','2px solid red');
   // el.data('invalido', 'true');
    el.val('campo Invalido')
   }

   function resetarCampoInvalido(el){
    el.css('color', '#ccc')
    el.css('border','2px solid #ccc');
   // el.data('invalido', 'true');
    el.val('')
   }
   //funcoes para veririfacr nossos campos

   function verificarNome(nome){

    if(nome == ''){
        return false
    }

//contantdo a quantidade de espaco e os valores
    var amount = nome.split(' ').length;
    var splitStr = nome.split(' ');
    if(amount >=2){
        for(var i = 0; i < amount; i++){

           if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

           }else{  
             
               return false
           }
        } 
    }else{ 
       
        return false
    }
   }

   //verificar telefone funcao
   function verificarTelefone(telefone){
       if(telefone == ""){
           return false
       }

       if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
        return false
       }

   }


   //verificar email
   function verificarEmail(email){
       if(email==null){
           return false
       }
    if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
        return false
   }
   }
});