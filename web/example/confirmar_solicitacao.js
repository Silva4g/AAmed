// na lógica que usei enquanto fazia o código (mobile + socket),
// eu achei que não fazia muito sentido no momento que o usuário envia a solicitação
// ou quando o hospital aceita a solicitação o cadastro da mesma ser efetuado em tal momento.
// Então pensei que quando o usuário/paciente fizer a solicitação (no socket.emit), 
// vai ser enviado: o user (dados do usuário logado), os hospitais (ids) e a descrição da situação do paciente.
// Na web (hospital) iria vir esses dados e teria dois botões 'aceitar' e 'recusar'
// a idéia e que quando ocorresse a ação de clique em um desses botões,
// seria mandado apenas a resposta (aceito ou recusado)
// e apenas quando o usuário/paciente chegasse no hospital que iria dar a confirmação/baixa, 
// e seria criado um novo registro no (documento/tabela) 'Solicitation', e ai seria utilizada essa função abaixo.

// porém essa é só uma ideia que eu tive
// faz o que for mais fácil.
// De qualquer modo, seja na lógica acima ou com outra lógica,
// a função abaixo provavelmente terá que ser utilizada, já que ela faz o cadastro da solicitação no BD
// qualquer dúvida chama do wpp

function confirmSolicitation() {
  try {
    await api.post(`/hospital/${'id_do_hospital'}/solicitation`,{
        description,
      },{
        headers: { user_id },
      }
    );

    Alert.alert("Solicitação confirmada");
  } catch (err) {
    console.og("[ERROR] => ", err);
  }
}