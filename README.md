# Challenge Statement
You are tasked with developing an exchange portal where a user can trade a digital asset called TechTrek (TTK). It can be a web or mobile application.

 ## Application Requirements
| Task |  Level | Assignee  |  Completed? | During Hackathon?
| ---- | :----: | :-: | :---------: | :-:|
| Login - Frontend API Call | Basic | Keane | √ | √ | 
| Login - Self-Signed JWT | Basic | Wayne | √ | √ | 
| View User info | Basic | Keane | √ | √ | 
| View Current Asset Price | Basic | Yuan Long | √ | √ | 
| View Historical Asset Price | Basic | Sean | √ | √
| View Txn History | Basic | Alex | √ | √ | 
| View Cash & Asset Balance | Basic | Akshay | √ | √ | 
| Buy/Sell Asset | Basic | Alex | √ | √ | 
| Graph on Historical Asset Price | Advanced | - | x | -
| Set Target Price to automate buy/sell asset | Advanced | - | x | -
| Data Viz w/ Charts | Advanced | - | x | -
| Persistent Login | Advanced | - | x | -
| Password Salting | Advanced | - | x | -
| Host backend servers and/or databases | Technical Depth (Optional) | - | x | -
| Deploy to AWS/GCP | Technical Depth (Optional) | - |  x | -


## Sample Page

![Login Page](https://raw.githubusercontent.com/keanecodes/TT3_Group8/main/src/assets/sample-view-login.jpg)

## Additional Setups
Please make the .env file
```sh
cd TT3_Group8
touch .env
```
paste in these lines in the .env file
```sh
REACT_APP_API_KEY = "<API KEY FROM MS TEAMS CHAT>"
REACT_APP_API_BASE_URL = "http://localhost:8080/<API LINK IN DOCUMENTATION>"
```

## Run the project
```sh
npm i && npm start
```
