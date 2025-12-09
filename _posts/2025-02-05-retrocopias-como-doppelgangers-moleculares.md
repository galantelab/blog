---
layout: post
title: "Espelhos do genoma: retrocópias como doppelgängers moleculares"
author: tmiller
categories: [ "DNA", "LINE-1", "L1", "Elementos Transponíveis", "Retrocópia" ]
image: assets/images/9.jpg
---

Na mitologia do *doppeltgänger*, do alemão “duplo ambulante”,  as pessoas
poderiam ter uma cópia de si mesmas, um gêmeo do mal, o qual estaria
relacionado a presságios de má sorte. Há exemplos de *doppelgänger* na arte,
assim como há testemunhos daqueles que afirmam, categoricamente, terem passado
pela experiência de encontrar a própria contraparte na vida real.

O escritor alemão Goethe {% cite goethe2014 -A %}, em sua obra “Os Sofrimentos do Jovem
Werther”,  retrata um episódio no qual o herói da trama, o jovem Werther,
presencia, ao passear pelo campo, uma figura idêntica a si mesmo e trajando as
mesmas roupas. Essa manifestação fantasmagórica foi interpretada de forma
atônita pela personagem como um aviso de que o seu fim estava próximo.

Um dos casos mais famosos de aparição de *doppeltgänger* remete ao
ex-presidente dos EUA Abraham Lincoln. Em 1865, poucos dias que antecederam o
seu assassinato, Lincoln teria visto a própria imagem refletida numa janela do
segundo andar de um edifício em Washington DC. A preocupação se instaurou de
fato após presenciar novamente o seu clone em outras janelas durante o
percurso que fazia. Diz, então, a lenda que o presidente teria relatado o
ocorrido a sua esposa e amigos próximos e manifestado o temor que algo
terrível estava prestes a suceder.

Não obstante a tradicional narrativa maligna, em algumas histórias modernas e
contos, encontram-se exemplos de *doppelgängers* que agem positivamente. No
romance “Lugar Nenhum” de Neil Gaiman {% cite gaiman2016 -A %}, o herói Richard Mayhew se
encontra em uma Londres subterrânea fantástica onde, após um incidente, ele
se vê praticamente esquecido por todos. Durante sua jornada, Richard encontra
"reflexos" de si mesmo em personagens do submundo que acabam funcionando como
espelhos, ajudando-o a encontrar sua verdadeira força e propósito.

Esse conceito também aparece em histórias de séries como *Doctor Who*, onde
versões alternativas dos protagonistas às vezes agem como guias Esses
exemplos reinterpretam o “gêmeo malvado” como um guardião que aparece em
momentos de perigo, ajudando o protagonista a evitar acidentes ou encontrar o
caminho certo. Em vez de ser uma sombra ameaçadora, o *doppelgänger* seria como
um guia secreto, cuidando da personagem principal de longe e garantindo que ela
se torne uma pessoa melhor, sem jamais ser descoberto como um "outro eu". Essa
versão transforma o mito, associando-o à proteção e autodescoberta.

Tal qual indivíduos estariam sujeitos a trombar pelas veredas da vida com o
seu *doppeltgänger*, os genes, especificamente aqueles responsáveis pela
codificação de proteínas, também estariam à mercê da mesma sorte. Mas
então o que seria um *doppeltgänger* no contexto genômico?

## Genes codificadores e L1

Os **genes codificadores** são aqueles genes **transcritos** a partir do **genoma** (nosso
 **DNA**), situado dentro do **núcleo** da célula, para moléculas de **RNA mensageiro**
