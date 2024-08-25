const isAuth = (req,res,next)=>{
  if(req.isAuthenticated()) {
    next();
  }
  else{
    res.json({loggedIn:false});
  }
  
  };
  
  export default isAuth;