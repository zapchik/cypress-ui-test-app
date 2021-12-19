Enviroment:

OS - Ubuntu 20.04 (Oracle VM VirtualBox)

Browser - Google Chrome 96.0.4664.110 (64 bit)

Visual Studio Code 1.63.

Yarn 1.22.15

node.js 12.22.7

'Sign in' page

1. The website logo '[$]' must be present on 'Sign in' page 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for a logo

	ER: The logo is present 

2. The website logo 'Real World App' must be present on 'Sign in' page 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for a logo

	ER: The logo is present	

3. Website title h1 'Sign in' must be present on 'Sign in' page 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for a title h1

	ER: The title h1 is present

4. The page 'Sign in' of the website must contain a field for entering the username 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for the presence of a field for entering a username

	ER: Username field is present

5. The username field on the page 'Sign in' must be titled 'Username'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking the name of the field for entering the username

	ER: The username input field is titled 'Username'

6. The page 'Sign in' of the website must contain a field for entering a password 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for the presence of a field for entering a password

	ER: Password field is present

7. The password field on the page 'Sign in' must be titled 'Password'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking the name of the field for entering password

	ER: The password input field is titled 'Password'

8. The checkbox on the page 'Sign in' for storing user data must be present
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking the presence of a checkbox to remember user data

	ER: Checkbox for storing user data is present

9. The checkbox for storing user data on the page 'Sign in' must be called 'Remember me'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking the name of the checkbox to remember user data

	ER: The checkbox for storing user data is called 'Remember me'

10. The page 'Sign in' must have a button to confirm user data
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Check for the presence of a button to confirm user data

	ER: Button for confirming user data is present

11. The button for confirming user data on the page 'Sign in' should be called 'SIGN IN'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Check the title button to confirm user data

	ER: The button for confirming user data is called 'SIGN IN'

12. The page 'Sign in' must have a link for redirecting to the page 'Sign up'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for a link to redirect to the page 'Sign up'

	ER: Link for redirecting to the page 'Sign up' is present

13. The page 'Sign in' must have a link for redirecting to the page 'Sign up'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking for a link to redirect to the page 'Sign up'

	ER: Link for redirecting to the page 'Sign up' is present

14. The link on the page 'Sign in' for redirecting to the page 'Sign up' must be 
	called 'Don't have an account? Sign Up'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking the link name

	ER: The link is called 'Don't have an account? Sign Up'

15. The footer of the 'Sign in' page must contain a link to redirect to the website 'cypress.io'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Check if the footer of the 'Sign in' page contains a link to redirect to the 	      website 'cypress.io'

	ER: The footer of the 'Sign in' page contains a link to redirect to the website 		    'cypress.io'

16. The link for redirecting to the website 'cypress.io' in the footer of the 'Sign in' page 	should be called 'cypress'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking the link name

	ER: The link is called 'cypress'

17. The 'Sign in' page footer must contain text 'Built by'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Checking if the 'Sign in' page footer contains text 'Built by'

	ER: The 'Sign in' page footer contains text 'Built by'

18. If the fields 'Username' and 'Password' are not filled in, the user should not be logged in 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Leave the fields 'Username','Password' empty 
	     3.Click on [SIGN IN]

	ER: The user is not logged in.

19. If the fields are empty and a warning message 'Username is required' should appear
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signin
	     2.Leave the fields 'Username','Password'
	     3.Click on [SIGN IN]

	ER: The warning message 'Username is required' is appear.

20. If the 'Username' field is filled in, but the 'Password' field is empty,
	the user should not be logged in
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Username' field, leave the 'Password' field blank 
	     3.Click on [SIGN IN]

	ER: User is not logged in

21. If the field 'Username' is empty and the field 'Password' is filled, 
	the user should not be logged in
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Password' field, leave the 'Username' field blank 
	     3.Click on [SIGN IN]

	ER: User is not logged in

22. When filling in the fields 'Username' and 'Password' with data of an unregistered user,
 	the user should not be registered
 	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77Test
	Password - 22041977Test
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Username' and 'Password' fields
	     3.Click on [SIGN IN]

	ER: User is not logged in

