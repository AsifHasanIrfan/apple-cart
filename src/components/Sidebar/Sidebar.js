import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="px-5 pt-3 sidebar">
            <h2>Apple Cart</h2>
            <List disablePadding dense className="mt-5">
            <ListItem button>
                <ListItemText><Link className="sidebar-link" to="/manageproduct">Manage Product</Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText><Link className="sidebar-link" to="/addproduct">Add Product</Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText><Link className="sidebar-link" to="/editproduct">Edit Product</Link></ListItemText>
            </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;