USE bank;

INSERT INTO users (firstName, lastName, username, pwd, email, income, updatedAt, createdAt)
VALUES  ("Michael", "Scott", "mscott", "abc", "a@gmail.com", 0, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657"), 
        ("Dwight", "Schrute" , "dschrute", "abc",  "b@gmail.com", 1000, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657"),
        ("Pam", "Beesly","pbeesly", "abc", "c@gmail.com", 2500, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657"), 
        ("Jim", "Halpert", "jhalpert", "abc", "d@gmail.com", 1600, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657");

USE bank;

INSERT INTO categories (name, createdAt, updatedAt, UserId)
VALUES  ("Shopping", "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Bills & Utilities", "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Dining", "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1);

USE bank;

INSERT INTO GOALS (amount, createdAt, updatedAt, CategoryId)
VALUES  (7200, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),     -- Michael Ring Savings
        (300, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),      -- Michael Reg Savings
        (500, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),      -- Michael Checking
        (4000, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),     -- Dwight Savings
        (8000, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),     -- Dwight Checking
        (2500, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),    -- Pam Savings
        (1500, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),     -- Pam Checking
        (3000, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),     -- Jim Savings
        (800, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),      -- Jim  Honeymoon Savings
        (1600, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3);     -- Jim Checking

USE bank;

INSERT INTO transactions (description, amount, createdAt, updatedAt, CategoryId)
VALUES  ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),
        ("Transfer from Checking Account",600,"2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),

        ("Transfer from Checking", 100, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",2),
        ("Transfer from Checking", 100, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),
        ("Transfer from Checking", 100, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1),

        ("Transfer to Savings", -600, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),
        ("Transfer to Savings", -100, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",3),
        ("NASB Mortgage", -2300, "2019-12-10T05:22:35.657", "2019-12-10T05:22:35.657",1)