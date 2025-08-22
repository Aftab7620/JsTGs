public with sharing class accountWireClass {
   
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(){
        return[SELECT Name FROM Account];
    }
    }
   
