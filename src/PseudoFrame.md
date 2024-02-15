# YouTube Clone Framework 

## Home Route
- The landing page where either popular videos or predefined (by users search history) set of videos are displayed

- Search Bar will be provided at the top of the landing page to search for further videos by the user

## Search Bar
- A search bar that uses the users input to find relevant videos based on the query provided using API Call 

- When search bar is clicked send query to search route 


## Search Route
- Once route is achieved it will take user to the results of the search query 

- Results are going to be displayed in our VideoList component 


## VideoList
- When a video is clicked, triggering an onClick event which takes us through the Video Route

## Video Route, Video Player
- Video at the specified .id param will be played implementing the Video Player Component also it will display its details below the video 