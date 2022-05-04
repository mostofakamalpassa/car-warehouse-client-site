import React from 'react';
import { useResolvedPath, useMatch, Link} from 'react-router-dom'




const ActiveRoute =({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "red" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
  
  export default ActiveRoute;