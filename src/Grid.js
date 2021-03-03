import './Grid.css';

function Grid() {
    return (
      <div>
       <h2 className="text-danger text-center">Grid System</h2>
       <div className="row">
            <div className="div_1"></div>
            <div className="div_2"></div>
            <div className="div_3"></div>
            <div className="div_4"></div>
            <div className="div_5"></div>
            <div className="div_6"></div>
       </div>
       <hr />

       <h2 className="text-danger text-center">Grid System (col-4,4,4)</h2>
       <div className="row">
            <div className="div_1 col-4"></div>
            <div className="div_2 col-4"></div>
            <div className="div_3 col-4"></div>
            <div className="div_4 col-4"></div>
            <div className="div_5 col-4"></div>
            <div className="div_6 col-4 "></div>
       </div>
       <hr />

       <h2 className="text-danger text-center">Grid System (col-sm-12,12,12)</h2>
       <div className="row">
            <div className="div_1 col-sm-12"></div>
            <div className="div_2 col-sm-12"></div>
            <div className="div_3 col-sm-12"></div>
            <div className="div_4 col-sm-12"></div>
            <div className="div_5 col-sm-12"></div>
            <div className="div_6 col-sm-12"></div>
       </div>
       <hr />

       <h2 className="text-danger text-center">Grid System (col-lg-6,3,3)</h2>
       <div className="row">
            <div className="div_1 col-lg-6"></div>
            <div className="div_2 col-lg-3"></div>
            <div className="div_3 col-lg-3"></div>
            <div className="div_4 col-lg-6"></div>
            <div className="div_5 col-lg-3"></div>
            <div className="div_6 col-lg-3"></div>
       </div>
       
       </div>
    );
  }
  
  export default Grid;