23. When filling in the fields 'Username' and 'Password' with data of an unregistered user,
 	the waqrning message 'Username or Password is invalid' should appear
 	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77Test
	Password - 22041977Test
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Username' and 'Password' fields
	     3.Click on [SIGN IN]

	ER: The warning message 'Username or Password is invalid' is appear

24. When filling in the fields 'Username' and 'Password' with the data of the registered user, 
	the user must be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Username' and 'Password' fields
	     3.Click on [SIGN IN]

	ER: User is registered

25. When filling in the fields 'Username' and 'Password' with the data of the registered user, 
	the user must be redirected to the 'Get Started with Real World App' page
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Username' and 'Password' fields
	     3.Click on [SIGN IN]

	ER: User is redirected to the 'Get Started with Real World App' page

26. The 'Password' field when entering a password must be covered with a mask
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Fill in the 'Username' and 'Password'

	ER: The "Password" field is masked

27. Click on the link 'Don't have an account? Sign up' should redirect 
	the user to the 'Sign up' page
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Click on the link 'Don't have an account? Sign up'

	ER: The user is redirected to the 'Sign up' page

28. Click on the link 'Cypress' should redirect 
	the user to the cypress.io main page
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signin
	     2.Click on the link 'Cypress'

	ER: The user is redirected to the cypress.io main page


'Sign Up'page

1. The website logo '[$]' must be present on 'Sign up' page 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for a logo

	ER: The logo is present 

2. The website logo 'Real World App' must be present on 'Sign up' page 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for a logo

	ER: The logo is present	

3. Website title h1 'Sign up' must be present on 'Sign up' page 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for a title h1

	ER: The title h1 is present

4. The page 'Sign up' of the website must contain a field for entering the first name 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for the presence of a field for entering a first name

	ER: First name field is present

5. The page 'Sign up' of the website must contain a field for entering the last name 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for the presence of a field for entering a last name

	ER: Last name field is present

6. The page 'Sign up' of the website must contain a field for entering the username 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for the presence of a field for entering a username

	ER: Username field is present

7. The page 'Sign up' of the website must contain a field for entering the password 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for the presence of a field for entering a password

	ER: Password field is present

8. The page 'Sign up' of the website must contain a field for confirm password 
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for the presence of a field for confirm password

	ER: Confirm password field is present

9. The page 'Sign up' must have a button to confirm user data
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Check for the presence of a button to confirm user data

	ER: Button for confirming user data is present

10. The button for confirming user data on the page 'Sign up' should be called 'SIGN UP'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Check the title button to confirm user data

	ER: The button for confirming user data is called 'SIGN UP'

11. The page 'Sign up' must have a link for redirecting to the page 'Sign in'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking for a link to redirect to the page 'Sign in'

	ER: Link for redirecting to the page 'Sign in' is present

12. The link on the page 'Sign up' for redirecting to the page 'Sign in' must be 
	called 'Have an account? Sign In'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking the link name

	ER: The link is called 'Have an account? Sign In'

13. The footer of the 'Sign up' page must contain a link to redirect to the website 'cypress.io'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Check if the footer of the 'Sign in' page contains a link to redirect to the
	       website 'cypress.io'

	ER: The footer of the 'Sign up' page contains a link to redirect to the website 	
	    'cypress.io'

14. The link for redirecting to the website 'cypress.io' in the footer of the 'Sign up' page 
	should 	be called 'cypress'
	Preconditions: User must not be logged in
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking the link name

	ER: The link is called 'cypress'

15. The 'Sign up' page footer must contain text 'Built by'
	STR: 1.Go to the https://localhost:3000/signup
	     2.Checking if the 'Sign in' page footer contains text 'Built by'

	ER: The 'Sign up' page footer contains text 'Built by'

16.If fields 'First Name', 'Last Name', 'Username', 'Password', 'Confirm Password' are empty, 
	the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave fields blank
	     3.Click on [SIGN UP]

	ER: User not registered

17.If the field 'First Name' is empty, the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'First Name' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: User not registered

18.If the field 'First Name' is empty, a warning message 'First Name is required' 
	should appear
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'First Name' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: Warning message 'First Name is required' is appear

19.If the field 'Last Name' is empty, the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Last Name' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: User not registered

