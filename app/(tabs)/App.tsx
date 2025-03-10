import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Print from "expo-print"; // Para gerar o PDF com HTML
import * as Sharing from "expo-sharing"; // Para compartilhar o PDF
import * as FileSystem from "expo-file-system"; // Para salvar o arquivo no dispositivo
import Toast from 'react-native-toast-message'; // Para exibir mensagens de sucesso ou erro

const App: React.FC = () => {
  const [senha, setSenha] = useState<number>(0); // Estado para armazenar a senha atual
  const [loading, setLoading] = useState<boolean>(false); // Estado para carregar

  // Função para gerar a próxima senha
  const gerarSenha = () => {
    setLoading(true);
    setTimeout(() => {
      setSenha((prev) => prev + 1);
      setLoading(false);
    }, 1000); // Delay de 1 segundo para simular o carregamento
  };

  // Função para gerar o PDF
  const gerarPDF = async () => {
    setLoading(true);
    const htmlContent = `
      <html>
        <body>
          <h1>Senha do Posto de Saúde</h1>
          <p><strong>Senha:</strong> ${senha.toString().padStart(3, "0")}</p>
        </body>
      </html>
    `;
    try {
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
      });

      Alert.alert("Sucesso", `PDF gerado com sucesso! Salvo em: ${uri}`);

      // Compartilhar o PDF gerado
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      }
    } catch (error) {
      console.error("Erro ao gerar PDF", error);
      Alert.alert("Erro", "Não foi possível gerar o PDF.");
    } finally {
      setLoading(false);
    }
  };

  // Função para resetar a senha
  const resetarSenha = () => {
    setSenha(0);
    showToast("success", "Senha resetada com sucesso!");
  };

  // Função para mostrar o Toast
  const showToast = (type: string, message: string) => {
    Toast.show({
      type,
      text1: message,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Posto de Saúde</Text>
      <Text style={styles.senha}>Senha Atual: {senha.toString().padStart(3, "0")}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={gerarSenha}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Gerando..." : "Gerar Próxima Senha"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={resetarSenha}
        >
          <Text style={styles.buttonText}>Resetar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={gerarPDF}
        >
          <Text style={styles.buttonText}>Gerar PDF</Text>
        </TouchableOpacity>
      </View>

      {/* Exibindo Toast para feedback do usuário */}
      <Toast />
    </View>
  );
};

export default App;

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f5",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  senha: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
    color: "blue",
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  resetButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
