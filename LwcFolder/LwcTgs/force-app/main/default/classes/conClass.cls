public with sharing class conClass {
   @AuraEnabled(cacheable=true)
   public static list<Account> getAccounts(){
       return[SELECT Id,Name,Phone,Description FROM Account];
   }

}