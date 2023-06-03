import '../styles/OverviewCard.css'


export default function OverviewCard(props){
    const changeStyles = {
        color: props.changeDirection == "up" ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"
    }
    return (
        <div className={`overview-card ${props.isDark ? "dark" : ""}`}>
            <div className="overview-card-header">
                <p className="overview-card-header-title">{props.title}</p>
                <img className="overview-card-header-icon" src={`/images/icon-${props.social}.svg`} alt='Social Icon'></img>
            </div>
            <div className="overview-card-stats">
                <h1 className="overview-card-stats-amount">{props.amount}</h1>
                <div className="overview-card-stats-change" style={changeStyles}>
                    <img className="overview-card-stats-change-icon" src={`/images/icon-${props.changeDirection}.svg`} alt='Arrow Icon'></img>
                    <p className="overview-card-stats-change-amount">{props.changeAmount}</p>
                </div>
            </div>
        </div>
    )
}