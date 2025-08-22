public with sharing class imperCallAccount {
   @AuraEnabled
  public static void insertAcc(String accName){
     
      Account a = new Account();
      a.name = accName;
      insert a;
  }
}