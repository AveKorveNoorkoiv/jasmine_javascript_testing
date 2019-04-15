//Uue kirje loomine muutujate defineerimiseks, et ülejäänud kood saaks/teaks seda kasutada
describe('Address Book', function () {
    let addressBook = new AddressBook(),
        thisContact = new Contact();

    //funktsioon defineerib kordused ümber, vältimaks pidevat enda kordamist
    beforeEach(function () {
        let addressBook = new AddressBook(),
            thisContact = new Contact();
    });

    it('should be able to add a contact', function () {

        //addContact meetodi lisamine addressBooki
        addressBook.addContact(thisContact);

        //kontrollimine, et thisContact antakse edasi
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    //uue spetsif lisamine kirjele
    it('should be able to delete a contact', function () {

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

    //uue spetsif lisamine kirjele, funktsiooniga test saaks läbitud
describe('Async Address Book', function () {
    let addressBook = new AddressBook();
    //tagasikutsel märgitakse done, süsteem teab, et võib jätkata
    beforeEach(function (done) {
        addressBook.getInitialContacts(function () {
            done();
        });
    });
    //init süst, et on done
    it('should grab initial contacts', function (done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});