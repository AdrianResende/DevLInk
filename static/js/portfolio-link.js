// ===== CONFIGURAÇÃO DOS SEUS LINKS =====
// 🎯 EDITE AQUI PARA ADICIONAR/REMOVER/MODIFICAR SEUS LINKS!

const MEUS_LINKS = [
    {
        nome: ' Meu Portfólio',
        url: 'https://portifolioadrian.netlify.app/',
        emoji: '🚀'
    },
    {
        nome: ' GitHub',
        url: 'https://github.com/AdrianResende',
        emoji: '💻'
    },
    {
        nome: ' LinkedIn', 
        url: 'https://www.linkedin.com/in/adrian-resende-767217207/',
        emoji: '💼'
    },
    {
        nome: ' Email',
        url: 'mailto:adrianresende147@gmail.com',
        emoji: '📧'
    },
    {
        nome: ' WhatsApp',
        url: 'https://wa.me/5532999997820',
        emoji: '📱'
    }
    // ✅ Para adicionar mais links, copie o formato acima!
];

// ===== NÃO PRECISA MEXER DAQUI PARA BAIXO =====

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        adicionarMeusLinks();
    }, 1000);
});

function adicionarMeusLinks() {
    const linksContainer = document.querySelector('.links');
    
    if (linksContainer) {
        // Remove links existentes para evitar duplicação
        linksContainer.innerHTML = '';
        
        // Adiciona cada link da configuração
        MEUS_LINKS.forEach((linkConfig, index) => {
            const link = document.createElement('a');
            link.href = linkConfig.url;
            
            // Email e telefone não abrem em nova aba
            if (!linkConfig.url.startsWith('mailto:') && !linkConfig.url.startsWith('tel:')) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
            
            link.className = 'link-area';
            link.innerHTML = `<span class="link-text">${linkConfig.emoji} ${linkConfig.nome}</span>`;
            link.style.animationDelay = `${index * 0.1}s`;
            
            linksContainer.appendChild(link);
        });
        
        console.log(`✅ ${MEUS_LINKS.length} links adicionados com sucesso!`);
    } else {
        console.log('⚠️ Container não encontrado, tentando novamente...');
        setTimeout(adicionarMeusLinks, 1000);
    }
}

// Função para adicionar links personalizados
function addCustomLink(url, text, emoji = '🔗', position = 'first') {
    const linksContainer = document.querySelector('.links');
    
    if (linksContainer) {
        const customLink = document.createElement('a');
        customLink.href = url;
        customLink.target = '_blank';
        customLink.rel = 'noopener noreferrer';
        customLink.className = 'link-area';
        customLink.innerHTML = `<span class="link-text">${emoji} ${text}</span>`;
        
        if (position === 'first') {
            linksContainer.insertBefore(customLink, linksContainer.firstChild);
        } else {
            linksContainer.appendChild(customLink);
        }
        
        return customLink;
    }
    return null;
}

// Exporta a função para uso global
window.addCustomLink = addCustomLink;