module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

// 1.	Tela de Login e senha;
// 2.	Tela de cadastro de currículos (banco de vagas)
// 3.	Tela de Canal de atendimento (Chat)
// 4.	Tela de Esqueci minha senha
// 5.	Push notification
// a.	Disparo automático de mensagens de aniversário;
