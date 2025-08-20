public with sharing class wireAccountClass {
   @AuraEnabled(cacheable=true)
    public static list<Account> getAccountsWire(){

        return[SELECT Id,Name,Phone,Description FROM Account];
    
   }
  
}