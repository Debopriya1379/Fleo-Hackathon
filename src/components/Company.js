import {React,useState} from 'react';
import './Company.css'
import { Progressbar } from './Progressbar';

const Company = ({company,percentage,total_sale,target_sale,subdata}) => {

  const [levelOne, setlevelOne] = useState(false);

  return (
    <div className='Company'>
      <div className="data">
        <div className="company_header">
            <h3>{company}</h3>
            <h4>{percentage}%</h4>
        </div>
        <div className="sales_details">
            <p>Total sale :{total_sale}</p>
            <p>Target sale :{target_sale}</p>
            {/* <input type="range" value={percentage} name="" id="range-bar" /> */}
            <Progressbar percentage={percentage}/>
        </div>
        <div className="root_button">
          <button onClick={()=>{setlevelOne(!levelOne)}} >sub-comps</button>
        </div>
      </div>
      <div className="sub_data">
          {levelOne && subdata.map((data,id)=>{
            return(
              <Company key={id} company={data.company} percentage={data.percentage} total_sale={data.total_sale} target_sale={data.target_sale} subdata={data.subdata} />
            )
          })}
        </div>
    </div>
  );
};

export default Company;
