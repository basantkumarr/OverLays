 import { Link } from 'react-router-dom'
 
const HeaderAdmin = () => {
  return (
    <div>
      <div className="container all flex py-4">

<div className="d-flex border-r-2 flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "380px" }}>
 
 <div className="nav-item">
<Link to="/adminn" className="nav-link  " aria-current="page">
  <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
  Add Products
</Link>
</div>
<hr />
<div>
<Link  to="/update" className="nav-link link-body-emphasis">
  <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
    Update Data</Link>
</div>
 
 <hr />
 
</div>
</div>
</div>
   )
}

export default HeaderAdmin
