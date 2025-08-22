public with sharing class accountWireClass {
   
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(String ip){
        String acNme='%'+ip+'%';
        return[SELECT Id, Name,Description FROM Account WHERE Name LIKE :acNme];
    }
    }
   
