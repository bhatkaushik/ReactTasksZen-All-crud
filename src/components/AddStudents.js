import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
// import {StudentContext} from '../App'

function AddStudents(props) {

    // let context = useContext(StudentContext)

    let navigate = useNavigate();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [mobile,setMobile]=useState("");
    let [cls,setCls]=useState("");
    const url = "https://6358e302c27556d28945e202.mockapi.io/students/"

    //Using fetch
    // let handleSubmit = async()=>{
    //     await fetch(url,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             name,
    //             email,
    //             mobile,
    //             class:cls
    //         })
    //     })
    //     .then(response=>response.json())
    //     .then(res=>{
    //         navigate("/all-students")
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })

    // }


    //using axios
    let handleSubmit = async()=>{
        try {
            let response = await axios.post(url,{
                name,
                email,
                mobile,
                class:cls
            })
            console.log(response)
            if(response.status===201)
                navigate('/all-students')
            else
                alert("Internal server error!")
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Class</Form.Label>
                <Form.Control type="text" placeholder="Class" onChange={(e)=>setCls(e.target.value)}/>
            </Form.Group>
  
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default AddStudents
