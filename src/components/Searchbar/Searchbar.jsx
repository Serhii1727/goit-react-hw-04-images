import { useState } from "react";
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { Header, Form, FormButton, FormInput } from './Searchbar.styled'

export const Searchbar = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()

        if (name.trim() === '') {
            toast.warn("Please enter a request", {
                theme: "colored",
            })
        }

        onSubmit(name)
        setName("")
    }

    return (
        <Header className="searchbar">
            <Form className="form" onSubmit={submitForm}>
                <FormButton type="submit" className="button">
                    <ImSearch style={{ width: 20, height: 20 }} />
                </FormButton>

                <FormInput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={name}
                    onChange={handleNameChange}
                />
            </Form>
        </Header>
    )
}


export default Searchbar

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}