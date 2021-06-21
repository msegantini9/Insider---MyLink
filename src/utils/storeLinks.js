import AsyncStorage from '@react-native-async-storage/async-storage'

//buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//salvar um link no Storage
export async function saveLink(key, newLink){
    let linksStorage = await getLinksSave(key);

    //Se tiver algum link salvo com esse mesmo ID/ ou duplicado preciso ignorar
    const hasLink = linksStorage.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE MA LISTA');
        return;
    }

    linksStorage.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStorage))

    console.log('LINK SALVO COM SUCESSO')
}

//deletar algum link específico
export async function deleteLink(links, id){

    let myLinks = links.filter((item)=> {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('sujeitoLinks', JSON.stringify(myLinks))
    console.log('LINK DELETADO DO STORAGE')
    return myLinks;
}