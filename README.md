# Funcionalidades
Gerar Senha: Gera uma nova senha numérica sequencial, começando de 001 e incrementando de 1 a cada clique.
Gerar PDF: Cria um arquivo PDF com a senha atual, formatada em HTML, que pode ser compartilhado com outros.
Resetar Senha: Permite resetar a senha de volta para 0.
Feedback Visual: Exibe notificações rápidas (Toasts) para dar feedback ao usuário, como confirmação de reset de senha ou erro na geração do PDF.
Tecnologias Utilizadas
React Native: Para construir a interface do aplicativo.
Expo: Usado para facilitar o desenvolvimento com recursos como geração de PDF e compartilhamento de arquivos.
expo-print: Para gerar o PDF com a senha atual.
expo-sharing: Para permitir o compartilhamento do PDF gerado.
expo-file-system: Para salvar o arquivo no dispositivo.
React Toast Message: Para exibir mensagens de feedback como sucesso ou erro.
Instalação
Para rodar este projeto, siga os passos abaixo:

Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/posto-de-saude.git
cd posto-de-saude
Instale as dependências: Se você não tem o yarn ou npm instalado, instale as dependências usando um dos seguintes comandos:

bash
Copiar
Editar
yarn install
ou

bash
Copiar
Editar
npm install
Execute o aplicativo: Caso esteja usando o Expo CLI:

bash
Copiar
Editar
expo start
Como Usar
Gerar Senha: Ao clicar no botão "Gerar Próxima Senha", uma nova senha será gerada, incrementando a senha atual.
Gerar PDF: Clique no botão "Gerar PDF" para criar um arquivo PDF com a senha gerada. O aplicativo tentará compartilhar o arquivo, caso o dispositivo permita.
Resetar Senha: Clique no botão "Resetar Senha" para resetar a senha de volta para 0. Uma mensagem de sucesso será exibida após o reset.
Exemplo de Interface
O aplicativo exibe o título "Posto de Saúde" na parte superior da tela.
A senha atual é exibida em destaque no meio da tela, com 3 dígitos.
Existem três botões:
Gerar Próxima Senha: Gera a próxima senha.
Resetar Senha: Reseta a senha para 0.
Gerar PDF: Cria e compartilha o PDF com a senha atual.
Licença
Este projeto está licenciado sob a MIT License.