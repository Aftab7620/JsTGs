public with sharing class AccountConClass {
    @AuraEnabled
    public static void insertAcc(String accName,String Fname,String Lname){
       
        Account a = new Account();
        a.name = accName;
        insert a;

        Contact c = new Contact();
        c.FirstName=Fname;
        c.LastName=Lname;
        c.AccountId=a.id;
        insert c;


    }

    
}