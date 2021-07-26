import React from 'react';
import { Link } from 'react-router-dom';

// Material-Ui
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

function Sidebar() {
	const classes = useStyles();
	return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
			<Link className="navLink" to="/admin">
				<ListItem button >
						<ListItemText primary="Dashboard" />
				</ListItem>
			</Link>
      <Divider />
			<Link className="navLink" to="/admin/clientes">
				<ListItem button to="/admin/clientes" >
					<ListItemText primary="Clientes" />
				</ListItem>
			</Link>
      <Divider />
			<Link className="navLink" to="/admin/produtos">
				<ListItem button to="/admin/produtos" divider>
					<ListItemText primary="Produtos" />
				</ListItem>
			</Link>
      
    </List>
  );
}

export default Sidebar;