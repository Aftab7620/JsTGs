public with sharing class wireAccountClass {
   @AuraEnabled(cacheable=true)
    public static list<Account> getAccountsWire(){

        return[SELECT Id,Name,Phone,Description FROM Account];
    
   }

   
   @AuraEnabled
  public static void deleteAccount(Id accId){
     
     delete [SELECT Id FROM Account WHERE Id = :accId];
  
}
}