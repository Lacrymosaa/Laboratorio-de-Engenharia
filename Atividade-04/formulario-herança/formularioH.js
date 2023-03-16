class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matricula) {
      this.nome = nome;
      this.email = email;
      this.dataNascimento = dataNascimento;
      this.telefoneFixo = telefoneFixo;
      this.celular = celular;
      this.matricula = matricula;
    }
  }
  
  class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matricula, areaAtuacao, enderecoLattes) {
      super(nome, email, dataNascimento, telefoneFixo, celular, matricula);
      this.areaAtuacao = areaAtuacao;
      this.enderecoLattes = enderecoLattes;
    }
  }
  
  class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matricula, curso) {
      super(nome, email, dataNascimento, telefoneFixo, celular, matricula);
      this.curso = curso;
    }
  }

  function mostrarInformacoes(pessoa) {
    var infoDiv = document.getElementById('informacoes');
    
    if (pessoa instanceof Pessoa) {
      var nomeP = document.createElement('p');
      nomeP.innerHTML = `Nome: ${pessoa.nome}`;
      infoDiv.appendChild(nomeP);
      
      var emailP = document.createElement('p');
      emailP.innerHTML = `E-mail: ${pessoa.email}`;
      infoDiv.appendChild(emailP);
      
      var dataNascP = document.createElement('p');
      dataNascP.innerHTML = `Data de Nascimento: ${pessoa.dataNascimento}`;
      infoDiv.appendChild(dataNascP);
      
      var telFixoP = document.createElement('p');
      telFixoP.innerHTML = `Telefone Fixo: ${pessoa.telefoneFixo}`;
      infoDiv.appendChild(telFixoP);
      
      var celularP = document.createElement('p');
      celularP.innerHTML = `Celular: ${pessoa.celular}`;
      infoDiv.appendChild(celularP);
      
      var matriculaP = document.createElement('p');
      matriculaP.innerHTML = `Matrícula: ${pessoa.matricula}`;
      infoDiv.appendChild(matriculaP);
    }
    
    if (pessoa instanceof Professor) {
      var areaP = document.createElement('p');
      areaP.innerHTML = `Área de Atuação: ${pessoa.areaAtuacao}`;
      infoDiv.appendChild(areaP);
      
      var lattesP = document.createElement('p');
      lattesP.innerHTML = `Endereço Lattes: ${pessoa.enderecoLattes}`;
      infoDiv.appendChild(lattesP);
    }
    
    if (pessoa instanceof Aluno) {
      var cursoP = document.createElement('p');
      cursoP.innerHTML = `Curso: ${pessoa.curso}`;
      infoDiv.appendChild(cursoP);
    }
  }

  function adicionarPessoa() {
    var tipo = document.querySelector('input[name="tipo"]:checked').value;
    var nome = document.getElementsByName("nome")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var dataNascimento = document.getElementsByName("dataNascimento")[0].value;
    var telefoneFixo = document.getElementsByName("telefoneFixo")[0].value;
    var celular = document.getElementsByName("celular")[0].value;
    var matricula = document.getElementsByName("matricula")[0].value;

    if (tipo == "aluno") {
      var curso = document.getElementsByName("curso")[0].value;
      var pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, celular, matricula, curso);
    } else if (tipo == "professor") {
      var areaAtuacao = document.getElementsByName("areaAtuacao")[0].value;
      var enderecoLattes = document.getElementsByName("enderecoLattes")[0].value;
      var pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, celular, matricula, areaAtuacao, enderecoLattes);
    }

    mostrarInformacoes(pessoa);
  }

  function mostrarCampos() {
    var tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (tipo == "aluno") {
      document.getElementById("campoMatricula").style.display = "block";
      document.getElementById("campoCurso").style.display = "block";
      document.getElementById("campoAreaAtuacao").style.display = "none";
    } else if (tipo == "professor") {
      document.getElementById("campoMatricula").style.display = "block";
      document.getElementById("campoCurso").style.display = "none";
      document.getElementById("campoAreaAtuacao").style.display = "block";
    }
  }


  