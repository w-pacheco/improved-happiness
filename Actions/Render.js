
import { User } from "../app.js";
import Home from "../Views/Home.js";
import Profile from "../Views/Profile.js";

export default function Render(){

    const { role } = User;

    Home();
    // if (role === 'Developer') 
    Profile();
}