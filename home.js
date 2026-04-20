/**
 * Alterna entre o Modo Claro e o Modo Escuro
 */
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#theme-toggle i');
    
    body.classList.toggle('dark-theme');
    
    // Altera o ícone conforme o tema ativo
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

/**
 * Utiliza a API nativa do dispositivo para partilhar o link
 */
function compartilharPerfil() {
    if (navigator.share) {
        navigator.share({
            title: 'Mäber S.A. | Links Oficiais',
            text: 'Confira os contatos e catálogo da Mäber S.A.',
            url: window.location.href
        }).catch((error) => console.log('Erro ao partilhar', error));
    } else {
        // Fallback para navegadores que não suportam a Web Share API
        alert('Copie este link para partilhar: ' + window.location.href);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const toast = document.getElementById('welcome-toast');
    
    if (toast) {
        // 1. Atraso de 1 segundo para a página carregar e a mensagem aparecer
        setTimeout(() => {
            toast.classList.add('show');
        }, 1000);

        // 2. Some automaticamente após 6 segundos de exibição (7000ms no total)
        setTimeout(() => {
            fecharToast();
        }, 7000);
    }
});

// Função para fechar se o cliente clicar no "X" antes do tempo acabar
function fecharToast() {
    const toast = document.getElementById('welcome-toast');
    if (toast) {
        toast.classList.remove('show');
    }
}

// ==========================================
// FUNÇÃO DO MENU WHATSAPP (LINKS DA BIO)
// ==========================================
function toggleWhatsAppMenu() {
    const menu = document.getElementById('wa-menu');
    const setaIcon = document.querySelector('.wpp-trigger .link-arrow');
    
    // Adiciona ou remove a classe "active" que faz o menu aparecer
    menu.classList.toggle('active');
    
    // Gira a setinha do botão para cima ou para baixo
    if (menu.classList.contains('active')) {
        setaIcon.classList.remove('fa-chevron-down');
        setaIcon.classList.add('fa-chevron-up');
    } else {
        setaIcon.classList.remove('fa-chevron-up');
        setaIcon.classList.add('fa-chevron-down');
    }
}

// ==========================================
// FUNÇÃO DO MENU DE E-MAILS (LINKS DA BIO)
// ==========================================
function toggleEmailMenu() {
    const menu = document.getElementById('em-menu');
    const setaIcon = document.querySelector('.email-trigger .link-arrow');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        setaIcon.classList.remove('fa-chevron-down');
        setaIcon.classList.add('fa-chevron-up');
    } else {
        setaIcon.classList.remove('fa-chevron-up');
        setaIcon.classList.add('fa-chevron-down');
    }
}

// ==========================================
// FUNÇÕES DO MENU DE IDIOMAS
// ==========================================

// 1. Abre e fecha o menu
function toggleLangMenu() {
    document.getElementById('lang-menu').classList.toggle('active');
}

