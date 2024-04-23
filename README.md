# DaybyDay - Instalation Guide
# Avisos

> [!IMPORTANT]  
> Por favor, Não fazer commit direto na branch main.
> Abaixo terá um padrão de commits semânticos para melhor identificação do que foi realizado.

## Qualidade de vida:
* **Live Server:** Vá para a aba de extensões do seu VS Code, pesquise por Live Server e instale a versão 5.7.9 do Live Server.
* **Prettier:** Ainda na aba de extensões, pesquise por Prettier e instale o Prettier - Code Formatter. Ele ajudará você a formatar seu código. Basta pressionar shift + alt + f e selecionar o Prettier.

## Passos de Instalação: 

1. **Clone o repositorio:**
```bash 
git clone Template https://github.com/strawberryNypx/DaybyDay.git 
```
2. **Instalar as depêndencias:**
```bash
 npm install   
```
3. **Inicie o servidor de desenvolvimento**:
```bash
npx live-server
```
este comando irá iniciar o servidor de desenvolvimento local usando o Vite. Agora você pode acessar seu aplicativo em  `http://localhost:5500`
```bash
  ➜  Local: http://localhost:5500
```
## Tutorial de git iniciais:
1. **Adição das alteraões realizadas:**
  ```bash
  git add .
  ```
2. **Checar se as alterações foram realizada:**
  ```bash
  git status
  ```
3. **Salvar as alterações feitas no seu repositório Git:**
  ```bash
  git commit -m "sua mensagem de commit aqui"
  ```
 * **Obs:** Mais abaixo existe uma sessão de commits semânticos que serão utilizados.
4. **Envio do conteúdo para o repositório:**
  ```bash
  git  push origin nome-da-branch
  ```
5. **Para acessar as e navegar entre as branches:**
  ```bash
  git checkout nome_da_branch -> para trocar de branch.
  git checkout -b nome_da_branch  -> criação de uma nova branch.
  ```
## Padrão de commits a serem seguidos

- **Feat:** Adição de uma nova funcionalidade.
    - **Exemplo**
        ```bash
            git commit -m "Feat: Creating login page"
        ```
- **Fix:** Correção de lógica de alguma funcionalidade, testes e similares.
    - **Exemplo:**   
       ```bash
            git commit -m "Fix: Fixing login authorization"
        ```      
- **Refactor:** Refatoração e/ou otmização do código, corrigir identação etc.
    - **Exemplo:**   
       ```bash
            git commit -m "Refactor: Refactor API archive"
        ```      
- **Style:** Adição e modificação de estilização(APENAS ESTILIZAÇÃO).
    - **Exemplo:**   
       ```bash
            git commit -m "Style: Add Navbar color"
            git commit -m "Style: Change Navabar Color"
        ```    
- **Chore:** Commits do tipo chore indicam atualizações de tarefas de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código).
    - **Exemplo:**   
       ```bash
            git commit -m "Chore: Configure vercel.json File"
            
        ```    
- **Docs:** Adição de documentação no projeto
    - **Exemplo:**   
       ```bash
            git commit -m "Docs: add documentation"            
        ``` 

## Branches 
- **main:** -> Branch Principal.
- **Template** -> Branch de desenvolvimento (basicamente uma main2).
- **anaclara** -> Branch designada para a desenvolvedora Ana Clara.
- **breno** -> Branch designada para o desenvolvedor Breno Leal.
- **clara** -> Branch designada para a desenvolvedora Clara Ferraz.
- **rafael** -> Branch designada para o desenvolvedor Rafael Gomes.
- **santhiago** -> Branch designada para o desenvolvedor Santhiago Santos.
- **wesley** -> Branch designada para o desenvolvedor Wesley Felipe.

