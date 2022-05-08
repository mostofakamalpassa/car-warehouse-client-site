import React from 'react';
import { useResolvedPath, useMatch, Link} from 'react-router-dom'




const ActiveRoute =({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "#272422" : "white" , fontWeight: match ?'bold':"normal"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
  
  export default ActiveRoute;