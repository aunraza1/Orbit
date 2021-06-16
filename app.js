
let addBookings=()=>{

var date =document.getElementById('eventDate').value
var name = document.getElementById('name').value
var email= document.getElementById('email').value
var noOfPeope=document.getElementById('noOfPeople').value


if(date && name && email && noOfPeope){
var key = firebase.database().ref('eventBooking').push().key
let obj={
    key:key,
    date:date,
    name:name,
    email,email,
    noOfPeope:noOfPeope

}

firebase.database().ref('eventBooking/'+key).set(obj,(err)=>{
    if(err){
        alert("Something Went Wrong!")
    }
    else{
        alert("Event Added, Our Team will contact you shortly!")
        window.location.reload()
    }

})
} else{
    alert("All Fields Are Required Please fill all fields")
}

}


let contactInfo=()=>{

var name = document.getElementById('name').value
var email= document.getElementById('email').value
var contactSubject=document.getElementById('contactSubject').value
var phone = document.getElementById('phone').value
var describe= document.getElementById('describe').value


if( name && email && contactSubject && phone.length==11 && describe){
    var key = firebase.database().ref('contact').push().key
    let obj={
        key:key,
        name:name,
        email,email,
        contactSubject:contactSubject,
        phone:phone,
        describe:describe
    
    }
    
    firebase.database().ref('contact/'+key).set(obj,(err)=>{
        if(err){
            alert("Something Went Wrong!")
        }
        else{
            alert("We Will Contact You Shortly!")
            window.location.reload()
        }
    
    })
    } 
else{
    alert("All Fields are required please fill all fields")
}

}

