<!DOCTYPE html>
<html>
<meta http-equiv="refresh" content="07">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
  
<style>

  h2 {
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
    line-height: 1.5;
  }

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  height: 100%;
  background-color: rgb(6, 40, 99);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  line-height: 1.8;
}


a {
  text-decoration: none;
  color: white;
}

#container {
  text-align: center;text-align: center;
  margin: 30px auto;
  padding: 60px;
  max-width: 400px; 
  background-color: white;
  color: black;
  border-radius: 10px;

}
div {
  text-align: center;
  margin-top: 34px;
}

label {
  text-align: center;
  display: block;
  color: black;
  font-size: 14px;
}

img {
  /* image width */
  height: 40px;
  width: 30px;
  float: ;
}

input {
  /*form input properties*/
  text-align: center;
  margin: 0px, 5px, 0px, 5px;
  size: 100px
  width: 20%;
  padding: 10px;
  border:  none;
  border-radius: 5px;
  background-color:rgb(169, 231, 233);
}

.rareStyle {
  font-size: large;
  color: blue;
  
}

button {
  text-align: justify-center;
  display: block;
  color: white;
  background-color: blue;
  width: 20%;
  padding: 10px;
  border-radius: 9px;
  margin-top: 22px;
  
}

button:hover {
  text-align: justify-center;
  background-color: darkblue
}

footer {
  text-align: center;
  margin: auto;
  max-width: 400px;
  padding: 20px;
  }

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
  padding: 12px 16px;
  z-index: 1;
  text-decoration-color: rgba(0,0,0,0.8);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.MyLink{
  /* form styling */
  Background:#FFFFFF;
  width:350px;
  height:520px;
  display:inline-block; font-weight:bold;
  vertical-align: middle;
  margin: 0px 5px 0px 5px;
  padding: 10px;
  
} 


button{
  /* centering the create account button*/
    margin: 0 auto;
    size: 100px;
}
.first-div{/* in line horizontal alignment*/
  display: inline-block;
}
.second-div {
  display: inline-block;
  margin-left: 15px;
  height: 50px;
  vertical-align: center;

}

</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8" align="items-center" class="first-div">
      <img src="apple-icon.png" alt="apple-icon" class="img"><h2 class="text-primary text-center" dis>piggyvest</h2>
    </div>
    <div class="col-xs-4">
     </div>
  </div>


  <p><span class="text-danger" style="color:blue; font-size: 25px;"> Create a Secure Account</span> <br><span> Welcome to the future of Savings & Investments </span></p>

  <form class="MyLink" >
  <label for="fullname">Full name</label>

  <input type="text" id="fullname" name="fullname" placeholder="Full name">
  
  <label for="email">Email Address</label>
  
  <input type="text" id="email" name="email" placeholder="Email Address">
  
  <label for="Phone">Phone Number</label>

  <input type="text" id="Phone" name="Phone" placeholder="Phone Number">

  <label for="pword">Password</label>
  
  <input type="text" id="pword" name="pword" placeholder="Password">

  <label for="promocode">Referrer Phone or Promo Code (Optional)</label>
  
  <input type="text" id="promocode" name="promocode" placeholder="Referrer Phone or Code">
  
  <label for="about ">How Did You Hear About Us? (Optional) </label>
<div class="dropdown" style="color:black;"><span>Click to Select</span>
  <div class="dropdown-content">
  <p>Facebook</p>
  <p>Twitter</p>
  <p>Instagram</p>
  <p>Friend/Family/Coworker Referral</p>
  <p>Google Search</p>
  <p>Google playstore </p>
  </div>
</form>
<!-- coundnt add CREATE ACCOUNT button the form directly because the dropdown was really hovering over it, so i had to take it outside -->
    </div>

    <div>
    <button type="submit" button class="sc-iwsKbI fpszRW block disabled:opacity-75 disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-t rounded-br w-full flex flex-col md:flex-row items-center justify-center pt-5 py-4 px-10 font-display text-sm md:text-sm uppercase #083E9E font-bold text-white hover:bg-primary-500 mt-0" type="submit" > CREATE ACCOUNT </button>
    </div>

<footer>
  <p> Already have an account? <a href="">Log In</a></p>
</footer>
</html>
