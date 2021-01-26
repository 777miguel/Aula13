    function programador(objeto: Idev, array: string[]) {
    //nao presisa desenvolver nada aqui
}
    interface Idev {
        nome: string,
        idade: number,
        empresa: string,
        famoso: boolean
}

    const dev: Idev = {
        nome: 'Bill Gates',
        idade: 60,
        empresa: 'Microsoft',
        famoso: true
}
    const produtos: string[] = ["Azure", "VS Code", "Office"]
    programador(dev, produtos)