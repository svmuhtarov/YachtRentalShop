const Footer = () => {
    return (
        <div className="footer">
        <div className="footer_content">
        <div className="footer_left">
            <p>Created by <a href="https://www.facebook.com/svmuhtarov">Светломир Мухтаров</a></p>
        
        </div>
        </div>
        
        <div className="footer_right">
            <ul className="social_icons">
            <li><a href="https://www.facebook.com/svmuhtarov"><img src="images/icon_facebook.png" alt="" title="" /></a></li>
              <li><a href="mailto:svetlomir@muhtarov.eu"><img src="images/icon_contact.png" alt="" title="" /></a></li>
             {/* <!-- <li><a href="contacts.html"><img src="images/icon_contact.png" alt="" title="" /></a></li> --> */}
            </ul>
        </div>
       <div className="clear"></div>
       </div>
  
    )
}


export default Footer