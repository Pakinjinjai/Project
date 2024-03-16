///Production///
/***** Deploy_KMITL_SERVER *****/ 
// const baseURL = "http://161.246.127.114"
/***** Deploy_railway.app_SERVERS *****/
// const baseURL = "https://ppsp-projectbackend-production-5099.up.railway.app/api/v1" 




///Development///
const baseURL = "http://localhost:3000/api/v1" 

//USERS_APIGATEWAYS//
const SIGNIN = "/users/login";
const SIGNUP = '/users/register'
const GETME = '/users/me' // USE Header : Authorization "Bearer " + accessToken
const UPDATEME = '/users/update' // USE Header : Authorization "Bearer " + accessToken
const DELETEUSERS = '/users' // USE Header : Authorization "Bearer " + accessToken and /users/:_id **ADMIN_API**
const GETALLUSERS = '/users/getallusers'
const SEARCHUSERS = '/users/?Search='

//HEALTHS_APIGATEWAYS//
const GETMEHEALTH = '/healths/me' //USER Header : Authorization "Bearer " + accessToken
const ADDMEHEALTH = '/healths/addme' //USER Header : Authorization "Bearer " + accessToken

//QUEUE_APIGATEWAYS//
const GETMEQUEUES = '/queues/me' 
const ADDQUEUES = '/queues/add'        // USE Header : Authorization "Bearer " + accessToken **ADMIN_API**
const GETALLQUEUES = '/queues/get-all' // USE Header : Authorization "Bearer " + accessToken **ADMIN_API**
const UPDATEQUEUES = '/queues/update'  // USE Header : Authorization "Bearer " + accessToken and /update/:queueId **ADMIN_API**
const DELETEQUEUES = '/queues/update'  // USE Header : Authorization "Bearer " + accessToken and /update/:queueId **ADMIN_API**


export {
    //BASE//
    baseURL,
    //USERS_APIGATEWAYS//
    SIGNIN,
    SIGNUP,
    GETME,
    UPDATEME,
    GETALLUSERS,
    SEARCHUSERS,
    DELETEUSERS,
    //HEALTHS_APIGATEWAYS//
    GETMEHEALTH,
    ADDMEHEALTH,
    //QUEUES_APIGATEWAYS//
    GETMEQUEUES,
    ADDQUEUES,
    GETALLQUEUES,
    UPDATEQUEUES,
    DELETEQUEUES

}