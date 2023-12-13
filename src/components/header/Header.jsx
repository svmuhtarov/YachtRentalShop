export const Header = () => {
    return (
        <div id="header">
        <div className="header_content">
      
        <a className="logo"><img src="images/anchor_small.png" alt="" width="70"  title="" border="0" className="entry_image" /> <span>Yacht outlet</span></a>
       
       
        
        <div className="menu">
            <ul>
                <li className="selected"><a href="index.html">Home</a></li>
                <li><a href="ship_meh.html">Catalog</a></li>
                <li><a href="ship_elmeh.html">Create</a></li>
                {/* <li><a href="ship_elmeh.html">Login</a></li>
                <li><a href="ship_elmeh.html">Register</a></li> */}

                <li><a href="ship_elmeh.html"> Logout: Pencho</a></li>

            {/* <!--    <li><a href="contacts.html">Контакт</a></li> --> */}
            </ul>
           
         </div>
      
         
        </div> 
        </div>

    )
}