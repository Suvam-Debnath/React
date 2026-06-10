import PropTypes from 'prop-types';

function ProfileCard({name, age, isMember}){

    return(
        <div>
            <h2>Name : {name}</h2>    
            <h3>Age : {age}</h3>
            <h3>Status : {isMember ? "Member" : "Not a Member"}</h3>        
        </div>
    );
}

ProfileCard.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    isMember : PropTypes.bool.isRequired
};

export default ProfileCard;