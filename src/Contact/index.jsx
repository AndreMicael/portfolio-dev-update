import './contact.scss';


const Contact = () => {
  return (
    <div className='categories-container contact-container'>
        <h1 className='categories'>Contato</h1>
        <div className='Form'>
            
        <div className="field">
 
            <div className="control has-icons-left has-icons-right">
            <input className="input form-contato is-primary" type="text" placeholder="Nome completo"/>
            <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
            </span>
        </div>
        </div>



<div className="field">

  <div className="control has-icons-left has-icons-right">
    <input className="input form-contato is-primary" type="email" placeholder="Insira seu e-mail" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      {/* <i className="fas fa-exclamation-triangle"></i> */}
    </span>
  </div>
  {/* <p className="help is-danger">This email is invalid</p> */}
</div>



<div className="field">

  <div className="control">
    <textarea className="textarea form-contato is-primary" placeholder="Deixa aqui sua mensagem!"></textarea>
  </div>
</div>





<div className="field is-grouped">
  <div className="control">
<button className='Enviar-button'>  <p> Enviar </p>  </button>
        
  </div>
 
</div>

        </div>
    </div>
  )
}

export default Contact