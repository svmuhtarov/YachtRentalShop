import {Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className="header">
       
      
        <Link className="logo"><img src="images/anchor_small.png" alt="" width="70"  title="" border="0" className="entry_image" /> 
        <span>Yacht outlet</span>
        </Link>
       
       
        
        <nav className="menu">
            <ul>
                <li className="selected"><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/boat/create">Create</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li> 

                <li><Link to="/logout"> Logout: Pencho</Link></li>

            {/* <!--    <li><a href="contacts.html">Контакт</a></li> --> */}
            </ul>
           
         </nav>
      
         
       
        </section>

    )
}

export default Header