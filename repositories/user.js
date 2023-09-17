// Repos -> tuong tac xuong DB

const login = async ({ email, password }) => {
  console.log("Login User in User Repository: " + email + " " + password);
  // const response = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email, password })
  // });
  // return response.json();
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  // validation value already done in Controller
  console.log(`
  Register User in User Repository With 
  Name ${name},
  Email: ${email}, 
  Phone Number: ${phoneNumber}, `);
};

export default {
  login,
  register,
};
