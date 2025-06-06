import React from 'react'

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top " style={{position:"relative",bottom:'0',left:'0',right:'0',backgroundColor:'grey'}}>
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
    </div>

    
  </footer>
  )
}
