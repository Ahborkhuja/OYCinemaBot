function phone() {  
  fetch("https://api.oytickets.uz/login", {
    method: "POST",
    headers:{
      "Content-type":"application/json",
    },
    mode:"cors",
    body: {
      "login": "Ex.12121332",
      "password": "Pass1"
    }
  }
  ).then((res) => {
    console.log(res);
  })
}
// setTimeout(phone,2*24*60*60*1000);




// function login() {
  //   fetchO(`https://api.oytickets.uz/login`,{
  //     method: 'POST',
  //     headers:{
  //     }
  //   })
  // }
  // fetch(`https://api.oytickets.uz/customers/998901851706`,{
  //   method:'GET',
  //   headers:{
  //     "User-Session":"388dad63834837fd205b321e989145d9/7d068a9377732c64131c9cfd938b11c271975241596673edca38182e7885607c"
  //   }
  // })
  //   .then(response => {
  //     console.log(response); 
  //   })

// function register() {
//   fetch(`https://api.oytickets.uz/register`,{
//     method:'POST',
//     headers:{
//       "Applications":"json",
//     },
//     body:JSON.stringify({
//       "login": "Ex.123",
//       "password": "Pass",
//       "firstName": "Cu",
//       "lastName": "shesh",
//       "phoneNumber": "998977378594",
//       "email": "max.nislkl@gmail.com",
//       "dateOfBirth": "2004-03-03", // YYYY-MM-DD
//       "sex": true
//   })
//   })
// }