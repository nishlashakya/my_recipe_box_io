import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
  <label>Title</label>
    <Form.Field>
      <input placeholder='Title' />
    </Form.Field>
	<label>Description</label>
    <Form.TextArea>
      <input placeholder='Description' />
    </Form.TextArea>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleForm
