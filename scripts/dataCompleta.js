function criandoDataHora() {
    const data = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });
    const dataCompleta = `${data} às ${hora}`;
    return dataCompleta;
}

export default criandoDataHora;