20.If the field 'Last Name' is empty, a warning message 'Last Name is required' 
	should appear
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Last Name' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: Warning message 'Last Name is required' is appear

21.If the field 'Username' is empty, the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Username' blank, fill in the rest with test data
	     3.Click on [SIGN UP]
	     
	ER: User not registered

22.If the field 'Username' is empty, a warning message 'Username is required' 
	should appear
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Username' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: Warning message 'Username is required' is appear

23.If the field 'Password' is empty, the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Password' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: User not registered

24.If the field 'Password' is empty, a warning message 'Enter your password' 
	should appear
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Password' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: Warning message 'Enter your password' is appear

25.If the field 'Confirm Password' is empty, the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Confirm Password' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: User not registered

26.If the field 'Confirm Password' is empty, a warning message 'Confirm your password' 
	should appear
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Leave the field 'Confirm Password' blank, fill in the rest with test data
	     3.Click on [SIGN UP]

	ER: Warning message 'Confirm your password' is appear

27.If the data in the 'Password' field does not match 
	the data in the 'Confirm Password' field, the user should not be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 11111111
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Fill in the fields with test data
	     3.Click on [SIGN UP]

	ER: User not registered

28.If the data in the 'Password' field does not match 
	the data in the 'Confirm Password' field, 
	the warning message 'Password does not match' should appear
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 11111111
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Fill in the fields with test data
	     3.Click on [SIGN UP]

	ER: Warning message 'Password does not match' is appear

29. The 'Password' field when entering a password must be covered with a mask
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Fill in the fields with test data

	ER: The "Password" field is masked

30. The 'Confirm Password' field when entering a password must be covered with a mask
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Fill in the fields with test data

	ER: The "Confirm Password" field is masked

31. When filling in the fields with test data, the user must be registered
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77Test
	Password - 22041977Test
	Confirm Password - 22041977Test
	First Name - EvgenTest
	Last Name - ToporovskyTest
	STR: 1.Go to the https://localhost:3000/signup
	     2.Fill in the fields with test data
	     3.Click on [SIGN UP]

	ER: User is registered

32. When filling in the fields with test data, the user must be redirected to the 'Sign In' page
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77Test
	Password - 22041977Test
	Confirm Password - 22041977Test
	First Name - EvgenTest
	Last Name - ToporovskyTest
	STR: 1.Go to the https://localhost:3000/signup
	     2.Fill in the fields with test data
	     3.Click on [SIGN UP]

	ER: User is redirected to the 'Sign In' page

33. Click on the link 'Have an account? Sign in' should redirect 
	the user to the 'Sign in' page
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Click on the link 'Have an account? Sign in'

	ER: The user is redirected to the 'Sign up' page

34. Click on the link 'Cypress' should redirect 
	the user to the cypress.io main page
	Preconditions: User must not be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000/signup
	     2.Click on the link 'Cypress'

	ER: The user is redirected to the cypress.io main page


	
'Instructions' page

1. The website logo 'Get Started with Real World App' must be present on 'Instructions' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a logo

	ER: Logo is present
	
2. There must be a picture on the 'Instructions' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a picture

	ER: Picture is present
	
3. There must be a block of text 'Real World App requires a Bank Account to perform transactions.' 
	on the 'Instructions' page
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a block of text 

	ER: Block of text is present
	
4. There must be a block of text 'Click Next to begin setup of your Bank Account.'on the 	
	'Instructions' page
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a block of text 

	ER: Block of text is present
	
5. The 'Instructions' page must contain a button to redirect to the 'Create Bank Account' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a redirect button 

	ER: Redirect button is present
	
6. The button on the 'Instructions' page for redirecting to the 'Create Bank Account' page must be 
	called 'NEXT' 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a button name

	ER: The redirect button is called 'NEXT' 
	
7. Click on the [NEXT] should redirect the user to the 'Create Bank Account' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Click on the [NEXT]

	ER: The user is redirected to the 'Create Bank Account' page 
	
		
'Create Bank Account' page 

1. The title 'Create Bank Account' must be present on 'Create Bank Account' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a title

	ER: Title is present
	
