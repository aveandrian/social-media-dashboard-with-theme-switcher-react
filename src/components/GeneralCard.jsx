import '../styles/GeneralCard.css'

export default function GeneralCard(props){
    const changeStyles = {
        color: props.changeDirection == "up" ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"
    }

    return (
        <div className={`general-card ${props.social}-card ${props.isDark ? "dark" : ""}`}>
            <div className="general-card-header">
                <img className="general-card-icon" src={`/images/icon-${props.social}.svg`} alt="Social Icon"></img>
                <p className="general-card-tag">{props.socialTag}</p>
            </div>
            <div className="general-card-followers">
                <h1 className="general-card-followers-amount">{props.amount}</h1>
                <p className="general-card-followers-text">{props.social == "youtube" ? "subscribers" : "followers"}</p>
            </div>
            <div className="general-card-change" style={changeStyles}>
                <img className="general-card-change-icon" src={`/images/icon-${props.changeDirection}.svg`} alt='Arrow Icon'></img>
                <p className="general-card-change-amount">{props.changeAmount}</p>
                <p className="general-card-change-text">Today</p>
            </div>
        </div>
    )
}