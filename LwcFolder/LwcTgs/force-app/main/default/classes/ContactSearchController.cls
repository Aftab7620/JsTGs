public with sharing class ContactSearchController {
   
    @AuraEnabled(cacheable=true)
    public static list<Contact> searchForContacts(String searchText){

        searchText = '%' + searchText + '%';
        List<Contact> listContact =[SELECT Name, Phone, Email, Title, Id FROM Contact WHERE Name LIKE :searchText]; 
        
        return listContact;
       
    }
}