
export type Phrase = {
  text1: string;
  text2: string;
  tags: string[]
}


 
const database: Phrase[] = [
    { text1: 'Pense positivo', text2: 'Pelo menos hoje não é segunda né.', tags:['monday']},
    { text1: 'Se ontem foi ruim, fique tranquilo', text2: 'Hoje será pior!' , tags:['monday']},
    { text1: 'Hoje é o dia perfeito', text2: 'Pra você desistir de tudo que planejou ontem.' , tags:['monday']},
    { text1: 'Sexta feira! O melhor dia', text2: 'pra invejar pessoas felizes.', tags:['friday']},
    { text1: 'Levanta e vai a luta', text2: 'Suas derrotas não vão se conquistar sozinhas.', tags:[]},
    { text1: 'Nenhum obstáculo é grande', text2: 'Pra quem desiste.', tags:[]},
    { text1: 'Lute como nunca', text2: 'Perca como sempre.', tags:[]},
    { text1: 'Sem lutas', text2: 'Não há derrotas', tags:[]},
    { text1: 'É só uma fase ruim', text2: 'Logo vai piorar', tags:[]},
    { text1: 'Não sabendo que era impossível', text2: 'Foi lá e soube.', tags:[]},
    { text1: 'Seu único limite', text2: 'É você mesmo.', tags:[]},
    { text1: 'Não deixe que uma frase motivacional', text2: 'Melhore o seu dia de MERDA.', tags:[]},
    { text1: 'Pra que fazer', text2: 'Se você pode delegar.', tags:[]},
    { text1: 'Não se contente com as derrotas de hoje', text2: 'Amanhã tem mais.', tags:[]},
    { text1: 'Seja o protagonista', text2: 'Do seu próprio fracasso.', tags:[]},
    { text1: 'Não espere um motivo para desistir', text2: 'Seja você mesmo o seu motivo.', tags:[]},
    { text1: 'Sonhos são como arco-íris', text2: 'Somente os retardados correm atrás deles.', tags:[]},
    { text1: 'Nunca deixe ninguém dizer que você não consegue', text2: 'Diga você mesmo: EU NÃO CONSIGO!', tags:[]},
    { text1: 'A maior derrota ', text2: 'É acreditar que você é capaz.', tags:[]},
    { text1: 'Não seja foda', text2: 'DESISTA!', tags:[]},
    { text1: 'Não pare', text2: 'Faça até dar ERRADO.', tags:[]},
    { text1: 'Acredite. Você nasceu para conquistar', text2: 'GRANDES FRACASSOS', tags:[]},
    { text1: 'Para o seu dia ser bom, só depende de você', text2: 'Por isso vai ser uma MERDA.', tags:[]},
  ]


export default database;
