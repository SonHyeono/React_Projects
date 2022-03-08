import React from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input'
import classes from './AddBookForm.module.css'

const AddBookForm = () => {
    // button의 타입은 submit이고, onClick이벤트 발생 시, 핸들러함수는 submitHandler
    // button의 content는 Add

    const submitHandler = () => {};  
  return (

      <form className={classes.form}>
          <Input label='Amount' input={ {id: 'amount', type: 'number', defaultValue: '1'} }/>
          <Button type="submit" onClick={submitHandler}>Add</Button>
      </form>
  )
}

export default AddBookForm