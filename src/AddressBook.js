//Konstruktor-funktsioon AddressBook varasema vea parandamiseks
function AddressBook() {
    //Uue omaduse lisamine. Tegemist on massiiviga
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
    let self = this;
//Et muuta getInitalContacts funktsioon asünkroonseks
    setTimeout(function () {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}
//Funktsiooni addContact lisamine. Aktsepteerib contacti uue parameetrina ja lükkab
AddressBook.prototype.addContact = function(contact) {
    //sellega contacti AddressBooki
    this.contacts.push(contact);
}

//Funktsioon, mis aktsepteerib indeksit ning
AddressBook.prototype.getContact = function (index) {
    //tagastab massiivi elemendi selle indeksiga
    return this.contacts[index];
}
//Massiivist elemendi eemaldamiseks kasutatakse splice-meetodit
AddressBook.prototype.deleteContact = function(index) {
    //ja contact liigub AddressBooki
    return this.splice(index, 1);
}