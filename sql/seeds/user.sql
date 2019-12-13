USE bank;

INSERT INTO users (firstName, lastName, username, pwd, email, income, updatedAt, createdAt)
VALUES  ("Michael", "Scott", "mscott", "abc", "a@gmail.com", 0, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657"), 
        ("Dwight", "Schrute" , "dschrute", "abc",  "b@gmail.com", 1000, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657"),
        ("Pam", "Beesly","pbeesly", "abc", "c@gmail.com", 2500, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657"), 
        ("Jim", "Halpert", "jhalpert", "abc", "d@gmail.com", 1600, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657");
