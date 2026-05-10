import React from 'react';
import './todoitems.css';
const Todoitems = (props) => {
    let {itemList, deleteItm} = props;
    let finalItems = itemList.length ?
        itemList.map((obj,index) => {
            return(
                <div className="row2" key={obj.id}>
                    <span className='name'>{obj.name}</span>
                    <span className='age'>{obj.age}</span>
                    {/* <span onClick={() => deleteitm(index)}>&times;</span> */}
                    {/* Another way to use the deleteitm method by using id as an argument instead of using index */}
                    <span className='actionbtn' onClick={() => deleteItm(obj.id)}>&times;</span>
                </div>
            );
        }) 
        : (<p>There is no items to show</p>);
    
    return(
        <div className='listItems'>
            <div className="row1">
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            {finalItems}
        </div>
    )
};

export default Todoitems;