que, por sua vez, são transportadas para o **citoplasma** e lá encontram os
**ribossomos** onde são **traduzidas** em **proteínas**. Durante essa trajetória, o RNA
mensageiro passa por alguns percalços, podendo ser degradado por outras
moléculas em resposta a sinais específicos antes mesmo de adentrar o
território ribossomal {% cite alberts2017 %}. Além de poder ser degradado,
sobretudo após ser traduzido, existe a possibilidade de esse RNA mensageiro
ser abduzido no citoplasma pelas proteínas de um outro gene, mais precisamente
um **elemento móvel** (transponível) do genoma. O gene responsável por tal crime
se chama **LINE1** (ou apenas **L1** para os íntimos) {% cite kaessmann2009 %}.

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/assets/images/9-1.png" alt="Fig1">
  <figcaption>
    <b>Figura 1</b>: O RNA mensageiro (RNAm) é transcrito a partir do DNA
    no núcleo da célula. Em seguida, ele é transportado para o citoplasma,
    onde nos ribossomos será realizada a sua tradução em proteína.
    <br>
    <b>Fonte</b>: {% cite vasconcelos2021 -L figure -l 4 %}
  </figcaption>
</figure>

O LINE1, da abreviatura em inglês *Long Interspersed Nuclear Element-1*
(Elemento nuclear intercalado longo-1) é um gene que possui a capacidade de
criar **cópias de si mesmo** e espalhá-las pelo genoma de seu hospedeiro. Ocorre
que o L1 codifica a informação genética para a produção de pelo menos
duas proteínas:

1. a primeira localizada na **Fase de Leitura Aberta 1**, **ORF1** (*Open Reading Frame*),
quando traduzida dá origem a proteína **ORF1p** – a qual é uma
proteína ligante de RNA {% cite martin2010 %};
2. a segunda está localizada na **Fase de Leitura Aberta 2**, **ORF2**, e origina a
proteína **ORF2p** – que por sua vez é uma proteína com atividades
**endonucleolítica** {% cite sultana2017 %} e **transcriptase reversa** {% cite cost2002 %}.

O habitual em humanos, e outros mamíferos, é o RNA mensageiro conter os
códigos para a produção de uma única proteína (monocistrônico). Já aqui,
temos um exemplo de RNA mensageiro **policistrônico** – ou mais precisamente,
**bicistrônico** (por conta das duas proteínas ORF1p, ORF2p). Assim como os
outros genes codificadores , o L1 é transcrito para o seu RNA mensageiro no
núcleo e este, ao se transladar para o citoplasma, poderá ser traduzido nas
proteínas supracitadas.

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/assets/images/9-2.png" alt="Fig2">
  <figcaption>
    <b>Figura 2</b>: Ciclo de duplicação do L1. (A) O gene de L1 é transcrito
    num RNA mensageiro bicistrônico (L1 RNA). (B) L1 RNA é transportado para
    o citoplasma. (C) As ORF1 e ORF2 presentes no L1 RNA são traduzidas nas
    respectivas proteínas ORF1p e ORF2p. As ORF1p e ORF2p interagem com o
    L1 RNA, formando um complexo ribonucleoproteico (L1 RNP). (D) O complexo
    L1 RNP retorna ao núcleo da célula. (E) O domínio endonucleolítico da
    proteína ORF2p identifica uma região alvo presente no DNA e cliva
    gerando uma abertura para a inserção de uma nova cópia de L1. (F) O
    domínio transcriptase reversa presente na ORF2p transcreve de L1 RNA
    para DNA, estendendo a abertura iniciada pelo domínio endonucleolítico.
    Essa é a reação reversa da transcrição DNA->RNA e por isso é chamada de
    retrotranscrição. (G) Então uma nova cópia de L1 é concluída. Essa
    cópia pode ser íntegra ou truncada.
    <br>
    <b>Fonte</b>: {% cite viollet2014 -L figure -l 1 %}
  </figcaption>
</figure>

As proteínas ORF1p e ORF2p, após a sua síntese, conseguem interagir com o
seu próprio RNA mensageiro no citoplasma, formando um complexo de moléculas
de  RNA e proteínas – chamado, portanto, de complexo **ribonucleoproteico** {% cite wei2001 %}.
Um complexo proteico funciona como uma matriz industrial, na
qual cada setor é responsável por uma parte do processo de produção. Sendo
assim, o setor da ORF1p é incubido da **estabilização** da molécula de RNA,
protegendo-a de degradação e facilitando o acoplamento da ORF2p. O setor da
ORF2p dá início às suas atividades após o deslocamento do nosso complexo
ribonucleoproteico do citoplasma para o núcleo. No núcleo, a ORF2p identifica
os **padrões cromossomais** necessários para a inserção de uma nova cópia de
L1 e, ao encontrá-los, **cliva** a molécula de DNA, gerando uma abertura
(atividade **endonucleolítica**). É nessa abertura que será inserido pela
atividade de **transcriptase reversa** da ORF2p um clone do RNA mensageiro
associado ao complexo {% cite martin2010 martin2005 %}. Essa outra atividade
da ORF2p transcreve de RNA para DNA – até por isso é chamada de
transcriptase reversa, haja vista que a transcriptase transcreve de DNA para
RNA, então aqui a ORF2p realiza a **reação reversa**.

