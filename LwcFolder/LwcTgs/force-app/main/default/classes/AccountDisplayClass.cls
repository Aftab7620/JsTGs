public with sharing class AccountDisplayClass {

    @AuraEnabled
   public static list<Account> getAccounts(){
       return [Select id,name,phone,description from Account];
   }
}
    
