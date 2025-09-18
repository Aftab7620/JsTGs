public with sharing class ContactSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContacts(String searchKey) {
        if (String.isBlank(searchKey)) {
            return new List<Contact>();
        }
        return [
            SELECT Id, Name, Email, Phone, Account.Name
            FROM Contact
            WHERE Name LIKE :('%' + searchKey + '%')
            LIMIT 50
        ];
    }
}
