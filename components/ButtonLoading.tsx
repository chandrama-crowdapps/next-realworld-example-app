import React, {useState} from 'react'

export default function ButtonLoading() {
    const [loading, setLoading] = useState(false)
    function loadData(){
        setLoading ({loading: true})

    setTimeout(()=>{
        setLoading({loading: false});
    }, 1000);
    
    }
  return (
    <>
    <div>
    <button className="btnLoading" onClick={loadData} disabled={loading}>
    {loading &&(<Loader/>)}
    {loading && <span className="oneSpan">Loading page</span>}
    {!loading && <span className="twoSpan">Load page</span>}
    </button>
    </div>

    <style jsx>
    {`
    .btnLoading{
        background-color: green;
    }
    .oneSpan{
        color: red;
        font-size: 20px;
    }

    .twoSpan{
        color: black;
        font-size: 20px;
    }
    `}
    </style> 
    </>
  )
}
