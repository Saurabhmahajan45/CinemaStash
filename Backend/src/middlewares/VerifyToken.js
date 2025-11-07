import jwt from "jsonwebtoken";

export function verifyToken(request,response,next){
    const authHeader = request.get('Authorization'); //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NjI0NDA1MTJ9.pOe81ckIZ0PwGkmHoPbX8dTVj6Qf9IUQXLgth28vFos
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,'user1234',(error, payload)=>{
            if(error){
               response.status(401).send({message:'Token is invalid'}); 
            }
            else{
                console.log(payload);
                request.loggedInUserId = payload.userId;
                request.role = payload.role;
               next(); 
            }
        });
    }
    else{
       response.status(401).send({message:'Token is missing'}); 
    }
}

export function authorize(allowedRoles){
    return (request, response, next)=>{
        if(allowedRoles.includes(request.role)){
            next();
        }
        else{
            response.status(403).send({message:'Access denied'});
        }
    }
}