Os olhos mais atentos devem ter percebido a similaridade que há entre L1 e os
**retrovírus** (como o HIV). Ambos utilizam uma **transcriptase reversa** para se
integrar ao genoma do hospedeiro, mas fazem isso com objetivos diferentes em
termos evolutivos. Os vírus têm ciclos de vida que envolvem a infecção de
novas células e novos organismos, o que os torna **parasitas completos**
{% cite telesnitsky1997 %}, enquanto os LINE1 “viajam” apenas dentro de um
organismo, inserindo-se em novos locais no DNA da célula hospedeira e nas
células descendentes. Mesmo assim, ambos utilizam a maquinaria celular para
sua replicação e dispersão. Esse comportamento "autônomo" alinha-se à
ideia de Richard Dawkins {% cite dawkins2007 -A %}, no livro **O Gene Egoísta**, sobre a
“sobrevivência do mais persistente”, em que elementos genéticos que
garantem sua própria replicação são favorecidos, mesmo se isso tiver
efeitos potencialmente danosos para o organismo hospedeiro.

Os clones de L1 podem ser **íntegros**, preservando as duas regiões de leitura
aberta e, portanto, capazes de retrotranspor ativamente, gerando novas cópias
de si mesmo. Contudo, muitas vezes os L1 inseridos são **truncados**, perdendo uma
ou ambas as ORFs e, assim, tornando-se incapacidade de se mobilizar {% cite szak2002 %}.
Curiosamente, algumas dessas cópias truncadas podem ser cooptadas pelo
genoma do hospedeiro e acabar adquirindo novas **funções regulatórias**, atuando
como elementos de controle gênico ou de expressão {% cite han2005 %}.

Outra questão a ser levada em consideração é o fato de as inserções de L1
poderem ocorrer em regiões genômicas altamente transcritas e, por
conseguinte, coincidirem com a localização de outros genes, causando
**mutações prejudiciais**, ou criando **novidades genéticas** potencialmente
vantajosas. Há estudos que indicam que a atividade de L1 pode induzir
mutações somáticas que resultam na origem de câncer: como alguns casos de
câncer de cólon {% cite ogino2008 %}, mama {% cite van_hoesel2012 %} e pulmão
{% cite sun2022 %}. Mas ao mesmo tempo que esse elemento pode causar
doenças, ele também possui um papel na **diversificação gênica**. No cérebro,
por exemplo, há evidências de que L1 está envolvido na geração de
diversidade entre neurônios {% cite garza2023 %}, o que contribuiria para a
complexidade do desenvolvimento cerebral e da plasticidade neural, sugerindo
que a atividade controlada de L1 pode ter efeitos benéficos em contextos
específicos, como a cognição e o aprendizado.

## Retrocópia – o duplo ambulante de um gene codificador

O gene de LINE1, como visto, possui a capacidade ímpar de criar cópias de si
mesmo e espalhá-las pelo genoma. Esse ato de se auto copiar é chamado de
**reação em cis**, porém acontece também de a maquinaria de duplicação
oriunda de LINE1, ocasionalmente, interseptar o RNA mensageiro de um outro gene
e, consequentemente, gerar uma cópia dele, sendo esse ato nominado de **reação
em trans** {% cite kaessmann2009 %}. As cópias gênicas produzidas
pela atividade de LINE1 são carinhosamente conhecidas como **retrocópias**.

