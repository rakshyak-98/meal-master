# meal-master - (Health Diet Online Search)
[meal master health website](https://my-mealmaster.netlify.app/)
- __Decription__ : According to a medical study, persons who eat healthy meals and build their immune system have a better chance of fending off free radicals and avoiding sickness. Many diseases are caused by bad dietary habits. Fast food has become a significant part of people's daily routines in the modern era since it is so easily accessible. However, eating fast food regularly can lead to heart attacks and diabetes. Diets that are more nutritious help us maintain our health and avoid various ailments. Individuals with different medical profiles, cultural backgrounds, and nutrient requirements have unique requirements for better recovery from diseases or surgery. Designing and implementing  a healthy diet recommendation system is based on web data mining which is the application of data mining techniques that help us to determine patterns from the web.


## Stack
1. JS
2. CSS
3. HTML
4. JINJA js (templating)
5. MongoDB
6. NodeJs

## Project configuration
1. Install required packages: `npm i`
2. Devlopment server: `npm run dev`
3. Setup Required Environment variable for project:
    get required username and password to connect to your mongodb database.
    - create .env file in the root directory of the project.
    - copy paste the environment variables in the __.env__ file
        - MONGO_USERNAME: {YOUR CLUSTER USERNAME}
        - MONGO_PASSWORD: {YOUR CLUSTER PASSWORD}
        - MONGO_DB: {YOUR CLUSTER DATABASE NAME}
        - MONGO_CLUSTER_STRING: {YOUR COMPLETE CLUSTER NAME}
    - replace {...} values. Example {YOUR CLUSTER USERNAME} replace it with cluster0.

## Project GIF

## Preview
![home page](./public/image/meal-master-small.jpg)


# ref doc
[jwttoken](https://www.npmjs.com/package/jsonwebtoken)
