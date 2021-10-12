import './Form.css'
export default function Form(props) {
    const { values } = props
  
    if (!values) {
      return <h3>fetching form details...</h3>
    }
  
    return (
      <div className='form-list'>
        <div className='form-card'>    
            <h2>{values.username}</h2>
            <p>Firstname: {values.firstname}</p>
            <p>Email: {values.email}</p>
            <p>bio: {values.bio}</p>
        </div>
      </div>
    )
  }
  