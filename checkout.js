
//variáveis dos dados de pagamento
let user = document.querySelector('#user').value
let nome = document.querySelector('#nome').value
let cartao = document.querySelector('#num').value
let data = document.querySelector('#data').value



//função de exibir os produtos adicionados ao carrinho
function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itenscarrinho = document.getElementById('produtos');
  
    if (carrinho.length === 0) {
        itenscarrinho.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }
  
    let html = '<ul>';
    carrinho.forEach(item => {
        html += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
        valor = item.preco.toFixed(2)
        valor = parseFloat(valor)
        subtotal = valor
    });
    html += '</ul>';
    itenscarrinho.innerHTML = html;
    document.getElementById('subtotalid').innerHTML = `<p>R$ ${subtotal}</p>`;
  }
  mostrarCarrinho();
  
 function remover(){
  localStorage.clear()
    document.getElementById('produtos').innerHTML = '<p>Seu carrinho está vazio.</p>';
    document.getElementById('subtotalid').innerHTML = ''
    document.getElementById('total').innerHTML = ''
 }

//validação do cadastro
function cadastrar(){
  if (user == 0 || nome == 0 || cartao == 0 || data == 0){
    document.getElementById('formErro').innerHTML = 'Digite dados válidos.'

  }
  else{
    let user1 = local.localStorage.getItem('user')
    document.getElementById('validacao').innerHTML = 'Dados validados!'
  }
}


//função para validar o valor do frete
function calcfrete(){
  const frete = document.getElementById('cep').value
    if (frete == 51250360){
      document.getElementById('valorfrete').innerHTML = '<p>R$ 10.00</p>'
      let valorfrete1 = 10.00
      const totalprodutos = (valorfrete1+subtotal)
      document.getElementById('total').innerHTML = `<p>R$ ${totalprodutos}</p>`
    }
    else if (frete == 0){
      document.getElementById('valorfrete').innerHTML = 'Insira um CEP válido.'
    }
    else{
      document.getElementById('valorfrete').innerHTML = '<p>R$ 20.00</p>'
      let valorfrete2 = 20.00
      const totalprodutos = (valorfrete2+subtotal)
      document.getElementById('total').innerHTML = `<p>R$ ${totalprodutos}</p>`
    }


}