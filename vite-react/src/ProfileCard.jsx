import PropTypes from 'prop-types';

function ProfileCard({name, age, isMember, hobbies, onHobbyClick}) {

    return(
        <div className="profile-card">
            <h2>Name : {name}</h2>    
            <h3>Age : {age}</h3>
            <h3>Status : {isMember ? "Member" : "Not a Member"}</h3>        
            <h3>Hobbies : </h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} onClick={() => onHobbyClick(hobby)}>
                        {hobby}
                    </li>
                ))}
            </ul>
        </div>
    );
}

ProfileCard.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    isMember : PropTypes.bool.isRequired,
    hobbies : PropTypes.arrayOf(PropTypes.string).isRequired,
    onHobbyClick : PropTypes.func.isRequired
};

export default ProfileCard;