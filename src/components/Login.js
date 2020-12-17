import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {useForm} from "react-hook-form"

const useStyles = makeStyles((theme) => ({
    root:{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        backgroundColor:"#ffcdd2"
    },
    container:{
        margin:"4%",
        padding:"2%",
        width:"50%",
        minWidth:"700px",
        [theme.breakpoints.down(700)]:{
            minWidth:"90% !important"
        },
        [theme.breakpoints.down(500)]:{
        overflow:"scroll",
        },
        border:"2px black solid"
    },
    grid:{
        display:"flex",
        justifyContent:"center"
    },
    font:{
        fontSize:"3vw",
        [theme.breakpoints.down(700)]:{
            fontSize:"6vw"
        }
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        width:"100%"
      },
}))

export default function Login_Form(){
    const classes = useStyles()
    const {register,handleSubmit,errors} = useForm({criteriaMode:"all"})
    const [membertype,setMembertype] = React.useState("Student");
    const [collegename,setCollegeName] = React.useState();
    const [list_college_name,set_list_college_name] = React.useState(["Japyee University Of Engineering And Technology","Lovely Professional University","Amity University"]);

    const handleChangeCollegeName = (e) =>{
        setCollegeName(e.target.value)
    }

    const handleChangeMemberType = (e) =>{
        setMembertype(e.target.value)
    }

    const onSubmit = (e) =>{
        console.log(e)
    }

    return(
        <div className={classes.root}>
            <Paper className={classes.container} elevation={3}>
            <span><h1 className={classes.font}>Login</h1></span>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} style={{marginTop:"4%"}}>
                    <Grid item xs={12}>
                    <FormLabel component="legend" style={{fontWeight:"bold",WebkitTextFillColor:"black"}}>Member Type</FormLabel>
                    <RadioGroup ref={register} style={{display:"flex",flexDirection:"row"}} aria-label="Member_type" name="Member_type" value={membertype} onChange={handleChangeMemberType}>
                        <FormControlLabel value="Student" control={<Radio />} label="Student" />
                        <FormControlLabel value="Faculty" control={<Radio />} label="Faculty" />
                    </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="college-name-required">College Name</InputLabel>
                            <Select
                            inputRef={register}
                            native
                            value={collegename}
                            onChange={handleChangeCollegeName}
                            name="College Name"
                            inputProps={{
                                id: 'college-name-required',
                            }}
                            >
                            <option aria-label="None" value="" />
                            {list_college_name.map((value)=>{return(
                                <option value={value} key={value}>{value}</option>
                            )})}
                            </Select>
                        </FormControl>  
                    </Grid>
                    <Grid item xs ={12} sm = {12}>
                        <TextField
                        name = "Email_id"
                        inputRef = {register({pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                        required
                        id="outlined-required"
                        label="Email id"
                        variant="outlined"
                        />
                        {errors.Email_id && errors.Email_id.type==="pattern" && (<p style={{WebkitTextFillColor:"red"}}>Input is wrong</p>)}
                    </Grid>
                    <Grid item xs ={12} sm = {12}>
                        <TextField
                        name = "Password"
                        inputRef = {register}
                        required
                        type="password"
                        id="outlined-required"
                        label="Password"
                        variant="outlined"
                        />
                    </Grid>
                    <Grid item xs = {12} className={classes.grid}>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </div>
    )
}