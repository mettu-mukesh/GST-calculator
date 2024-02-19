function Mybill() {
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Phonenumber = document.getElementById("phonenumber").value;

  let Sarters = document.getElementById("sarters").value;
  let Nonveg = document.getElementById("biryani").value;
  let Burgers = document.getElementById("burgers").value;
  let Berverages = document.getElementById("berverages").value;


  let Button = document.getElementById("button");

  let gst = document.getElementById("gst").value;

  let Total = [parseInt(Sarters) + parseInt(Nonveg) + parseInt(Burgers) + parseInt(Berverages)];

  sum = 0;

  for (i = 0; i <=Total.length - 1; i++) {
    sum = parseInt(sum) + Total[i];
  }

  let bill = sum + (sum * (gst / 100));
  console.log(sum)

//   tips

  let withtip = 0;

  if (bill >500  && bill <= 1000) {
    withtip = 50;
  } else if (bill > 1000 && bill < 1500) {
    withtip = 100;
  } else if (bill > 1500 && bill < 2000) {
    withtip = 200;
    
  }
  else{
    withtip = 0;
  }

  let para = document.getElementById("para");
  let totalBill = bill + withtip;
  console.log(totalBill)
  


  para.innerHTML = `Name : ${Name}</br>  Email : ${Email}</br> 
  Phonenumber : ${Phonenumber}</br> Sarters : ${Sarters}</br> Nonveg : ${Nonveg}</br>  Burgers : ${Burgers}</br>  Beverages : ${Berverages}</br> 
  Total bill including tip : ${gst}% GST is  ${totalBill}rs/-`;

  


}




function scrollFunction() {
  var navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}


function links() {
  const nav = document.querySelector(".navbar");
  const home = document.querySelector(".menu");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    home.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}
links();