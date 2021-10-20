import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // const location = useLocation();
  // const history = useHistory();
  // const redirect_uri = location.state?.from;

  const handleRegistration = (e) => {
    // history.push(redirect_uri);
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 charecters long');
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password must contain to uppercase');
      return;
    }

    // createUserWithEmailAndPassword(auth, email, password).then((result) => {
    //   const user = result.user;
    //   console.log(result.user);
    // });

    isLogin ? userLogin(email, password) : createNewUser(email, password);
  };

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    // })
    //   .finally(() => setIsLoading(false));
    // history.push(redirect_uri);
  };

  const userLogin = (email, password, name) => {
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      //   const user = result.user;
      //   console.log(user);
      //   setError('');
      //   history.push(redirect_uri);
      // })
      // .catch((error) => {
      //   setError(error.message);
      setUser();
      // setUserName(name)
    });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError('');
        setUser();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    email,
    isLoading,
    // signInUsingGoogle,
    logOut,
    error,
    handleRegistration,
    isLogin,
    handleEmailInput,
    handlePasswordInput,
    toggleLogin,
    handleNameInput,
    userLogin,
    googleSignIn,
    setError,
  };
};

export default useFirebase;
