import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../firebaseConfig";
import images from "../imageData";

const Account = ({ user, setUser }) => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearAll = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { displayName, email, uid } = userCredential.user;
        const newUser = { displayName, email, uid };
        setUser(newUser);
        console.log(newUser);
        clearAll();
      })
      .catch((error) => {
        alert(`${error.code} : ${error.message}`);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            const { displayName, email, uid } = userCredential.user;
            const newUser = { displayName, email, uid };
            setUser(newUser);
            console.log(newUser);
            alert(
              `Welcome ${displayName}! Your account has been created successfully.`
            );
            clearAll();
          });
      })
      .catch((error) => {
        alert(error.code, error.message);
      });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser({});
        alert("Logout Successful");
      })
      .catch((error) => {
        alert(error.code, error.message);
      });
  };

  return (
    <div className="container">
      <Navbar />

      {user?.email && (
        <div className="card w-25 px-3 m-5 bg-success">
          <h3>Current user :</h3>
          <p>
            <strong>Name :</strong>
            {user.displayName}
          </p>
          <p>
            <strong>Email :</strong>
            {user.email}
          </p>
          <button className="btn btn-danger" onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}

      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={images.mec2} />
            </div>

            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span
                    className={`${login && "btn_active"}`}
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </span>
                  <span
                    className={`${!login && "btn_active"}`}
                    onClick={() => setLogin(false)}
                  >
                    Register
                  </span>
                </div>

                {login ? (
                  <form id="RegForm" onSubmit={(e) => handleLogin(e)}>
                    <input
                      required
                      type="text"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn">
                      Login
                    </button>
                    <Link to="/account">Forgot password</Link>
                  </form>
                ) : (
                  <form id="RegForm" onSubmit={(e) => handleRegister(e)}>
                    <input
                      required
                      type="text"
                      placeholder="Username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
