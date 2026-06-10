function ProfileCard(props){

    return(
        <div>
            <h2>Name : {props.name}</h2>    
            <h3>Age : {props.age}</h3>
            <h3>Status : {props.isMember ? "Member" : "Not a Member"}</h3>        
        </div>
    );
}

export default ProfileCard;