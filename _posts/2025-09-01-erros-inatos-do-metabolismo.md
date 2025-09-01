---
layout: post
title: "Biologia Molecular e Bioinformática na Investigação dos Erros Inatos do Metabolismo"
author: echaves
categories: [ "Erros Inatos do Metabolismo", "Biologia Molecular", "Genética" ]
image: assets/images/14.jpg
---

## O que são os Erros Inatos do Metabolismo?

As doenças genéticas (DG) representam um dos grupos mais desafiadores na
medicina, com uma prevalência global de cerca de 6% da população. Embora
cada uma das mais de seis mil DG descritas seja rara, o que inclusive leva, com
enorme frequência, à falha diagnóstica no cenário clínico,  as desordens
genéticas são uma importante causa de morbimortalidade {% cite chung2022 %}.

Dentre o vasto grupo das DGs, aquelas associadas aos Erros Inatos do
Metabolismo (EIMs) somam mais de 1400 entidades reconhecidas na classificação
de Ferreira et al. {% cite ferreira2021 -A %}, e afetam aproximadamente 1 a cada 1900
recém-nascidos {% cite waters2018 %}. Segundo a OMS, uma doença é considerada rara quando ocorre
em menos de 1 a cada 2000 pessoas e, portanto, as DG causadas por EIMs,
enquanto grupo, não são consideradas raras. Além disso, talvez o ponto mais
interessante sobre essas DGs seja o fato de que a maioria das doenças
genéticas tratáveis seja, de fato, pertencente a esse grupo de EIMs, o que
torna crucial o diagnóstico  correto dessas condições para salvar muitas
vidas, por meio do manejo terapêutico.

De uma forma mais específica, as DGs associadas aos EIMs decorrem da
perturbação direta de uma dada via metabólica, o que geralmente se dá por
funcionamento deficiente de alguma enzima (proteínas). Isso, na sequência,
pode causar uma doença tanto por acúmulo de substratos (produtos catalisados
pelas reações enzimáticas) não degradados como por insuficiência de algum
elemento molecular que seria resultante do correto metabolismo da via, e que é
importante para o funcionamento correto de células e, consequentemente, do
organismo. Uma terceira consequência de falhas enzimáticas pode ainda ser a
conversão secundária dos substratos acumulados em metabólitos (pequenas
moléculas resultantes de reações enzimáticas) tóxicos, por meio de uma via
alternativa de metabolização.

Pelo próprio mecanismo patológico dessas condições ser fundamentado na
deficiência enzimática, a maioria das mutações genéticas causadoras das
DGs associada a EIMs são resultantes da perda, total ou parcial, de funções
de um ou mais genes. Em alguns casos, a perda da função de uma cópia gênica
(temos duas cópias da maioria dos nossos genes, as quais são herdadas de
nossos pais) é suficiente para resultar em uma dessas DG. Nesses casos, tais
condições são denominadas DGs Autossômicas Dominantes. Porém, a maior
parte das DGs associadas aos EIMs são consequência de mutações em ambas as
cópias dos nossos genes, o que as caracterizam como DGs de herança
Autossômica Recessiva {% cite ferreira2021 %}.

## Como a era da multi-ômica pode revolucionar o diagnóstico dos Erros Inatos do Metabolismo?

Por muito tempo, antes da popularização do sequenciamento de nova geração
(do Inglês, *Next Generation Sequencing*), a maior parte dos EIMs diagnosticados
era por meio de exames bioquímicos e enzimáticos, os quais dosavam
biomarcadores e atividade enzimática, respectivamente, para as doenças
metabólicas que eram bem conhecidas. Talvez possamos dizer que esse foi o
grupo de DGs que primeiro fez uso da metabolômica, ao contrário das demais,
que antes dos exames citogenéticos e moleculares não podiam ser confirmadas
para além da clínica.

Hoje, sobretudo impulsionados pela popularização da genômica, estamos
avançando para a multi-ômica, que é o estudo translacional que combina o
estudo do DNA aos estudos do RNA e também das proteínas e dos metabólitos.
Especialmente para os EIMs, a combinação dos diferentes estudos moleculares e
bioquímicos é extremamente promissora, porque se espera que, ao combinar as
diferentes frentes de análise,  possamos ter diagnósticos mais rápidos e
precisos. Vamos a um exemplo prático: imagine que, para um determinado EIM,
variantes patogênicas bialélicas (em ambas as cópias dos mesmo gene) sejam
necessárias para o diagnóstico da DG. Um paciente, suspeito desse EIM,
poderia, por exemplo, realizar um sequenciamento apenas dos exons dos genes
(exoma) e receber um laudo descrevendo uma variante patogênica e outra
variante de significado incerto no gene de interesse, o que não é o
suficiente para o estabelecimento do diagnóstico. Assim, uma avaliação da
expressão do gene de interesse, por quantificação do mRNA poderia ser
realizada, fornecendo mais uma pista da não funcionalidade do gene. Somado a
isso, a quantificação de algum metabólito bem como da atividade enzimática
da enzima codificada pelo gene adicionariam mais uma camada na abordagem
multi-ômica. Os resultados de todas metodologias combinadas, poderiam, de fato
levar ao fechamento do diagnóstico desta DG hipotética. Estudos recentes têm
investigado e demonstrado o potencial diagnóstico de se realizar essa
abordagens metodológicas concomitantemente na investigação diagnóstica
(personalizada) de indivíduos com suspeitas de DGs associadas a EIM {% cite stenton2020 %}.

