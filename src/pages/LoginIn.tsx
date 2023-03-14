import { EventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FORGOT_PASSWORD,
  LOGIN_ACCOUNT,
  PASSWORD,
  SOFTWARE_NAME,
  Submit,
  YOUR_EMAIL,
} from "../constant";
import { toast } from "react-hot-toast";
import { LoginApi } from "../api";

function Login() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (email == "" || password == "") {
      toast.error("Fill all the blank.");
    } else {
      const emailValidRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!email.match(emailValidRegex)) {
        toast.error("Invalid email.");
      } else {
        // api for auth here.
        const req = {
          email,
          password,
        };

        const resAuthLogin = await LoginApi(req);

        if (resAuthLogin.message == "success") {
          localStorage.setItem("email", resAuthLogin.data?.email);
          localStorage.setItem("username", resAuthLogin.data?.username);
          toast.success("success");
          Navigate("/dashboard");
        } else toast.error(resAuthLogin.message);
      }
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="bg-homeboard h-screen flex items-center w-[100%]">
        {/* <div className='w-96 h-96 bg-charger bg-cover bg-no-repeat bg-center'></div> */}

        <div className="flex flex-col items-center justify-center px-4 py-28 min-w-full mx-auto my-auto md:h-screen lg:py-0 ">
          <a className="flex items-center mb-6 text-2xl font-semibold text-label">
            {SOFTWARE_NAME}
          </a>

          <div className="w-full bg-slate rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-label md:text-2xl ">
                {LOGIN_ACCOUNT}
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-label">
                    {YOUR_EMAIL}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-gray-300 text-label sm:text-sm rounded-lg block w-full p-2.5 bg-divider"
                    placeholder="name@company.com"
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-label ">
                    {PASSWORD}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border-divider text-label sm:text-sm rounded-lg block w-full p-2.5 bg-divider"
                    onChange={handlePassChange}
                  />
                </div>

                <div className="flex items-start">
                  <div className="ml-3 text-sm">
                    <a
                      className="font-medium text-label hover:underline dark:text-primary-500"
                      href="/auth/forgotpassword"
                    >
                      {FORGOT_PASSWORD} ?
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleClick}
                  className="w-full text-white bg-button text-xl focus:ring-4 focus:outline-none focus:ring-divider font-medium rounded-lg  px-2.5 py-2.5 text-center dark:bg-white dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {Submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
