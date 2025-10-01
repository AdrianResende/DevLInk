# 🚀 Como Rodar o Projeto DevLink Localmente

## 📋 Pré-requisitos
- Node.js instalado
- Terminal/PowerShell

## 🌐 Método 1: HTTP-Server (Atual - Funcionando)

### Instalação (só uma vez)
```bash
npm install -g http-server
```

### Executar o projeto
```bash
cd "d:\Windows-User\Desktop\Projetos github\DevLink"
http-server -p 3000 -o
```

**URL:** http://localhost:3000

---

## 🌐 Método 2: Serve (Alternativa)

### Instalação
```bash
npm install -g serve
```

### Executar
```bash
cd "d:\Windows-User\Desktop\Projetos github\DevLink"
serve -s . -p 3000
```

---

## 🌐 Método 3: Live Server (VS Code)

### No VS Code
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 🌐 Método 4: Python (Se tiver Python instalado)

### Python 3
```bash
cd "d:\Windows-User\Desktop\Projetos github\DevLink"
python -m http.server 3000
```

---

## 🌐 Método 5: PHP (Se tiver PHP instalado)

```bash
cd "d:\Windows-User\Desktop\Projetos github\DevLink"
php -S localhost:3000
```

---

## 🛠️ Scripts Personalizados

### Criar script .bat para Windows
Crie um arquivo `start-devlink.bat`:

```batch
@echo off
cd /d "d:\Windows-User\Desktop\Projetos github\DevLink"
echo Iniciando DevLink...
http-server -p 3000 -o
pause
```

### Executar
Clique duplo no arquivo `start-devlink.bat`

---

## 🔧 Solução de Problemas

### Porta ocupada
```bash
http-server -p 3001 -o  # Tenta porta 3001
http-server -p 8080 -o  # Tenta porta 8080
```

### Erro de CORS
```bash
http-server -p 3000 -o --cors
```

### Cache desabilitado
```bash
http-server -p 3000 -o -c-1
```

---

## 🌟 Recomendação

Para desenvolvimento local, use o **Método 1 (HTTP-Server)** que já está funcionando:

```bash
http-server -p 3000 -o
```

**Acesse:** http://localhost:3000

---

## 🚀 Para Produção

Use o deploy no Netlify como configurado anteriormente para a versão de produção online.

---

**Status Atual:** ✅ Projeto rodando em http://localhost:3000