2. The page 'Create Bank Account' of the website must contain a field for entering the Bank Name 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for the presence of a field for entering a Bank Name

	ER: 'Bank Name' field is present
	
3. The page 'Create Bank Account' of the website must contain a field for entering the Routing 
	Number
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for the presence of a field for entering a Routing Number

	ER: 'Routing Number' field is present
	
4. The page 'Create Bank Account' of the website must contain a field for entering the Account 
	Number
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for the presence of a field for entering a Account Number

	ER: 'Account Number' field is present
	
5. The 'Create Bank Account' page must contain a button to save the user's bank details 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking for the presence of a button to save the user's bank details

	ER: The button for saving save the user's bank details is present
	
6. The button for saving the user's bank details must be named 'SAVE'
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Checking the name of the button to save the user's bank details 

	ER: The button to save the user's bank details named 'SAVE'
	
7. The button to save the user's bank details should save the entered data 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Last Name - Toporovsky
	STR: 1.Go to the https://localhost:3000
	     2.Entering test data
	     3.Click on [SAVE]

	ER: User bank data saved
	
8. Click on the [SAVE] should redirect the user to the 'Finished' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Entering test data
	     3.Click on [SAVE]

	ER: The user is redirected to the 'Finished' page 
	
9. If the field 'Bank Name' on the page 'Create Bank Account' is empty, the user's details should 
	not be saved 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Leave the field 'Bank Name' empty, fill the rest with test data 
	     3.Click on [SAVE]

	ER: User bank data not saved
	
10. If the field 'Bank Name' on the page 'Create Bank Account' is empty, 
	the warning message 'Enter a bank name' should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Leave the field 'Bank Name' empty, fill the rest with test data 
	     3.Click on [SAVE]

	ER: The warning message 'Enter a bank name' is appear
	
11. If If less than 5 characters are entered in the 'Bank Name' field, a warning message 'Must 
	contain at least 5 characters' should appear 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Pri
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Entering test data
	     3.Click on [SAVE]
	     
	ER: The warning message 'Must contain at least 5 characters' is appear
	
12. If the field 'Routing Number' on the page 'Create Bank Account' is empty, the user's details 
	should not be saved 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Leave the field 'Routing Number' empty, fill the rest with test data 
	     3.Click on [SAVE]

	ER: User bank data not saved
	
13. If the field 'Routing Number' on the page 'Create Bank Account' is empty, 
	the warning message 'Enter a valid bank routing number' should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Leave the field 'Routing Number' empty, fill the rest with test data 
	     3.Click on [SAVE]

	ER: The warning message 'Enter a valid bank routing number' is appear
	
14. If If less than 9 characters are entered in the 'Routing Number' field, a warning message 
	'Must 	contain a valid routing number' should appear 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 12345678
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Entering test data
	     3.Click on [SAVE]
	     
	ER: The warning message 'Must contain a valid routing number' is appear
	
15. If the field 'Account Number' on the page 'Create Bank Account' is empty, the user's details 
	should not be saved 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Leave the field 'Account Number' empty, fill the rest with test data 
	     3.Click on [SAVE]

	ER: User bank data not saved
	
16. If the field 'Account Number' on the page 'Create Bank Account' is empty, 
	the warning message 'Enter a valid bank account number' should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Leave the field 'Account Number' empty, fill the rest with test data 
	     3.Click on [SAVE]

	ER: The warning message 'Enter a valid bank account number' is appear
	
17. If If less than 9 characters are entered in the 'Account Number' field, a warning message 
	'Must contain at least 9 digits' should appear 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 12345678
	STR: 1.Go to the https://localhost:3000
	     2.Entering test data
	     3.Click on [SAVE]
	     
	ER: The warning message 'Must contain at least 9 digits' is appear
	
18. If the fields 'Bank Name', 'Routing Number', 'Account Number' are filled in, the user data 
	must be saved
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Entering test data
	     3.Click on [SAVE]
	     
	ER: User data is saved
	
	
'Finished' page

1. The title 'Finished' must be present on 'Finished' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a title

	ER: title is present
	
2. There must be a picture on the 'Finished' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a picture

	ER: Picture is present
	
3. There must be a block of text 'You're all set!' on the 'Finished' page
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a block of text 

	ER: Block of text is present
	
