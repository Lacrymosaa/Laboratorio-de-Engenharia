let valores = [];

        function adicionarValor() {
           event.preventDefault();
            let valorInput = document.getElementById('valor');
            let valor = valorInput.value.trim();
        
            if(valor !== '') {
                valores.push(valor);
                valorInput.value = '';
                exibirValores();
            }
        }
        
        function exibirValores() {
            let lista = document.getElementById('lista');
            lista.innerHTML = '';
        
            if(valores.length > 0) {
                valores.sort();
                valores.forEach(function(valor) {
                    let item = document.createElement('li');
                    item.innerText = valor;
                    lista.appendChild(item);
                });
            } else {
                let item = document.createElement('li');
                item.innerText = 'Nenhum valor cadastrado';
                lista.appendChild(item);
            }
        }