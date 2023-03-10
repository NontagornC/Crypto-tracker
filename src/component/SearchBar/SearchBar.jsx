import React from 'react'
import {Form,Button,} from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.scss"

const SearchBar = () => {
  return (
    <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search for your coins"
              className="me-2"
              aria-label="Search"
            />
            <Button >
              <AiOutlineSearch className="search-icon"/>
            </Button>
      </Form>
  )
}

export default SearchBar