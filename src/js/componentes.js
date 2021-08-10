import '../css/componentes.css';

export const saludar = (nombre) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola, ${nombre}, bienvenido al sistema`;
    document.body.append(h1);
}
