# 🚀 Guia de Deploy no Netlify - DevLink

## 📋 Pré-requisitos
- Conta no [Netlify](https://netlify.com)
- Conta no GitHub (opcional, mas recomendado)

## 🌐 Opção 1: Deploy via GitHub (Recomendado)

### 1. Criar repositório no GitHub
1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository"
3. Nome do repositório: `devlink`
4. Marque como "Public" ou "Private" (sua preferência)
5. Clique em "Create repository"

### 2. Conectar projeto local ao GitHub
```bash
# Remote já configurado para:
git remote add origin https://github.com/AdrianResende/DevLink.git

# Push realizado com sucesso!
git push -u origin master
```

### 3. Deploy no Netlify via GitHub
1. Acesse [Netlify](https://netlify.com) e faça login
2. Clique em "New site from Git"
3. Escolha "GitHub"
4. Selecione o repositório `devlink`
5. Configurações de build:
   - **Build command**: `echo "No build needed"`
   - **Publish directory**: `.`
6. Clique em "Deploy site"

## 🌐 Opção 2: Deploy Manual (Drag & Drop)

### 1. Preparar pasta para upload
1. Selecione todos os arquivos do projeto (exceto `.git` e `.gitignore`)
2. Crie um arquivo ZIP ou prepare para drag & drop

### 2. Deploy no Netlify
1. Acesse [Netlify](https://netlify.com) e faça login
2. Na página principal, arraste a pasta do projeto para a área "Drag and drop"
3. Aguarde o upload e processamento

## ⚙️ Configurações Pós-Deploy

### 1. Nome do Site
1. No dashboard do Netlify, clique em "Site settings"
2. Em "General" > "Site details", clique em "Change site name"
3. Digite: `devlink-seu-nome` ou similar
4. Salve as alterações

### 2. Domínio Personalizado (Opcional)
1. Em "Domain management" > "Custom domains"
2. Clique em "Add custom domain"
3. Digite seu domínio personalizado
4. Configure os DNS conforme instruções

### 3. HTTPS (Automático)
O Netlify ativará HTTPS automaticamente via Let's Encrypt.

## 🔧 Configurações Avançadas

### Variables de Ambiente (se necessário)
1. Vá para "Site settings" > "Environment variables"
2. Adicione suas variáveis conforme necessário

### Deploy Hooks
1. Em "Build & deploy" > "Deploy hooks"
2. Crie um hook para deploys automáticos

## 📊 Monitoramento

### Analytics
1. Ative o Netlify Analytics em "Site settings" > "Analytics"
2. Monitore visitantes e performance

### Forms (se usar formulários)
1. Configure form handling em "Site settings" > "Forms"
2. Ative notificações por email

## 🎯 URL Final
Após o deploy, seu site estará disponível em:
- URL padrão: `https://site-name.netlify.app`
- URL personalizada: `https://seu-dominio.com` (se configurado)

## ✅ Checklist Pós-Deploy
- [ ] Site carregando corretamente
- [ ] Todas as páginas funcionando (SPA routing)
- [ ] Meta tags aparecendo corretamente
- [ ] Favicon carregando
- [ ] Manifest PWA funcionando
- [ ] Performance satisfatória (teste no Lighthouse)
- [ ] Responsivo em diferentes dispositivos

## 🔄 Atualizações Futuras

### Com GitHub (Automático)
```bash
# Fazer mudanças no código
git add .
git commit -m "Descrição das mudanças"
git push origin master
```

### Deploy Manual
1. Substitua os arquivos no Netlify
2. Ou faça novo drag & drop

---

## 🆘 Solução de Problemas

### Site não carrega
- Verifique se `index.html` está na raiz
- Confirme configuração de `_redirects`

### Rotas SPA não funcionam
- Verifique arquivo `_redirects`
- Confirme configuração no `netlify.toml`

### Performance baixa
- Otimize imagens
- Verifique cache headers no `netlify.toml`

### Erros de build
- Verifique build command
- Confirme estrutura de arquivos

---

🎉 **Parabéns! Seu DevLink está pronto para o mundo!** 🚀