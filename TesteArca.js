describe('Test - First Challenge', () => {

    it('Open website', () => {

        //opens website

        cy.visit('https://demodirectory.com.br');

        //assert url

        cy.url().should("include", "demodirectory");

    })

    it('Finds and clicks on Administrador', () => {

        //finds and clicks on Papéis do Site

        cy.contains('Papéis do Site').click();
       

        //finds and clicks on Administrador

        cy.contains('Administrador').click();

    })

    it('Clears out text and logs in', () => {

        //clears the username field and inserts a new value

        cy.get('#username').clear().type('sitemgr@demodirectory.com');
        

        //clears the password field and inserts a new value

        cy.get('#password').clear().type('abc123');

        //clicks the login button

        cy.contains('Entre').click();

    })

    it('Opens sidebar, selects conteúdo, and clicks on anúncios', () => {

        //opens sidebar

        cy.get('button.toggle-sidebar').click();
        

        //opens menu Conteúdo

        cy.get('#tour-content-menu').click();

        //clicks on anúncios

        cy.contains('Anúncios').click();

    })

    it('Adds new listing', () => {

        //clicks the login button

        cy.contains('Entre').click();

        //clicks on Adicionar Anúncio

        cy.contains('Adicionar anúncio').click();

        //opens modelo de anúncio table and selects empresa

        cy.get('#listingTemplate').select('Empresa');

        //fills in name field

        cy.get('#name').type('Teste Arca - Lucas Vinagre');

        //clicks Navegar Button

        cy.get('#browse-categories').click();

        //selects category

        cy.get('.addCategory').eq(1).click();

        //clicks submit button

        cy.contains('Salvar alterações').click();

    })


})