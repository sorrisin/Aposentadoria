const nome = "Guilherme";
const sexo = "M";
const idade = 57;
const contribuicao = 38;

const idade_e_contribuicao = (idade+contribuicao)

if(contribuicao >= 35){
    if (idade_e_contribuicao>=95){
        console.log(`Parabéns ${nome},Você pode se aposentar!`)
    }else{
        console.log(`${nome}, você não cumpre nenhum requisito então vai trabalhar sem-vergonha`)
    }
}else{
    console.log(`Quase lá, você cumpre apenas um dos dois requisitos necessários`)
}