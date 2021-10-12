const Form =(props)=>{

    const {values, update, submit, errorText} = props

    const alter = event =>{
        const name = event.target.name;
        const value = event.target.value;
        update(name, value);
    }
    const onSub = event =>{
        event.preventDefault();
        submit();
    }


return(<div className='formHolder'>
        <form className='Main F' onSubmit={onSub}>
            <h2 className="error">{errorText}</h2>
            <label className="user i">
            Username:&nbsp;
                <input 
                type='text' 
                name='username'
                maxLength='30'
                placeholder="type here"
                value={values.username}
                onChange={alter}
                />
            </label>
            <label className="first i">
            Firstname:&nbsp; 
                <input 
                type='text' 
                name='firstname'
                maxLength='30'
                placeholder='type here'
                value={values.firstname}
                onChange={alter}
                />
            </label>
            <label className="email i">
            Email:&nbsp;
                <input 
                type='email' 
                name='email'
                placeholder='type here'
                value={values.email}
                onChange={alter}
                />
            </label>  
            <label className="bio i" >
            Fill out a your bio:&nbsp;
                <textarea 
                value={values.bio}
                onChange={alter}
                className='bio-input' 
                rows="5" 
                cols="60" 
                name="bio" 
                placeholder="Enter bio here">
                </textarea>
            </label>
            <input className='sub' type='submit' value='submit'/>  
        </form>
       </div>
    );
}
    export default Form