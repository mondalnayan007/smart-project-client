import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MyBids = () => {
    const [bids,setBids]= useState([]);
    const {user} = use(AuthContext);

    useEffect(()=>{
       if(user){
        fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then(res=>res.json())
        .then(data =>{
            setBids(data)
        })
       }
        
    },[])

    
    return (
        <div>
            My Bids : {bids.length}

             <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No:</th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Bid Price</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                bids.map((bid,index) => <tr>
                                    <td>{index+1}</td>
                                   
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-full h-12 w-12">
                                                    <img
                                                        src={bid.buyer_image}
                                                        alt={bid.buyer_name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{bid.buyer_name}</div>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>{bid.buyer_email}</div>
                                    </td>
                                    <td>$ {bid.bid_price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default MyBids;