Um outro exemplo enriquecedor para essa discussão seria o do caso de uma laudo
descrevendo apenas uma variante em um gene de interesse. Sabemos que a maioria
das mutações causadoras de doença encontram-se nas regiões codificantes dos
genes (região exônica), mas diversos outros tipos de mutação poderiam ser
perdidos por um exame como o exoma (que avaliam principalmente essas regiões),
como no caso de uma variante intrônica (região entre exons), ou mesmo em
outras regiões do genoma, como no caso de grandes inserções de elementos
móveis (muito frequentes em nosso genoma) em regiões que regulam o
funcionamento dos genes, algo que escapa às avaliações baseadas em exomas.
Nesse contexto, a integração com estratégias multi-ômicas permitiria
aumentar a chance de detectarmos algo que a análise isolada do DNA não é
capaz de encontrar.

Adicionalmente ao sequenciamento (e outras metodologias experimentais), as
análises computacionais (de bioinformática) entram em cena com algoritmos que
ajudam a identificar e interpretar variantes genéticas novas. Os chamados
preditores *in silico* são ferramentas de aprendizado de máquina (ou, do
inglês, *machine learning*) que, dada uma variante genética, fornecem uma
predição da chance desta variante ser danosa. Esses preditores são
empregados para o diagnóstico de qualquer condição genética, mas, por
funcionarem melhor para predição de perda de função, que é o mecanismo
principal dos EIMs, são especialmente importantes aqui. Isso é ainda mais
verdade pelo fato de existir uma enorme heterogeneidade alélica na maioria dos
genes ligados aos EIMs, o que leva a um grande número destas variantes novas
e, por isso, desconhecidas em termos de impacto, sendo descobertas ao longo do
tempo.


## Considerando que a maioria das doenças genéticas tratáveis são Erros Inatos do Metabolismo, como podemos utilizar a bioinformática para ampliar o horizonte terapêutico dessas condições?

Como já falamos, a maioria dos tratamentos aprovados hoje para doenças
genéticas encontra-se no campo daquelas associadas aos EIMs. Diferentemente de
muitas condições congênitas irreversíveis, boa parte dos EIMs não leva a
nenhuma doença inicialmente constitucional, e se manifesta temporalmente, em
resposta a estresses ambientais ou então de forma insidiosa, o que faz com que
haja uma janela terapêutica-temporal na qual uma possível correção da via
metabólica alterada poderia impedir o aparecimento ou a evolução da doença
e consequentemente a deterioração do organismo. Hoje, diversas doenças
metabólicas são tratadas com Terapia de Reposição Enzimática (TREs) e cada
vez mais vemos também novas terapias gênicas sendo testadas clinicamente e
liberadas para uso de pacientes com diferentes EIMs. Estes tratamentos, embora
representem uma conquista inédita na ciência, acabam sendo na prática caros
e custosos de se viabilizar, pois podem envolver cirurgias, transplantes e até
o uso de quimioterapia. Assim, o reposicionamento de fármacos que já existem
no mercado para outras condições tem se mostrado uma estratégia promissora
para a ampliação dos tratamentos possíveis para EIMs. Por exemplo, vemos
hoje pacientes beneficiados pelo uso da empagliflozina (um inibidor do
co-transportador sódio-glicose tipo 2 (SGLT2), originalmente aprovado para
diabetes tipo 2) no tratamento da Glicogenose Tipo Ib (GSD Ib). Nessa doença,
um erro enzimático leva ao acúmulo de glicogênio em diversas células,
inclusive nos neutrófilos, que são importantes células de defesa no corpo
humano. Essa medicação mostrou-se eficaz em recuperar o funcionamento celular
neutrofílico, aumentando a excreção renal da substância que, em acúmulo,
prejudica a ação dos neutrófilos. Esse é apenas um exemplo de diversas
medicações que estão sendo reposicionadas para o tratamento dos EIMs.

O reposicionamento de fármacos não é algo novo, e diversos efeitos
adicionais de drogas já conhecidas foram descobertos no passado, até mesmo
por acidentes de laboratório. Novamente a bioinformática entra nesse contexto
para acelerar e melhorar esse processo. Através, por exemplo, dos estudos de
docking molecular, do qual a biologia molecular estrutural é o ponto de
partida para se investigar possíveis interações entre moléculas-alvo e
fármacos já comercializados. Essa primeira investigação pode ser feita
computacionalmente, e moléculas candidatas são então testadas *in vivo* na
sequência.

Em síntese, a integração entre biologia molecular e bioinformática não
apenas acelera diagnósticos, mas também abre portas para novas terapias. Nos
próximos anos, poderemos ver novas descobertas nesse campo com o potencial de
transformar o cuidado de pacientes com DGs associadas aos EIMs, mudando
histórias e salvando vidas.
