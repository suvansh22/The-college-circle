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
import {staffregistration} from './connection'

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

export default function Register_Form(){
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
        e.membertype = membertype
        staffregistration(e)
        .catch(error=>console.log(error))
        .then(result=>console.log(result))
        console.log(e)
    }

    return(
        <div className={classes.root}>
            <Paper className={classes.container} elevation={3}>
            <span><h1 className={classes.font}>Registration</h1></span>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} style={{marginTop:"4%"}}>
                    <Grid item xs={4} sm={4}>
                        <TextField
                        inputRef={register({pattern: /^[A-Za-z]+$/i})}
                        name="firstname"
                        required
                        id="outlined-required"
                        label="Firstname"
                        variant="outlined"
                        />
                        {errors.firstname && errors.firstname.type==="pattern" && (<p style={{WebkitTextFillColor:"red"}}>Input is wrong</p>)}
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                        inputRef={register({pattern: /^[A-Za-z]+$/i})}
                        name="middlename"
                        id="outlined-required"
                        label="Middlename"
                        variant="outlined"
                        />
                    </Grid>
                        {errors.middlename && errors.middlename.type==="pattern" && (<p style={{WebkitTextFillColor:"red"}}>Input is wrong</p>)}
                    <Grid item xs={4} sm={4}>
                        <TextField
                        required
                        inputRef={register({pattern: /^[A-Za-z]+$/i})}
                        name="lastname"
                        id="outlined-required"
                        label="Lastname"
                        variant="outlined"
                        />
                        {errors.lastname && errors.lastname.type==="pattern" && (<p style={{WebkitTextFillColor:"red"}}>Input is wrong</p>)}
                    </Grid>
                    <Grid item xs={12}>
                    <FormLabel component="legend" style={{fontWeight:"bold",WebkitTextFillColor:"black"}}>Member Type</FormLabel>
                    <RadioGroup ref={register} style={{display:"flex",flexDirection:"row"}} aria-label="Member_type" name="membertype" value={membertype} onChange={handleChangeMemberType}>
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
                            name="collegename"
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
                    <Grid item xs ={12} sm = {6}>
                        <TextField
                        name = "enrollmentno"
                        inputRef = {register}
                        required
                        id="outlined-required"
                        label="Enrollment no"
                        variant="outlined"
                        className={classes.grid}
                        />
                    </Grid>
                    <Grid item xs ={12} sm = {6}>
                        <TextField
                        name = "email"
                        inputRef = {register({pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                        required
                        id="outlined-required"
                        label="Email id"
                        variant="outlined"
                        className={classes.grid}
                        />
                        {errors.email && errors.email.type==="pattern" && (<p style={{WebkitTextFillColor:"red"}}>Input is wrong</p>)}
                    </Grid>
                    <Grid item xs = {12} className={classes.grid}>
                        <Button type="submit" variant="contained" color="primary">
                            Send for authentication
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </div>
    )
}