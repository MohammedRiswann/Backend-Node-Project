const user = [];
module.exports = {
  signupDirect: (request, response) => {
    if (request.session.email) {
      console.log(request.session.email);
      response.redirect("/home");
    } else {
      response.render("sign");
    }
  },
  loginDirect: (request, response) => {
    console.log(request.body);
    const { email, password } = request.body;
    const existinguser = user.find((ex) => {
      return ex.email === email;
    });
    if (existinguser) {
      response.redirect("/login");
    } else {
      const newUser = {
        email,
        password,
      };

      request.session.email = email;
      console.log(request.session);
      user.push(newUser);
      response.redirect("/home");
    }
  },
  login: (request, response) => {
    console.log("--------------------");
    response.render("login");
  },
  home: (request, response) => {
    response.render("home");
  },
  loginPost: (request, response) => {
    request.session.destroy((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("hello");
        response.redirect("/login");
      }
    });
  },
  loginSuccess: (request, response) => {
    const { email, password } = request.body;

    const existinguser = user.find((ex) => {
      return ex.email === email && ex.password === password;
    });
    console.log(existinguser);

    if (existinguser) {
      request.session.email = "riswan14.rm@gmail.com";
      response.redirect("/home");
    } else {
      response.redirect("/sign");
    }
  },
};
