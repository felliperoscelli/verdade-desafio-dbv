# Verdade ou Desafio - Desbravadores

Um jogo simples e responsivo de Verdade ou Desafio para as classes dos Desbravadores.

## 📋 Características

- ✅ Totalmente em HTML, CSS e JavaScript puro (sem dependências)
- 📱 Otimizado para smartphones
- 🎲 Sorteio aleatório de perguntas e desafios
- 🏷️ Estrutura preparada para 12 categorias de classes
- 📊 Exibe contagem de itens por tipo
- ⚡ Muito leve e rápido

## 📁 Estrutura

```
verdade-desafio-simples/
├── index.html      # Arquivo principal
├── style.css       # Estilos (design minimalista moderno)
├── data.js         # Dados das categorias
├── script.js       # Lógica do jogo
└── README.md       # Este arquivo
```

## 🚀 Como usar

### Localmente
1. Abra o arquivo `index.html` em um navegador
2. Pronto! O jogo está funcionando

### No GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload destes arquivos
3. Vá em Settings → Pages
4. Selecione `main` como branch e `/root` como pasta
5. Seu site estará disponível em: `https://seu-usuario.github.io/seu-repositorio/`

## 📝 Dados do Jogo

Os dados estão em `data.js`:
- **Classe Amigo**: 140 Verdades + 83 Desafios ✅
- **Outras classes**: Estrutura preparada (adicione os dados conforme necessário)

## 🎨 Design

- **Paleta**: Azul profundo (#0052cc) + Verde suave (#6ba82f) + Neutros
- **Tipografia**: Inter (corpo) + Poppins (títulos/botões)
- **Responsivo**: Funciona perfeitamente em todos os tamanhos de tela

## 🔧 Personalizações

### Adicionar nova categoria
1. Abra `data.js`
2. Preencha o array de `verdades` e `desafios` para a categoria desejada
3. Pronto!

### Mudar cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-blue: #0052cc;
    --accent-green: #6ba82f;
    /* ... outras cores ... */
}
```

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS, Android, Windows, macOS
- ✅ Todos os tamanhos de tela

## 📄 Licença

Livre para usar e modificar conforme necessário.

---

**Desenvolvido para o Clube de Desbravadores**
