# Challenge Statement
You are tasked with developing an exchange portal where a user can trade a digital asset called TechTrek (TTK). It can be a web or mobile application.

 ## Application Requirements
| Task |  Level | Assignee  |  Completed? | During Hackathon?
| ---- | :----: | :-: | :---------: | :-:|
| Login - Frontend API Call | Basic | Keane | √ | √ | 
| Login - JWT Session Storage | Basic | Wayne | √ | √ | 
| View User info | Basic | Keane | √ | √ | 
| View Current Asset Price | Basic | Yuan Long | √ | √ | 
| View Historical Asset Price | Basic | Sean | √ | √
| View Txn History | Basic | Alex | √ | √ | 
| Buy/Sell Asset | Basic | Alex | √ | √ | 
| View Cash & Asset Balance | Basic | Akshay | √ | √ | 
| Graph on Historical Asset Price | Advanced | - | x | -
| Set Target Price to automate buy/sell asset | Advanced | - | x | -
| Data Viz w/ Charts | Advanced | - | x | -
| Persistent Login | Advanced | - | x | -
| Password Salting | Advanced | - | x | -
| Host backend servers and/or databases | Technical Depth (Optional) | - | x | -
| Deploy to AWS/GCP | Technical Depth (Optional) | - |  x | -

Note: If there's any miss, please feel free to update.

## Sample Page

![Login Page](https://raw.githubusercontent.com/keanecodes/TT3_Group8/main/src/assets/sample-view-login.jpg)

**Design Considerations**  
* Adhere to DBS Canopy Design fundamentals
* Design assets from DBS Canopy Design and unDraw

**Implementation Considerations**  
* `.env` file to store APIs
* `routes.js` to dynamically create Routes and SideBar ListItem
* `antd` Framework (from Ant Financial) for its some similarity with DBS Canopy Deisgn
* `recoil` for simpler central data management (as compared to `redux`)

(to be updated if any)

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

## The sad stuffs happened
* API calls with CORS and other auth issues
* Timestamp conversions issues
* Little standardisation possible with time constraint
* Varying code styles
* Misunderstood requirement for backened

(to be updated if any)

## The great stuffs happened
* Teammates know the same framework and tools
* Teammates actively involved in various tasks 
* Open communication on issues
* Help from teammates is often just a sharescreen away
* Great ICs to lighten the mood

(to be updated if any)
