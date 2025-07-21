const UserProfileFetch = () => {
    
}

interface UserProfileProps{
    name: string;
    mood: string; 
    availability: number;
    availabilityTime: string;
    interests: string[];
    imageUrl: string;
}

const UserProfileCard: React.FC<UserProfileProps> =({
    name,
    mood,
    availability,
    availabilityTime,
    interests,
    imageUrl,
}) => {
    return(<div className="profile-container">
      <div className="profile-card">
        <img src={imageUrl} alt={name} className="profile-image" />
        <div className="availability-circle">
          <div className="availability-text">
            <strong>{availability}%</strong>
            <div className="subtext">available</div>
            <small>{availabilityTime}</small>
          </div>
        </div>
        <h2>{name}</h2>
        <div className="mood-tag">{mood}</div>
        <div className="interests">
          {interests.map((interest, idx) => (
            <span key={idx} className="interest-tag">{interest}</span>
          ))}
        </div>
        <div className="action-buttons">
          <button className="btn reject">✕</button>
          <button className="btn like">❤️</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;