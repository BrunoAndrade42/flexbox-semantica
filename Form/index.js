

// const formLoginEventListener = () => {
//   const InputLogin = document.getElementById('login')
//   const InputPassword = document.getElementById('password')
//   const Form = document.getElementById('formLogin')

//   Form.addEventListener('submit', (e) => {
//      e.preventDefault();

//      const login = InputLogin.value
//      const password = InputPassword.value

//      if(!(login && password)){
//        alert('preencha o login e senha!')
//      }

//      const data = {
//         login,
//         password,
//      }

//      console.log(data) 

//      // const response = await api.post("/login", data)

//     setTimeout(()=>{
//         alert('logged!')
//     },3000)         
//   })


// }

// formLoginEventListener()


const bottonClicked = () => {
    const InputLogin = document.getElementById('login')
    const InputPassword = document.getElementById('password')

         const login = InputLogin.value
         const password = InputPassword.value
    
         if(!(login && password)){
           alert('preencha o login e senha!')
         }
    
         const data = {
            login,
            password,
         }
    
         console.log(data) 
    
         // const response = await api.post("/login", data)
    
        setTimeout(()=>{
            alert('logged!')
        },3000)         
}