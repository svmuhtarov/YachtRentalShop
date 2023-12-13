export const Home = () => {

    return (
        <div id="wrap">

  <div className="top_slogan">

    Welcome to our selling yacht platform 

  </div>	

  
  <div className="slider">
		<div className="flexslider">
	    <ul className="slides">
	    	<li><a href="ship_meh.html"><img src="images/engineer.jpg" alt="" title="" border="0"/></a>
            	<div className="flex-caption">
                	 <h2>Механици</h2>	
                     <p>На тази страница можете да намерите готови тестове за самоподготовка за изпитите на <a href="http://www.marad.bg">Изпълнителна Агенция &quot;Морска Администрация&quot;</a> (ИАМА) за правоспособност "Вахтен механик на кораб" (Оперативно ниво) и за правоспособност "Главен или втори механик на кораб" (Управленско ниво).</p>
                     <a href="ship_meh.html" className="slider_button">Механик на кораб</a>
                </div>
            </li>
            <li><a href="ship_elmeh.html"><img src="images/electrician_3.jpg" alt="" title="" border="0"/></a>
            	<div className="flex-caption">
                	 <h2>Корабен електромеханик</h2>	
                     <p>На тази страница можете да намерите готови тестове за самоподготовка за изпитите на <a href="http://www.marad.bg">Изпълнителна Агенция &quot;Морска Администрация&quot;</a> (ИАМА) за правоспособност "Корабен електромеханик".</p>
                     <a href="ship_elmeh.html" className="slider_button">Корабен електромеханик</a>
                </div>
            </li>
           
	    </ul>
	  </div>
   </div>
   
   
   <div className="main_content">

   <div className="section_one_three">
       <h2 className="centered_title"></h2> 
        <div><a href="#" title=""><img src="images/banner2.jpg" alt=""  title="" /></a></div>
        <h2 className="centered_title"></h2>
         <div><a href="#" title=""><img src="images/banner5.jpg" alt="" title="" /></a></div>
        
        </div>
   	

   		<div className="section_one_three">
        <h2 className="centered_title">Контакт</h2>
        <div className="roundimg"><a href="mailto:svetlomir@muhtarov.eu" title=""><img src="images/icon_contact.png" alt="" title="" /></a></div>
        <p className="centered_text">
You can contact me at: svetlomir@muhtarov.eu
        </p>
     {/* <!--   <a href="contacts.html" className="more">Към формата</a> --> */}
        </div>
          
          
          <div className="section_one_three">
       <h2 className="centered_title"></h2> 
        <div><a href="#" title=""><img src="images/banner3.jpg" alt=""  title="" /></a></div>
        <h2 className="centered_title"></h2>
         <div><a href="#" title=""><img src="images/banner4.jpg" alt="" title="" /></a></div>
        
        </div>
   </div>
   
   
   <div className="clear"></div> 
  
   
</div>
 

    )

}