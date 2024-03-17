import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import Store from '../redux/Store'
import { buyPhone } from '../redux/MobileStoreActions'

const AddNewProduct = () => {
    const formFields = {
        name: '',
        price: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Enter The Name"),
        price: Yup.string().required("Enter The Price")
    })
    const submitHandler = values => {
        Store.dispatch(buyPhone(values.name, values.price))
    }
  return (
    <div>
        <Formik validateOnBlur={false} validateOnChange={false} onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema}>
            <Form>
                <label>Name</label><br />
                <Field type='text' name='name' /><br />
                <ErrorMessage name='name' /><br />
                <label>Price</label><br />
                <Field type='text' name='price' /><br />
                <ErrorMessage name='price' /><br /><br />
                <button type='submit'> Add </button>
            </Form>
        </Formik>
    </div>
  )
}

export default AddNewProduct