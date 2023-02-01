const Hero = (props) => {
    return (
        <div className="hero-container">
            <img src="../assets/hero-image.png"/>
            <h1> {props.header} </h1>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Hero;