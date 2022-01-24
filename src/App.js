import './App.css';
import { useState } from 'react';
import Company from './components/Company';

function App() {  

  const [collapse,setCollaps] = useState(false);

const newData=
      [
        {
            "company" : "Tata Steel",
            "percentage" : "20",
            "total_sale" : "200cr",
            "target_sale" : "400cr",
            "subdata" :
            [
                {
                    "company" : "Factory A",
                    "percentage" : "20",
                    "total_sale" : "20cr",
                    "target_sale" : "100cr",
                    "subdata" : 
                    [
                        {
                            "company" : "Godown A",
                            "percentage" : "50",
                            "total_sale" : "200cr",
                            "target_sale" : "400cr",
                            "subdata" : []
                        },
                        {
                            "company" : "Godown B",
                            "percentage" : "50",
                            "total_sale" : "200cr",
                            "target_sale" : "400cr",
                            "subdata" : []
                        }
                    ]
                },
                {
                    "company" : "Factory B",
                    "percentage" : "75",
                    "total_sale" : "150cr",
                    "target_sale" : "200cr",
                    "subdata" : 
                    [
                        {
                            "company" : "Godown A",
                            "percentage" : "50",
                            "total_sale" : "200cr",
                            "target_sale" : "400cr",
                            "subdata" : []
                        },
                        {
                            "company" : "Godown B",
                            "percentage" : "50",
                            "total_sale" : "200cr",
                            "target_sale" : "400cr",
                            "subdata" : []
                        }
                    ]
                },
                {
                    "company" : "Factory C",
                    "percentage" : "30",
                    "total_sale" : "30cr",
                    "target_sale" : "100cr",
                    "subdata" : 
                    [
                        {
                            "company" : "Godown A",
                            "percentage" : "50",
                            "total_sale" : "200cr",
                            "target_sale" : "400cr",
                            "subdata" : []
                        },
                        {
                            "company" : "Godown B",
                            "percentage" : "50",
                            "total_sale" : "200cr",
                            "target_sale" : "400cr",
                            "subdata" : []
                        }
                    ]
                }
            ]
        }
      ]

  return (
    <div className="App">
      <header>
        <h1>Company Status</h1>
      </header>
      <div className="root_button">
        <button onClick={()=>{setCollaps(!collapse)}} >Data</button>
      </div>
      <div className="main">
        {collapse && newData.map((data)=>{
          return(
            <Company company={data.company} percentage={data.percentage} total_sale={data.total_sale} target_sale={data.target_sale} subdata={data.subdata} />
          )
        })}
      </div>
      
    </div>
  )
}

export default App;
