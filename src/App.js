import React  from 'react'
import TenantController from './data/controllers/TenantController';

function App() {
  return (
    <div className="App">
        <button onClick={()=>{
          const tenantController = new TenantController();
          tenantController.updateTenant("name",{options:"heloeww jocker"});
          }} >click</button>
    </div>
  );
}

export default App;


