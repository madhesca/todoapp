// //25
// // DL from github the view of the app
// // set up express
// // app.post to get the data from form
// // and view to the console the inputed value   in the form
// // but first set up the boiler plate to make it work

// //26
// install nodemon
// leverage package.json scripts to npm run watch

//27
//note

//28 connect to mongodb
//in app.post set up db to store val in items collection
//db.collection
//insert1 , with 2 arguments, 1st is to store object, 2nd is a func that send  thanks for submitting
// up in the code, declare db variable and set up db variable with 3 argumanets

//install mongodb npm
//import mongo db
//mongodb.connect(3)
//connection string
// object useNewUrlParser: true
//3 function err client, client.db() is equal o db variable
//transfer app.listen

//in mongo db
//CLICK connect
//dont add whitelist
//add different ip add
//0.0.0.0/0
//add ip address
//choose username and password
//create mongo user
//chosose a connection method
//connect to application
//copy connection string
//in mongo db create a database TodoApp with items as collections   
//edit strng. delete<password> change to actual passwod
//delete test and change

//createdate base
//TodoApp
//items

//29 notes

//30 Read
// in app.get perform crud in db.colllection
//.find() method and toArray() with func as argument
// with 2 params err, items
// transfer res.send to that functtion and have access to items param
//copy 1 hardcode LI and erase all LI
// ask help from map method inside the ui tag
//add join() to erase commas
//and generate dynamic items
//applt redirect to instead of thank you








//31 update
//before body tag, add scripts that points to browser.js file
//to have an access, add new folder and u put browser.js file
//below let db set up app.use  exp .static('public')
//test alert

//browser.js add event listener via docyment with click event and e argument to the functiion
//set if  statement
//as e.target.classlist.contains 'edit-me' as condition
//test alert
//erase test and add prompt() function and save into userInput variable
//test via console userInput

//google axios and copy cdn and put it on the top of scripts browser.js 
//in browser add use axios.post() with then and catch and post with  2 arg 
//1st is url /update-item
//2nd is objcet with text property and the value is whatever the user type
//this will return a promise
// in then function
//in catch function console log Error occured try again later


//to receive this data to our server.js,  on the last line on sever.js,
//set up app.post with 2 args
//1st is the url 2nd is a function req,res
//test if data is received
//console log the req.body.text
//and sent 'success'

//above app use extended true, set up another app usr express json()
//this is to add submitted form data to the body to req obj

//32 update part 2
//goal for this video is to write node code to talk to our db and update our frontend
////in server.js app.post update del console and res.send

//work with db. coll items with  findone and update fuunc with 3 params (continue on ***)
//1st . we tell mongodb which document we want to update (it means, what document in the front and back so we need the ID here)
// we should inclue id from mongo db in the button od the update button in able to kwno wc button has been clicked on
//add data-id with thew value of mongo id. ddont forget underscore
// in browser userinput. include the id property together with whatever the user types in
//add propery id
// with value of e target getAtttibute func
//its one param is a string of the data-id att

//***1st param as unders id and has a value of a new intance of mongodb. obj id()
//the param is the id

//2nd is an objcet with prop of $set with obj value
//inside the object is to update the text prop with whatever the user types in

//3rd is a function. res send string sucess

//test on the update. no changes will be made but check the database if it succesfully add
//if update is made, it should auto added so,
// in browser in the then,  we identify wc button is click thru the e param target. 2 parentELement
//after 2 parent we arrive at the entire row and look for a span by using querySelector that has a class string value of item-text
// .innerHTML  is equal to whatever the user types in


// when clicking edit, we pre populate the prompt value with the current value
// we add 2nd arg  of the prompt with the curent value by  target e plus 2 parent elment qselector innerhtml

//if we click cancel, it should not be added as blank in the front end
//by wrappping the axios code in an if statement
//with condition . as long as input user is true then perform axios 


//33 delete button
//in browser in the add event, above the if statement for the update, add the delete codes
//copy the if statemnt. without the body
//change the param of conatain func
//add an if() with a confirm() as condition with txt "do you really want"
//copy the axios until console
//change the url you listen to
//we want to know the id of the delete button so do same from update button
//edit the target and remove() the entire list item 

//in server, add post of delete-item
//work with the db  deleteOne with 2 args
//1st select the doc we want to delete
//recycle from update the first arg
//2nd is a func that send delete succes

//34 improve the create action

//in server.js, id in the form create-form
//input as create-field id
//ul id as item-list

//in broweser athe very top select the form via document and addeventlisner with submit
//2nd param as function
//prevent the default action via e param
//next recycle the five lines of axios and paste after e default
//change the url for the first param
//for 2nd param we want to send the text that being created
//for 2nd param select what is being type in the the field
//store in a variable at the very top createField variable via docu get elemmet by id
//so 2nd param is an object with text prop and has a value typed into the inputed field
//in the.then() create the html for new item
//but first test the codes so far by an alert function
//but before tesiing, we should know what the server does in receiving the data
//go to server
//adjust req body replace item with text
//and instead of redirect, res.send with text as text
//then test the alert
//then check if the item is added to database

//if ok, go back to browser and finish the content in then()
//reomve the alert
//select the ul via doc getelement .insertAdjacentHTML()
//1st arg is 'beforeend
//2nd arg is a functiion name itemTemplate()
//create this at the verytop
//in the body, return text `hello from the function` for test


//copy from server the li tag and paste
//return the li via ticks
//from server app.post /create-item
//erase the send( success) and replace it with res.json()
//put err and info args in the function and res.json(info.ops[0])
//back to browser in axios add response as the arg in the function
//in the itemtemplate calling put resonse.data as its arg
//go to the itemtemplate function and receive the args as item
//this is to make since the item_id
//and test. add new item, edit it , check in datebase and delete

//if submiting an item, the field shoud be cleared
//browser create item below doc.get...
//set an empty string to the input field  .value
//and add focus in the input field

//35 client side rendering
//server - ul
//above script another script
//create variable and save javascript json to string og tx. thru json stringfy items as paramater
//delte the list items from server so ul will be empty
//in browser above create feature select ul via id doc.get elem insertadj
//1st ar is beforeend
//2nd is the html we want to add to the ul. so make a variable ourHTML and define it above this code
// map the items variable we define a while ago
////return the html template i each item wc we already define early in the course
// put join func to rejoin the data
//test the code

//36 security
 //server app get / above this
 //creta a func passwordProtected with 3 param req,res,next
 //insert this function in the app get
 //console.log and test
 //res.set()with 2 param
 //1st WWW-Authenticate,
 //2nd basic realm="Simple Todo App" and write an if and else statment below
 //with a condition that if the user type in the correct credentials, we let them log in via  next func
 // condition is req.headers.authorization ==  ***
 // if did not, send a 401 status and send message
 //get the password via console of the req.headers
 //get the value and paste to the arg in the if statment ***
