import { useState, useEffect } from "react";
import {getList} from '../../action/WalletActions';
import { connect } from 'react-redux';
import User from '../../localstorage/User';
import {useDispatch} from 'react-redux'

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {getList} from './Action';
// import User from './User';

const SendMoney = (props) => {

    const [list,setList] = useState([
        {
            name : "",
            mobileNo : "",
            wallet : {
                walletId : 0,
                balance : 0
            }
        }
    ]);

    useEffect(()=>{
      props.getList();
    },[])

    // const [list,setList] = useState(props.list);

    // const dispatch = useDispatch();


    return (
    <form>
      <input type="text" id="search" onChange={()=>{
          console.log(props.list);
          if(props.list!=undefined){
            setList(props.list.filter((customer)=>customer.mobileNo.match(document.getElementById("search").value)));
          }
          console.log(list);
          }} />
      <table border="1px">
        <tr>
          <th>Name</th>
          <th>Mobile Number</th>
        </tr>
        {
        list
          .filter(
            (customer) => customer.mobileNo !== User.getCustomer().mobileNo
          )
          .map((customer) => {
            return (
              <tr>
                <td>{customer.name}</td>
                <button
                  type="button"
                  onClick={() => {
                    User.setTarget(customer.mobileNo);
                    props.history.push("/single-transaction");
                  }}
                >
                  <td>{customer.mobileNo}</td>
                </button>
              </tr>
            );
          })}
      </table>
    </form>
  );
};

const mapStateToProps = state =>{
    return{
        list : state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getList : () => dispatch(getList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendMoney);

// const SendMoney = () =>{
//   const dispatch = useDispatch();
//   const list = useSelector((state)=>state);

//   const fetchList = async() =>{
//     const result = await await axios.get("http://localhost:9191/api/pwa/wallet/get-list").catch(error=>{
//       console.log(error);
//     });
//     dispatch(getList(result.data))
//   }

//   useEffect(()=>{
//     fetchList();
//   },[]);

//   console.log(list);

//   let tempList = list;

//   return (
//         <form>
//           <input type="text" id="search" onChange={()=>{
//               tempList = list.filter((customer)=>customer.mobileNo.match(document.getElementById("search").value));
//               console.log(tempList);
//               }} />
//           <table border="1px">
//             <tr>
//               <th>Name</th>
//               <th>Mobile Number</th>
//             </tr>
//             {tempList
//               .filter((customer) => customer.mobileNo !== User.getCustomer().mobileNo)
//               .map((customer) => {
//                 return (
//                   <tr>
//                     <td>{customer.name}</td>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         User.setTarget(customer.mobileNo);
//                         // props.history.push("/single-transaction");
//                       }}
//                     >
//                       <td>{customer.mobileNo}</td>
//                     </button>
//                   </tr>
//                 );
//               })}
//           </table>
//         </form>
//       );
    
    
// }

// export default SendMoney;/