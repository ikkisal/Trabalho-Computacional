class Autor {
    constructor(ID, Nome, Nascimento) {
      this.ID = ID;
      this.Nome = Nome;
      this.Nascimento = Nascimento;
    }
  }
  
  class Estudante {
    constructor(ID, Nome, Curso) {
      this.ID = ID;
      this.Nome = Nome;
      this.Curso = Curso;
    }
  }
  
  class Livro {
    constructor(ID, Titulo, AutorID, Ano) {
      this.ID = ID;
      this.Titulo = Titulo;
      this.AutorID = AutorID;
      this.Ano = Ano;
    }
  }
  
  class Emprestimo {
    constructor(ID, EstudanteID, LivroID, Data) {
      this.ID = ID;
      this.EstudanteID = EstudanteID;
      this.LivroID = LivroID;
      this.Data = Data;
    }
  }
  
  let autores = [];
  let estudantes = [];
  let livros = [];
  let emprestimos = [];
  
  function loadFiles() {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const data = event.target.result;
        const parsedData = parseCSV(data);
        const fileType = getFileType(parsedData[0][0]);
        switch (fileType) {
          case 'Autor':
            autores = parsedData.map(row => new Autor(row[0], row[1], row[2]));
            break;
          case 'Emprestimo':
            emprestimos = parsedData.map(row => new Emprestimo(row[0], row[1], row[2], row[3]));
            break;
          case 'Estudante':
            estudantes = parsedData.map(row => new Estudante(row[0], row[1], row[2]));
            break;
          case 'Livro':
            livros = parsedData.map(row => new Livro(row[0], row[1], row[2], row[3]));
            break;
        }
        updateTables();
      };
      reader.readAsText(files[0]);
    }
  }
  
  function getFileType(firstColumnValue) {
    if (firstColumnValue.match(/^\d+$/)) {
      // assume que o ID é um número
      if (autores.find(autor => autor.ID === firstColumnValue)) {
        return 'Autor';
      } else if (estudantes.find(estudante => estudante.ID === firstColumnValue)) {
        return 'Estudante';
      } else if (livros.find(livro => livro.ID === firstColumnValue)) {
        return 'Livro';
      } else {
        return 'Emprestimo';
      }
    } else {
      // assume que o primeiro valor é o nome do autor ou estudante
      if (firstColumnValue.match(/^[A-Za-z ]+$/)) {
        return 'Autor';
      } else {
        return 'Estudante';
      }
    }
  }
  
  function parseCSV(data) {
    const lines = data.split('\n');
    return lines.map(line => line.split(';'));
  }
  
  function updateTables() {
    updateTable('table-autor', autores);
    updateTable('table-emprestimo', emprestimos);
    updateTable('table-estudante', estudantes);
    updateTable('table-livro', livros);
    // atualizar os nomes dos autores e estudantes nos objetos Livro e Emprestimo
    livros.forEach(livro => {
      const autor = autores.find(autor => autor.ID === livro.AutorID);
      if (autor) {
        livro.AutorNome = autor.Nome;
      }
    });
    emprestimos.forEach(emprestimo => {
      const estudante = estudantes.find(estudante => estudante.ID === emprestimo.EstudanteID);
      if (estudante) {
        emprestimo.EstudanteNome = estudante.Nome;
      }
      const livro = livros.find(livro => livro.ID === emprestimo.LivroID);
      if (livro) {
        emprestimo.LivroTitulo = livro.Titulo;
      }
    });
  }
  
  function updateTable(tableId, data) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    data.forEach(item => {
      const row = table.insertRow();
      Object.values(item).Object.values(item).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  }
  