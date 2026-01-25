let isLoggedIn=true;
let isProfileComplete=false;
if(isLoggedIn==true && isProfileComplete==true){
    console.log("welcome back!")
}
if(isLoggedIn==true && isProfileComplete==false){
    console.log("Complete Your Profile")
}
if(isLoggedIn==false){
    console.log("Please Login")
}
