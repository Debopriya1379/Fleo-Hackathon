import {React,useState} from 'react';
import './Company.css'

const Company = ({company,percentage,total_sale,target_sale,subdata}) => {

  const [levelOne, setlevelOne] = useState(false);

  return (
    <div className='Company'>
        <div className="company_header">
            <h3>{company}</h3>
            <h4>{percentage}%</h4>
        </div>
        <div className="sales_details">
            <p>Total sale :{total_sale}</p>
            <p>Target sale :{target_sale}</p>
            <input type="range" value={percentage} name="" id="" />
        </div>
        <div className="sub_data">
          <div className="root_button">
              <button onClick={()=>{setlevelOne(!levelOne)}} >Collaps</button>
            </div>
            {levelOne && subdata.map((data)=>{
               return(
                <Company company={data.company} percentage={data.percentage} total_sale={data.total_sale} target_sale={data.target_sale} subdata={data.subdata} />
              )
            })}
        </div>
    </div>
  );
};

export default Company;