Assim como um **doppelgänger** pode surgir inesperadamente na vida de uma pessoa,
carregando sua imagem, mas sem sua essência completa, as retrocópias são
duplicatas de genes codificadores que surgem no genoma de maneira fortuita. No
entanto, diferentemente de uma duplicação convencional do DNA, em que tanto
exons quanto íntrons são copiados, as retrocópias nascem **desprovidas de
íntrons** e das **sequências regulatórias** que determinam sua correta expressão.
Elas são, por assim dizer, sombras genéticas de seus genes ancestrais,
versões destituídas de alguns componentes essenciais para sua função
original {% cite vanin1985 %}.

Portanto, muitas retrocópias acabam sendo silenciadas, tornando-se elementos
fósseis do genoma, incapazes de se expressar (de serem transcritas) e
relegadas ao esquecimento evolutivo, tornando-se, de fato, **pseudogenes**. No
entanto, algumas poucas escapam a esse destino e, ao adquirirem novos elementos
regulatórios, podem não apenas **assumir funções inovadoras**, mas também
**preservar a atividade** do gene parental {% cite kaessmann2009 %}.
Em certos casos, a retrocópia mantém a **mesma função** do gene original,
diferenciando-se principalmente no seu padrão de expressão, o que permite a
especialização em tecidos ou condições biológicas específicas {% cite burki2004 %}.
Além disso, algumas retrocópias atuam como **reguladores
gênicos**, interferindo na expressão de outros genes por meio da produção de
**RNAs não codificantes** ou mesmo pela influência sobre elementos regulatórios
próximos {% cite poliseno2010 %}. Dessa forma, enquanto algumas retrocópias
se tornam genes “novos” e funcionalmente ativos, outras exercem papéis
sutis, mas relevantes, na regulação da expressão gênica, sobretudo dos seus
genes parentais (dos quais elas se originaram).

Curiosamente, assim como o mito dos *doppelgängers* apresenta narrativas que
oscilam entre o presságio sombrio e a influência positiva, as retrocópias
também carregam essa dualidade. Algumas inserções podem levar a mutações
prejudiciais, interrompendo genes essenciais e contribuindo para o
desenvolvimento de doenças, como o câncer. Outras, porém, podem conferir
vantagens adaptativas, criando novidades genéticas, influenciando a expressão
de redes gênicas e contribuindo para a origem de novas características e
complexidades em diversos organismos.

Em última análise, tanto nos mitos quanto no genoma, os *doppelgängers* –
sejam eles humanos ou moleculares – são reflexos inesperados da existência
original. Enquanto alguns podem parecer meras sombras sem propósito, outros se
tornam protagonistas de novas histórias, redefinindo seu papel no curso da
evolução das espécies.

## Epílogo

A analogia entre *doppelgängers* e retrocópias gênicas ilustra de maneira
instigante a dualidade dessas cópias genéticas no genoma humano. Assim como
um *doppelgänger* pode ser apenas uma réplica inofensiva ou assumir um papel
significativo na vida de seu original, as retrocópias podem permanecer como
pseudogenes silenciosos ou adquirir funções inovadoras, influenciando a
evolução e a regulação da expressão gênica.

A atividade de LINE1 é a força motriz por trás da geração dessas cópias
gênicas, tornando o genoma um ambiente dinâmico e sujeito a constantes
remodelações. Embora muitas retrocópias sejam elementos neutros ou
disfuncionais, algumas desempenham papéis essenciais, seja na origem de novos
genes ou na predisposição a doenças. O impacto dessas duplicações na
diversidade biológica e na adaptação evolutiva reforça a importância de
investigar seus mecanismos de origem, manutenção, evolução e suas
consequências funcionais para as espécies, incluindo nós humanos.

Compreender os *doppelgängers* genômicos não é apenas um exercício
conceitual, mas uma necessidade para avançarmos na biologia evolutiva e
médica. O estudo das retrocópias nos permite enxergar como o genoma se
reinventa, criando novas possibilidades funcionais e, ao mesmo tempo,
carregando riscos inerentes a essa plasticidade. Assim, essas cópias continuam
a moldar a trajetória da vida, ora como sombras genéticas, ora como
protagonistas da inovação biológica.
