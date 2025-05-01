# 📺 WebOS App - Clip FM

Este projeto é um aplicativo desenvolvido para TVs LG utilizando a plataforma webOS. Ele permite [breve descrição da funcionalidade do app].

---

## 🚀 Ferramentas Utilizadas
- **Node.js** - Ambiente de execução JavaScript.
- **webOS TV SDK** - SDK oficial para desenvolvimento de apps para TVs LG.
- **ares-cli** - Ferramenta de linha de comando para criação e gerenciamento de apps webOS.
- **Emulador webOS** - Para testes sem necessidade de uma TV física.

---

## 🛠️ Instalação de Dependências

Antes de começar, instale as dependências do projeto. Certifique-se de ter o **Node.js** instalado.

```sh
npm install
```

Além disso, instale o webOS CLI caso ainda não tenha:

```sh
npm install -g ares-cli
```

---

## 🔧 Configuração de Ambiente

1. **Ativar Modo Desenvolvedor na TV** (caso esteja usando uma TV real)
   - Instale o app "Developer Mode" na LG Content Store.
   - Ative o Modo Desenvolvedor e anote o IP da TV.

2. **Adicionar a TV como dispositivo (opcional)**
   ```sh
   ares-setup-device --add tv --info "{'host': 'IP_DA_TV', 'port': 22, 'username': 'root'}"
   ```

3. **Testar conexão com a TV**
   ```sh
   ares-setup-device --list
   ```

4. **Configurar o projeto**
   ```sh
   ares-generate -t basic webos-clipfm
   ```

---

## 🏗️ Processo de Desinstalação

Para remover o app da TV ou do emulador, use:
```sh
ares-uninstall --device emulator com.domain.clipfm
```
Ou para uma TV:
```sh
ares-uninstall --device tv com.domain.clipfm
```

---

## ▶️ Execução

### 1️⃣ **Criar o pacote de instalação**
```sh
ares-package .
```

### 2️⃣ **Instalar no emulador ou TV**
```sh
ares-install --device emulator com.domain.clipfm_1.0.0_all.ipk
```

### 3️⃣ **Executar o aplicativo**
```sh
ares-launch --device emulator com.domain.clipfm
```

## 🏗️ Developer Mode na TV

1. Criar novo device
```sh
ares-setup-device
```
Selecionar a opção "add"
Preencher nome do device
Preencher IP da tv (ver no app Develper Mode)
Manter porta "9922"
Manter usuário "prisoner"
Opcional adicionar descrição
Concluir criação de device

2. Configurar tv LG
Acessar a LG Store
Instalar o Developer Mode
Habilitar "Dev Mode Status"
Aguardar reinicilização da tv
Habilitar Key Server
Executar
```sh
ares-novacom --device tv --getkey
```

---

## ⚠️ Erros Comuns e Soluções

### ❌ **EISDIR: illegal operation on a directory, read**
✅ Solução: Certifique-se de estar instalando um arquivo `.ipk` e não um diretório. Gere o pacote antes de instalar:
```sh
ares-package .
```

### ❌ **luna-send command failed <not exist>**
✅ Solução: O aplicativo pode não estar instalado. Verifique com:
```sh
ares-list --device emulator
```
Se não estiver na lista, instale novamente:
```sh
ares-install --device emulator com.domain.clipfm_1.0.0_all.ipk
```

### ❌ **Erro ao conectar ao emulador**
✅ Solução: Verifique se o emulador está rodando e configurado corretamente:
```sh
ares-setup-device --list
```
Se necessário, reconfigure:
```sh
ares-setup-device --add emulator --info "{'host': 'localhost', 'port': 6622, 'username': 'developer'}"
```

---

## 📜 Licença
Este projeto é distribuído sob a licença [nome da licença].

---

## 📩 Contato
Caso tenha dúvidas ou precise de suporte, entre em contato pelo email [seu email] ou abra uma issue neste repositório.

