# js-lifecycle

- Entendendo as converções implícitas e explicitas
- Implmentando o método toStrig e valueOf em objetos
- Implemetando o Symbol.toPrimitive, que prevalece sobre o toSring e valueOf, disponível a parir do ES2015
- Analizando prototypes

- A Palavra chave jumens??
- detalhes do ecma script modules e como testar

- Mantendo estados entre instâncias, evistando problemas ao repassar contexto para outras instâncias.
- Uso de .call e .apply para implentar o contexto de uma chamada.

- ES Modules: nao sao apenas os metodos import e export, a forma como eles sao carregados, gestao e lógicas de importação mudou completamente.
- no NodeJS a partir da versao 14.3 já é possivel usar ESModules sem warings
  -- nao temos mais require, require.resolve, instancia module.exports, sem acesso a variáveis globais **filename, **dirname, nao podemos importar arquivos json diretamente de uma forma definitiva, (a maioria das features nesse momento sao habilitada a partir de flags experimentais)
- Api de Localização: Internatinalization API

draftlog - ferramenta bem útil para criar programas de linha de comanando
chalk - ferramenta para imprimir os dados com cores bonitas
chalkTable - para imprimir tabelas no terminal, e atualiza-la com o draftlog

- Testado o projeto ES Modules usando o mocka, validar coberura de codigo no ES Modules

- instanlando o reify para converter ESModules para commumJs para o nyc conseguir entender
