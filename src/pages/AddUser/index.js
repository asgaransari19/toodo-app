import React, { useEffect } from 'react'
import { Box, makeStyles, Button, InputBase, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Header from '../../Componant/Header';

const useStyles = makeStyles(theme => ({
    addUser: {
        height: 'auto',
        width: '50%',
        border: '1px solid white',
        borderRadius: '10px',
        boxShadow: '2px 2px 20px blue',
        margin: '100px auto auto auto',
        boxShadow: '3px 3px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin: '80px auto auto auto',
            boxShadow: '2px 2px 10px blue'


        },
    },

    box: {
        margin: '20px auto auto auto',
        height: '60px',
        width: '80%',
        // border: '1px solid',
        display: 'flex',
        flexDirection: 'column'
    },

    input: {
        border: '1px solid',
        height: '40px',
        borderRadius: '10px',
        background: '#FFF5EE',
    },

    btns: {
        margin: '20px auto auto auto',
        // border: '1px solid',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    list: {
        height: "auto",
        borderRadius: '5px',
        width: '90%',
        border: '1px solid #FFF5EE',
        margin: '20px auto auto auto',
        alignItems: 'center',
        display: "flex",
        justifyContent: 'space-Between',

    },
    user: {
        display: 'flex',
        alignItems: 'center',
        // border: '1px solid',

    }

}))


const getLocalItems = () => {
    let lists = localStorage.getItem('lists')
    if (lists) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return [];
    }
}


function AddUser() {

    const classes = useStyles()
    const [user, setUser] = React.useState();
    const [items, setItems] = React.useState(getLocalItems());
    const [add, setAdd] = React.useState(true)
    const [isEditItems, setIsEditItems] = React.useState(null);

    const addItem = () => {
        if (!user || user === '') {
            alert("please enter your name")
        }
        else if (user && !add) {
            setItems(
                items.map((item) => {
                    if (item.id === isEditItems) {
                        return { ...item, name: user }
                    }
                    return item;
                })
            )
            setUser('')
            setAdd(true)
            setIsEditItems(null)
        }
        else {
            const addedUser = { id: new Date().getTime().toString(), name: user }
            setItems([...items, addedUser])
            setUser('')
            console.log('=========> :addedUser', addedUser)

        }

    }


    const handleReset = () => {
        setUser([])
    }

    const deleteContact = (index) => {
        const updateContact = items.filter((item) => {
            return index != item.id

        })
        setItems(updateContact)

    }

    const editItems = (id) => {
        let editContact = items.find((item) => {
            return item.id === id
        })
        console.log('------------>editData', editContact)
        setUser(editContact.name)
        setAdd(false)
        setIsEditItems(id)
    }


    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items))
    }, [items])


    return (
        <><Header />
            <div className={classes.addUser}>
                <Box className={classes.box} >
                    <label>name</label>
                    <input
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className={classes.input}
                        type='text'
                        placeholder='enter your full name' />
                </Box>
                <Box className={classes.btns}>
                    {add ?
                        <Button size="small" type="submit" color='primary' variant="contained" onClick={addItem} > <AddIcon />add</Button> :
                        <Button size="small" type="submit" variant="contained" onClick={addItem} ><EditIcon /> add</Button>

                    }
                    <Button size="small" onClick={handleReset} color='secondary' variant="contained" type='reset'>remove</Button>
                </Box>
                <div>
                    {
                        items.map((contact) => {
                            return (
                                <div className={classes.list}>

                                    <div className={classes.user} >
                                        <AccountCircleIcon />
                                        <Typography className={classes.name} key={contact.id}>{contact.name}</Typography>
                                    </div>

                                    <Box classsName={classes.buttons}>
                                        <Button onClick={() => deleteContact(contact.id)}> <DeleteIcon /> </Button>
                                        <Button onClick={() => editItems(contact.id)}> <EditIcon /> </Button>
                                    </Box>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AddUser;