4. There must be a block of text 'We're excited to have you aboard the Real World App!'on the 
	'Finished' page
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a block of text 

	ER: Block of text is present
	
5. The 'Finished' page must contain a button to redirect to the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a redirect button 

	ER: Redirect button is present
	
6. The button on the 'Finished' page for redirecting to the 'Home' page must be called 'DONE' 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a button name

	ER: The redirect button is called 'DONE' 
	
7. Click on the [DONE] should redirect the user to the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Click on the [DONE]

	ER: The user is redirected to the 'Home' page 
	
'Home' page

1. The website logo '[$]' must be present on 'Home' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a logo

	ER: The logo is present 

2. The website logo 'Real World App' must be present on 'Home' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a logo
	     
	ER: The logo is present 
	
3. The 'EVERYONE' tab must be present on the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'EVERYONE' tab
	     
	ER: The 'EVERYONE' tab is present  
	
4. The 'FRIENDS' tab must be present on the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'FRIENDS' tab
	     
	ER: The 'FRIENDS' tab is present  
	
5. The 'MINE' tab must be present on the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'MINE' tab
	     
	ER: The 'MINE' tab is present 
	
6. The [NEW] must be present on the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a [NEW]
	     
	ER: The [NEW] is present  
	
7. The 'Notifications' icon must be present on the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'Notifications' icon
	     
	ER: The 'Notifications' icon is present
	
8. The hamburger menu must be present on the 'Home' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a hamburger menu
	     
	ER: The hamburger menu is present
	
9. Click on the hamburger menu should open the 'Profile' tab  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Click on the hamburger menu
	     
	ER: 'Profile' tab open
	
'Profile' tab

1. The 'Profile' tab should contain user's first and last name 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a user's first and last name 

	ER: The user's first and last name is present
	
2. The 'Profile' tab should contain user's username 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a user's username 

	ER: The user's username  is present
	
3. The 'Profile' tab should contain user balance amount 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a user balance amount 

	ER: The user balance amount is present

4. The 'Profile' tab should contain 'Home' icon
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'Home' icon

	ER: The 'Home' icon is present 
	
5. The 'Profile' tab should contain 'My Account' icon
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'My Account' icon

	ER: The 'My Account' icon is present 
	
6. The 'Profile' tab should contain 'Bank Accounts' icon
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'Bank Accounts' icon

	ER: The 'Bank Accounts' icon is present 
	
7. The 'Profile' tab should contain 'Notifications' icon
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'Notifications' icon

	ER: The 'Notifications' icon is present 
	
8. The 'Profile' tab should contain 'Logout' icon
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	STR: 1.Go to the https://localhost:3000
	     2.Checking for a 'Logout' icon

	ER: The 'Logout' icon is present
	
'My Account' page

1. Click on 'My Account' icon should open the 'User Settings' page
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000
	     2.Click on 'My Account' icon

	ER: The 'User Settings' page open
	
2. The title 'User Settings' must be present on 'User Settings' page 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking for a title

	ER: title is present
	
3. The 'User Settings' page must contain a field for entering the first name 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking for the presence of a field for entering a first name

	ER: First name field is present

4. The 'User Settings' page must contain a field for entering the last name 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking for the presence of a field for entering a last name

	ER: Last name field is present
	
5. The 'User Settings' page must contain a field for entering the e-mail address
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking for the presence of a field for entering a e-mail address

	ER: e-mail address field is present

6. The 'User Settings' page must contain a field for entering the phone number 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking for the presence of a field for entering a phone number

	ER: phone number field is present
	
7. The 'User Settings' page must contain a button for saving user settings 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking for the presence of a button for saving user settings

	ER: Button for saving user settings field is present
	
8. The button for saving the user settings must be named 'SAVE'
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Checking the name of the button to save the user settings

	ER: The button to save the user settings named 'SAVE'
	
9. The button to save the user settings should save the entered data 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Entering test data
	     3.Click on [SAVE]

	ER: User settings saved
	
10.If fields 'First Name', 'Last Name', 'E-mail', 'Phone number' are empty, 
	the user settings should not be saved
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave fields blank
	     3.Click on [SAVE]

	ER: User settings not saved 

