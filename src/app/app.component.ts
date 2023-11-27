import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Aluno {
  matricula: number;
  nome: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alunos';
  alunos: Aluno[] = [];
  alunoSelecionado: Aluno = { matricula: 0, nome: '', email:''};

  adicionarAluno(): void {
    const novoId = this.alunos.length > 0 ? this.alunos[this.alunos.length - 1].matricula + 1 : 1;
    const novoAluno: Aluno = { ...this.alunoSelecionado, matricula: novoId };
    this.alunos.push(novoAluno);
    this.limparFormulario();
  }

  selecionarAluno(aluno: Aluno): void {
    this.alunoSelecionado = { ...aluno };
  }

  atualizarAluno(): void {
    const index = this.alunos.findIndex(a => a.matricula === this.alunoSelecionado.matricula);
    if (index !== -1) {
      this.alunos[index] = { ...this.alunoSelecionado };
      this.limparFormulario();
    }
  }

  removerAluno(id: number): void {
    this.alunos = this.alunos.filter(a => a.matricula !== id);
  }

  limparFormulario(): void {
    this.alunoSelecionado = { matricula: 0, nome: '',email:''};
  }
}



