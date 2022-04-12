import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

const alunos = [
  {
    id: 0,
    nome: "Alexandre Rodrigues do Nascimento",
    rga: "201907430237",
    data_nascimento: "10/03/2000",
    endereco: "José Ribeiro de Sá Carvalho, 1028",
    email: "alexandre.nascimento.ifms@gmail.com",
    senha: "123456",
    telefone: "67993025609",
  },
];

export default class AlunosController {
  public async store({ request }: HttpContextContract) {
    const { nome, rga, data_nascimento, endereco, email, senha, telefone } =
      request.all();

    const aluno = {
      id: alunos.length,
      nome,
      rga,
      data_nascimento,
      endereco,
      email,
      senha,
      telefone,
    };

    alunos.push(aluno);

    return aluno;
  }

  public async login({ request, response }: HttpContextContract) {
    const { rga, senha } = request.all();

    const aluno = alunos.find((aluno) => aluno.rga === rga);

    if (aluno?.senha !== senha) response.badRequest("RGA ou senha incorretos");
    return aluno;
  }

  public async index({ request }: HttpContextContract) {
    const { rga } = request.all();

    return alunos.find((aluno) => aluno.rga === rga);
  }
}
