import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./LoginPage.module.css";
import { LoginCard } from "../../components/LoginPage/LoginCard/LoginCard";

export function LoginPage({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit clicked", { email, password });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user created", user.uid);

      setIsAuth(true);
      console.log("set is Auth to true");
      navigate("/order");
      console.log("after navigate");
    } catch (error) {
      console.error("login error:", error);
      alert(error.message);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <main className={styles.loginPage}>
      <h1 className={styles.loginTitle}>Log in</h1>
      <LoginCard
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </main>
  );
}
