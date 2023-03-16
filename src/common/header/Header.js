import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './header.css'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      fetchUserName();
    }, [user, loading]);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <div className='app__header'>
      <div className='app__navbar'>
        <div className='navbar__logo'>
            <Link to='/'>Medi<span>Plus</span></Link>
        </div>
        <div className='navbar__links'>
            <ul>
                <li>
                {user?.email.includes("admin") ? <Link to='/admin' className="special">Admin Dashboard</Link> : user?.email.includes("doctor") ? <Link to='/doctor' className="special">Doctor</Link> : !user ? <Link to='/login'>Login</Link> : <Link>My Profile</Link>}
                </li>
                <li>
                    <Link to='/doctors'>Doctors</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/emergency'>Emergency</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
        <div className="navbar__toggle" onClick={toggleNav}>
        <div className="navbar__toggle-icon"></div>
      </div>
      </div>
      <div className='app__hero'>
        <div className='slanted__content'>
            <h5>WE GIVE YOU THE BEST</h5>
            <h3>Making Health</h3>
            <h3><span>Care Better together</span></h3>
            <p>We are dedicated to providing the best healthcare to you. Lorem ipsum dolor sit amet.</p>
            <div className='hero__buttons'>
                <button className='btn1'>HOW CAN WE HELP</button>
                <button className='btn2'><Link to='/appointment'>BOOK APPOINTMENT</Link></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