11.If the field 'First Name' is empty, the user settings should not be saved
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'First Name' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: User settings not saved

12.If the field 'First Name' is empty, a warning message 'Enter a first name' 
	should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'First Name' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: Warning message 'Enter a first name' is appear

13.If the field 'Last Name' is empty, the user settings should not be saved
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'Last Name' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: User settings not saved

14.If the field 'Last Name' is empty, a warning message 'Enter a last name' 
	should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'Last Name' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: Warning message 'Enter a last name' is appear
	
15.If the field 'E-mail' is empty, the user settings should not be saved
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'E-mail' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: User settings not saved

16.If the field 'E-mail' is empty, a warning message 'Enter an email address' 
	should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'E-mail' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: Warning message 'Enter an email address' is appear
	
17.If the email address does not match the pattern (name@domain.etc), a warning message 'Must 
	contain a valid email address' should appear  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - mymeta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Entering test data
	     3.Click on [SAVE]

	ER: Warning message 'Must contain a valid email address' is appear
	
18.If the field 'Phone number' is empty, the user settings should not be saved
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'Phone number' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: User settings not saved

19.If the field 'Phone number' is empty, a warning message 'Enter a phone number' 
	should appear
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Leave the field 'Phone number' blank, fill in the rest with test data
	     3.Click on [SAVE]

	ER: Warning message 'Enter a phone number' is appear
	
20.If the entered phone number contains less than 6 characters, a warning message 'Phone number 
	is not valid' should appear 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 12345
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Entering test data
	     3.Click on [SAVE]

	ER: Warning message 'Phone number is not valid' is appear
	
21.If all fields are filled in with valid data, user settings must be saved  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/user/settings
	     2.Entering test data
	     3.Click on [SAVE]

	ER: User settings is saved
	
'Bank Accounts' page

1. Click on 'Bank Accounts' icon should open the 'Bank Accounts' page
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000
	     2.Click on 'Bank Accounts icon

	ER: The 'Bank Accounts' page open
	
2. The 'Bank Accounts' page should contain a list of user banks 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Checking for a list of banks

	ER: The list of banks is on the page 
	
3. The 'Bank Accounts' page should contain a button to delete a bank 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Checking for a button to delete a bank

	ER: The button to delete a bank is on the page
	
4. The button for deleting a bank should be called 'DELETE'
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Checking for a button to delete a bank name

	ER: The button to delete a bank is called 'DELETE'
	
5. The [DELETE] should delete the existing user bank 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Click on the [DELETE]

	ER: User bank deleted 
	
6. The 'Bank Accounts' page should contain a button to create a bank 
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Checking for a button to create a bank

	ER: The button to create a bank is on the page
	
7. The button for creating a bank should be called 'CREATE'
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Checking for a button to create a bank name

	ER: The button to create a bank is called 'CREATE'
	
8. The [CREATE] should open a form to create a new user bank  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000/bankaccounts
	     2.Click on the [CREATE]

	ER: The form for creating a new user bank is open 
	
9. The form for creating a new user bank is completely identical to the  form on 'Create Bank 
	Account' page. Test cases written for the 'Create Bank Account' page will be relevant for 
	this form as well. 
	
'Notificatios' page

1. Click on 'Notificatios' icon should open 'Notificatios' page  
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000
	     2.Click on the 'Notificatios' icon

	ER: The 'Notificatios' page is open 
	
'Logout' icon

1. Click on 'Logout' icon should log out the user   
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000
	     2.Click on the 'Logout' icon

	ER: User is logged out  
	
2. Click on 'Logout' icon should redirect the user to the 'Sign in' page   
	Preconditions: User must be logged in
	Test data:
	Username - Evgen77
	Password - 22041977
	Confirm Password - 22041977
	First Name - Evgen
	Last Name - Toporovsky
	Bank Name - Privat
	Routing Number - 123456789
	Account Number - 123456789
	Phone number - 123456
	E-mail - my@meta.ua
	STR: 1.Go to the https://localhost:3000
	     2.Click on the 'Logout' icon

	ER: The user is redirected to the 'Sign in' page   











	


	





	







	
