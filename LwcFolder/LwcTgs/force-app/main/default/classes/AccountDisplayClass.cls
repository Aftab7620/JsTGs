public with sharing class AccountDisplayClass {

    @AuraEnabled
   public static list<Account> getAccounts(){
       return [Select id,name,phone,description from Account];
   }

  @AuraEnabled
public static void delAccount(Id accId) {
    delete [SELECT Id FROM Account WHERE Id = :accId];
}

}
    
