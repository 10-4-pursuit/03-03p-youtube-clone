import React, {useState} from "react";
import { Paper, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends React.Component {
    state = { searchTerm: '', };

handleChange = (event) => {this.setState({ searchTerm: event.target.value })}

handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm)

    event.preventDefault();

}
    render() { 
        return (
            <Paper elevation={6} style={{ padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>  
                    <TextField fullWidth label="Search..." onChange={this.handleChange}>
                    </TextField>
                </form>
                </Paper>
        )
    }
 }
 export default SearchBar;