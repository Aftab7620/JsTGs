public with sharing class imperativeContactClass {
  @AuraEnabled
  public static void insertContact(String Fname,String Lname,String phone){
     
      Contact c = new Contact();
      c.FirstName=Fname;
      c.LastName=Lname;
      c.Phone=phone;
      insert c;
    }

}