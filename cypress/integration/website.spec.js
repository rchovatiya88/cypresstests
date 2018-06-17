describe('Go To Home page', function () {
    it('Go to website ', function () { 
        cy.visit('https://www.artsyjewels.com')
        cy.title().should('include', 'Artsyjewels - Premier Jewelry Marketplace');
        
    });

    it('Go to on Sale Page and Add to Cart', function () {
        cy.get('#SiteNav > li:nth-child(10) > a').click();
        cy.get('#Collection > div > div:nth-child(1) > div > a > div.h4.grid-view-item__title').click();
        cy.get('#AddToCartText-product-template').click();
        cy.get('#shopify-section-cart-template > div > form > footer > div > div.grid__item.text-right.small--text-center.medium-up--one-half > input.btn.btn--small-wide').click();
    });
    // it('Check out as Test User', function (){
    //     cy.get('#checkout_email').type('ronchoqa@gmail.com');
    //     cy.get('#checkout_shipping_address_first_name').type('Ronak');
    //     cy.get('#checkout_shipping_address_last_name').type('Chovatiya');
    //     cy.get('#checkout_shipping_address_company').type('javascriptfortesters');
    //     cy.get('#checkout_shipping_address_address1').type('1234 Main St');
    //     cy.get('#checkout_shipping_address_address1').type('{downarrow}');
    //     cy.get('#checkout_shipping_address_address1').type('{enter}');
    //     cy.pause(12000);
    //     cy.get('#checkout_shipping_address_city').type('Jersey City');
    //     cy.get('#checkout_shipping_address_province > option:nth-child(36)').click();
    //     cy.get('#checkout_shipping_address_zip').type('07307');
    //     cy.get('.step__footer__continue-btn').submit('{force: true}');
    // });

});