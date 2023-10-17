import React from 'react'
import sampleData from '../SampleData/sample'
import { useState } from 'react'

function Table() {
    // Populating the table with the data from the 
    const [sample, setSample] = useState(sampleData)
    const [myForm, setMyForm] = useState({
        fullName: '',
        age:'',
        city: [],
        occuptions:[]

    })

    const cities = new Set(sample.filter((sample) => {
        return sample.city
    }))

    const occuptions = new Set(sample.filter((sample) => {
        return sample.occuptions
    }))

    console.log(cities)
    console.log(occuptions)
    
    // 
    const updateTable = ()=>{
        const filtered_data = sampleData.filter((sample)=>{
            
            // if (sample.name.toLowerCase() === myForm.fullName.toLowerCase() && sample.age === myForm.age){
            //     // console.log("hfsdufds")
            //     return sample
            // }
            // else
            //     // console.log(sample.name , sample.age, myForm.fullName, myForm.age )
            
            
        })
        console.log(filtered_data)
    }




    // Handle Runtime Change in the Fields
    const handleChange = (e) => {
        

        const {name, type, value, selectedOptions } = e.target
        if (name === 'city' || name === 'occuptions'){

            console.log(Array.from(selectedOptions, (option) => option.value))
            setMyForm({
                ...myForm,
                [name] : Array.from(selectedOptions, (option) => option.value)
            })
        }

        setMyForm({
          ...myForm,
            [name]: value
        })
    }

    // Handle Reset Filters
    const handleReset = () => {
        console.log("Reset Button is clicked")
        setSample(sampleData)
    }


    // Handle all Filter Submissions
    const handleSubmit = () => {
        console.log(myForm)

        const filtered_data = sample.filter((data) =>{
            if (data.name=== myForm.fullName && data.age== myForm.age){
                return data
            }
        })

        console.log(filtered_data)
        setSample(filtered_data)
    }


  return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Occuption</th>
                    </tr>
                </thead>
                <tbody>
                    {sample.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <td>{item.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <br />
            <br />
            <h1>Filter Fields</h1>
            <form >
                    <input type="text" placeholder='Name' name='fullName' onChange={handleChange}/><br />    
                    <input type="text" placeholder='Age' name='age' onChange={handleChange}/>

                    {/* Drop Down Menus  */}

                    <div>
                        <label htmlFor="">City </label>

                        <select name="city" onChange={handleChange}  >
                        {cities.map((item, index) => (
                            <option value={item.city.toLowerCase()}>{item.city}</option>
                        ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Occuptions: </label>
                        <select name="occuptions" onChange={handleChange} >
                        {occuptions.map((item, index) => (
                            <option value={item.occupation.toLowerCase()}>{item.occupation}</option>
                        ))}
                        </select>
                    </div>
            </form>

            <br />
            <br />
            <button type="button" onClick={handleReset} >Reset Filters</button> <br />
            <button type="button" onClick={handleSubmit} >Search</button> <br />
 

        </div>


    


  )
}

export default Table