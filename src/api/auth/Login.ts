import { superAdmin } from "../../@fakeDB/superAdmin";

const LoginApi = (data: { email: string; password: string }) => {
  const { email, password } = data;

  const index = superAdmin.findIndex((item) => (item.email == email));

  if (index == -1) {
    return {
      message: "There is no user with that email.",
      data : {
        email : "",
        username : ""
      }
    };
  }

  if (password != superAdmin[index].password) {
    return {
      message: "Wrong password",
      data : {
        email : "",
        username : ""
      }
    };
  }

  return {
    message: "success",
    data: {
      email: superAdmin[index].email,
      username: superAdmin[index].full_name,
    },
  };
};

export { LoginApi };
