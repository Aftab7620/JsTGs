public with sharing class AccountDisplayClass {

    @AuraEnabled
   public static list<Account> getAccounts(){
       return [Select id,name,website,description from Account];
   }
}
    
