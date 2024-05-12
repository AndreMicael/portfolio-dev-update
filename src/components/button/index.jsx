import './button.scss';

const Button = (props) => {
  return (
    <div>
        <button className="button button-mockup">
          <img width="20px" src={props.icon} alt={props.alt}/>
          <p>{props.text}</p>
          
          </button>
    </div>
  )
}

export default Button