// 2. Fecha o menu se o cliente clicar em qualquer lugar fora dele
document.addEventListener('click', function(event) {
    const container = document.querySelector('.lang-dropdown-container');
    const menu = document.getElementById('lang-menu');
    
    if (container && !container.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// ==========================================
// SISTEMA DE IDIOMAS (LINKS DA BIO)
// ==========================================

const traducoesBio = {
    es: {
        bio: "Distribuidor oficial y socio logístico corporativo en todo Paraguay.",
        linkSite: "Acceder al Sitio Oficial",
        linkCat: "Descargar Catálogo de Productos",
        linkWpp: "Atención vía WhatsApp",
        waTitle: "Hable con Mäber",
        waSub: "Normalmente respondemos en pocos minutos.",
        waComercialTitle: "Ventas",
        waComercialSub: "Cotizaciones, catálogos y nuevos pedidos.",
        waSuporteTitle: "Soporte y Logística",
        waSuporteSub: "Dudas y rastreo de mercancías.",
        waFinanceiroTitle: "Sector Financiero",
        waFinanceiroSub: "Facturación, notas y pagos.",
        waAdminTitle: "Administración",
        waAdminSub: "Alianzas y asuntos corporativos.",
        linkEmail: "Atención vía Correo",
        emTitle: "Correos Corporativos",
        emSub: "Seleccione el departamento deseado.",
        emDirW: "Dirección (Wanderlei)",
        emDirC: "Dirección (Cleimar)",
        linkMap: "Nuestra Sede (Ciudad del Este)",
        footerText: "© 2026 Mäber S.A. Todos los derechos reservados.",
        
        // Mensagens do WhatsApp em Espanhol
        msgComercial: "¡Hola! Entré por el Instagram de Mäber y me gustaría hablar con Ventas.",
        msgSuporte: "¡Hola! Entré por el Instagram y necesito Soporte.",
        msgFinanceiro: "¡Hola! Entré por el Instagram y me gustaría hablar con el sector Financiero.",
        msgAdmin: "¡Hola! Entré por el Instagram y me gustaría hablar con Administración.",
        
        // Assuntos de E-mail
        assuntoGeral: "Contacto via Instagram",
        assuntoDir: "Contacto Directorio"
    },
    pt: {
        bio: "Distribuidora oficial e parceiro logístico corporativo em todo o Paraguai.",
        linkSite: "Acessar Site Oficial",
        linkCat: "Baixar Catálogo de Produtos",
        linkWpp: "Atendimento via WhatsApp",
        waTitle: "Fale com a Mäber",
        waSub: "Normalmente respondemos em poucos minutos.",
        waComercialTitle: "Comercial / Vendas",
        waComercialSub: "Cotações, catálogos e novos pedidos.",
        waSuporteTitle: "Suporte e Logística",
        waSuporteSub: "Dúvidas e rastreio de mercadorias.",
        waFinanceiroTitle: "Setor Financeiro",
        waFinanceiroSub: "Faturamentos, notas e pagamentos.",
        waAdminTitle: "Administração",
        waAdminSub: "Parcerias e assuntos corporativos.",
        linkEmail: "Atendimento via E-mail",
        emTitle: "E-mails Corporativos",
        emSub: "Selecione o departamento desejado.",
        emDirW: "Direção (Wanderlei)",
        emDirC: "Direção (Cleimar)",
        linkMap: "Nossa Sede (Ciudad del Este)",
        footerText: "© 2026 Mäber S.A. Todos os direitos reservados.",
        
        // Mensagens do WhatsApp em Português
        msgComercial: "Olá! Vim pelo Instagram da Mäber e gostaria de falar com o Comercial.",
        msgSuporte: "Olá! Vim pelo Instagram e preciso de Suporte.",
        msgFinanceiro: "Olá! Vim pelo Instagram e gostaria de falar com o Financeiro.",
        msgAdmin: "Olá! Vim pelo Instagram e gostaria de falar com a Administração.",
        
        // Assuntos de E-mail
        assuntoGeral: "Contato via Instagram",
        assuntoDir: "Contato Diretoria"
    },
    en: {
        bio: "Official distributor and corporate logistics partner throughout Paraguay.",
        linkSite: "Access Official Website",
        linkCat: "Download Product Catalog",
        linkWpp: "WhatsApp Support",
        waTitle: "Talk to Mäber",
        waSub: "We usually reply in a few minutes.",
        waComercialTitle: "Sales Department",
        waComercialSub: "Quotes, catalogs, and new orders.",
        waSuporteTitle: "Support & Logistics",
        waSuporteSub: "Questions and order tracking.",
        waFinanceiroTitle: "Finance Department",
        waFinanceiroSub: "Billing, invoices, and payments.",
        waAdminTitle: "Administration",
        waAdminSub: "Partnerships and corporate matters.",
        linkEmail: "Email Support",
        emTitle: "Corporate Emails",
        emSub: "Select the desired department.",
        emDirW: "Direction (Wanderlei)",
        emDirC: "Direction (Cleimar)",
        linkMap: "Our Headquarters (Ciudad del Este)",
        footerText: "© 2026 Mäber S.A. All rights reserved.",
        
        // Mensagens do WhatsApp em Inglês
        msgComercial: "Hello! I came from Mäber's Instagram and would like to speak with Sales.",
        msgSuporte: "Hello! I came from Instagram and need Support.",
        msgFinanceiro: "Hello! I came from Instagram and would like to speak with Finance.",
        msgAdmin: "Hello! I came from Instagram and would like to speak with Administration.",
        
        // Assuntos de E-mail
        assuntoGeral: "Contact via Instagram",
        assuntoDir: "Board Contact"
    }
};

function mudarIdiomaLinks(idioma) {
    const textos = traducoesBio[idioma];
    if (!textos) return;

    // 1. Troca os textos na tela
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        if (textos[chave]) {
            elemento.innerText = textos[chave];
        }
    });

    // 2. Atualiza as mensagens do WhatsApp
    const linkComercial = document.getElementById('wa-link-comercial');
    const linkSuporte = document.getElementById('wa-link-suporte');
    const linkFinanceiro = document.getElementById('wa-link-financeiro');
    const linkAdmin = document.getElementById('wa-link-admin');

    if(linkComercial) linkComercial.href = `https://wa.me/5950983266011?text=${encodeURIComponent(textos.msgComercial)}`;
    if(linkSuporte) linkSuporte.href = `https://wa.me/5950973549986?text=${encodeURIComponent(textos.msgSuporte)}`;
    if(linkFinanceiro) linkFinanceiro.href = `https://wa.me/5950983780088?text=${encodeURIComponent(textos.msgFinanceiro)}`;
    if(linkAdmin) linkAdmin.href = `https://wa.me/595982652800?text=${encodeURIComponent(textos.msgAdmin)}`;

    // 3. Atualiza os assuntos dos E-mails
    const emVendas = document.getElementById('em-link-comercial');
    const emSuporte = document.getElementById('em-link-suporte');
    const emFinanceiro = document.getElementById('em-link-financeiro');
    const emDir1 = document.getElementById('em-link-dir1');
    const emDir2 = document.getElementById('em-link-dir2');

    if(emVendas) emVendas.href = `mailto:ventas@comercialmaber.com?subject=${encodeURIComponent(textos.assuntoGeral)}`;
    if(emSuporte) emSuporte.href = `mailto:maber.adm@comercialmaber.com?subject=${encodeURIComponent(textos.assuntoGeral)}`;
    if(emFinanceiro) emFinanceiro.href = `mailto:contabilidad@comercialmaber.com?subject=${encodeURIComponent(textos.assuntoGeral)}`;
    if(emDir1) emDir1.href = `mailto:wanderlei@comercialmaber.com?subject=${encodeURIComponent(textos.assuntoDir)}`;
    if(emDir2) emDir2.href = `mailto:cleimar@comercialmaber.com?subject=${encodeURIComponent(textos.assuntoDir)}`;

    // Fecha o menu de idiomas após a escolha
    const langMenu = document.getElementById('lang-menu');
    if (langMenu) langMenu.classList.remove('active');
}

// INICIA A PÁGINA EM ESPANHOL AUTOMATICAMENTE
document.addEventListener("DOMContentLoaded", () => {
    mudarIdiomaLinks('es'); 
});