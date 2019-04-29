export default onEmailChanged = (text)=>{
    return{
        type:'Email_Changed',
        payload:text
    }
}