import {Link} from 'react-router-dom';
const home = () =>{
    console.log("home");
    return(    
 
  <div>
  <div>
  <div class="ui hidden divider"></div>
  <img class="ui top aligned tiny image" src="https://www.r1cu.org/images/convenience/send-money2.png"/>
  <span><Link to='/send-money'>   <button className="ui massive teal button" type="button">Send</button></Link> </span>
  <div class="ui divider"></div>
  <img class="ui middle aligned tiny image" src="https://5.imimg.com/data5/LK/OC/MY-16102936/utility-bill-payment-services-500x500.png"/>
  <span><Link to='/Bill-payment'>   <button className="ui massive teal button" type="button">BillPayment</button></Link></span>
  <div class="ui divider"></div>
  <img class="ui bottom aligned tiny image" src="https://imgk.timesnownews.com/story/WhatsApp_Image_2021-02-15_at_4.58.22_PM.jpeg?tr=w-400,h-300,fo-auto"/>
  <span><Link to='/add-money'>   <button className="ui massive teal button" type="button">Add Money To Wallet</button></Link></span>
  </div>
  <div>
  <div class="ui divider"></div>
  <img class="ui top aligned tiny image" src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/bank_2_660x450_240120042324_190320034529.jpg"/>
  <span><Link to='/deposit-withdraw'>   <button className="ui massive teal button" type="button">Deposit or Withdraw</button></Link></span>
   </div>
   <div class="ui hidden divider"></div>
 </div>
      )
    
}

export default home;
